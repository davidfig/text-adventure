import fs from 'fs-extra'
import { performance } from 'perf_hooks'
import readLines from 'n-readlines'
import esbuild from 'esbuild'
import he from 'he'

const MAIN = 'code/main.ts'
const linesToShow = 3

// from https://stackoverflow.com/a/43532829/1955997
function roundTo(value, digits) {
    value = value * Math.pow(10, digits)
    value = Math.round(value)
    value = value / Math.pow(10, digits)
    return value
}

function encode(s) {
    return he.encode(s).replaceAll('\n', '<br>').replaceAll('\r', '').replaceAll('  ', '&nbsp;&nbsp;')
}

async function outputError(dir, cache, e) {
    console.log('error compiling javascript.')
    let s = ''
    if (!e.errors) {
        s += e.stack.replaceAll('\n', '<br>')
    } else {
        for (const error of e.errors) {
            s += `Error in ${error.location.file} (${error.location.line}:${error.location.column}): ${error.text}<br><br>`
            const lines = new readLines(error.location.file)
            let i = 1, line
            while (line = lines.next()) {
                if (i > error.location.line + linesToShow) {
                    break
                }
                if (i >= error.location.line - linesToShow) {
                    if (i === error.location.line) {
                        let actual = line.toString()
                        actual = `${encode(actual.substr(0, error.location.column))}` +
                            `<span style="background:red">${encode(actual.substr(error.location.column, error.location.length))}</span>` +
                            encode(actual.substr(error.location.column + error.location.length))
                        s += `<div style="background:blue;color:white">${actual}</div>`
                    } else {
                        s += `${encode(line.toString())}<br>`
                    }
                }
                i++
            }
        }
    }
    const script = `window.addEventListener('load', () => {
        document.body.style.background = 'white'
        document.body.style.fontFamily = 'Consolas,monaco,monospace'
        document.body.style.margin = '1rem'
        document.body.style.width = 'auto'
        document.body.style.height = 'auto'
        document.body.innerHTML = '${s}'
    });` + await fs.readFile('./build/live.js')
    await fs.outputFile(`${dir}/index${cache}.js`, script)
}

export async function buildJs(dir, cache, minify, version = '') {
    const now = performance.now()
    const define = {
        'window.RELEASE': 'false',
        'window.VERSION': `'${version}'`,
        'window.CORDOVA_INJECT': 'false'
    }
    try {
        const inject = minify ? [] : ['./build/live.js']
        await esbuild.build({
            entryPoints: [MAIN],
            inject,
            define,
            bundle: true,
            outfile: `${dir}/index${cache}.js`,
            minify,
            sourcemap: !minify,
        })
        console.log(`packaged javascript (${roundTo(performance.now() - now, 2)}ms).`)
    } catch (e) {
        console.warn(e)
        outputError(dir, cache, e)
    }
}

export async function buildCordovaJs(dir, debug, version = '') {
    const now = performance.now()
    try {
        const define = {
            'window.RELEASE': 'true',
            'window.VERSION': `'${version}'`,
            'window.CORDOVA_INJECT': 'true'
        }
        await esbuild.build({
            entryPoints: ['code/main.ts'],
            bundle: true,
            define,
            outfile: `${dir}/index.js`,
            minify: !debug,
            sourcemap: debug,
        })
        console.log('[BUILD]', `packaged javascript (${roundTo(performance.now() - now, 2)}ms).`)
    } catch (e) {
        console.log('[BUILD]', e)
        if (!debug) {
            process.exit(1)
        }
    }
}
