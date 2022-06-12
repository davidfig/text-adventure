import fs from 'fs-extra'
import path from 'path'

const publicDir = 'public/'
const title = 'Unknown'

const exceptions = ['index.html']

async function index(dir, cache, cordova) {
    let index = await fs.readFile(`${publicDir}index.html`) + ''
    index = index.replace('{{css}}', `<link rel="stylesheet" href="index${cache}.css">`)
    index = index.replace('{{script}}', (cordova ? '<script src="cordova.js"></script>' : '') + `<script src="index${cache}.js"></script>`)
    index = index.replaceAll('{{title}}', title)
    await fs.outputFile(`${dir}index.html`, index)
}

async function copyDir(from, to, cache, skipEmpty) {
    if (!skipEmpty) {
        await fs.emptyDir(to)
    }
    const files = await fs.readdir(from)
    for (const file of files) {
        const full = path.join(from, file)
        if ((await fs.lstat(full)).isDirectory()) {
            await copyDir(full, path.join(to, file), cache)
        } else {
            if (!exceptions.includes(file)) {
                await fs.copyFile(full, path.join(to, file))
            }
        }
    }
}

export async function buildAssets(dir, cache, skipEmpty, cordova) {
    console.log(`[ASSETS] copying ${publicDir} to ${dir} with cache=${cache}...`)
    await copyDir(publicDir, dir, cache, skipEmpty)
    await index(dir, cache, cordova)
}
