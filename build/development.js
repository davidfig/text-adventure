import fs from 'fs-extra'
import chokidar from 'chokidar'

import { reload } from './reload'
import { buildJs } from './js'
import { buildCss } from './css'
import { buildAssets } from './assets'

let _cache, _dir, _version

async function watch() {
    const awaitWriteFinish = {
        stabilityThreshold: 250,
        pollInterval: 100
    }

    const jsWatch = chokidar.watch(['code/**/*.?s'], { awaitWriteFinish })
    jsWatch.on('change', async file => {
        reload.lock()
        console.log(`javascript ${file} changed...`)
        await buildJs(_dir, _cache, false, _version)
        reload.signal()
    })
    const cssWatch = chokidar.watch('code/**/*.css', { awaitWriteFinish })
    cssWatch.on('change', async () => {
        reload.lock()
        await buildCss(_dir, _cache)
        reload.signal()
    })

    const assets = chokidar.watch(['public/images', 'public/fonts', 'public/index.html'], { awaitWriteFinish })
    assets.on('change', async () => {
        reload.lock()
        await buildAssets(_dir, _cache, true)
        reload.signal()
    })
}

export async function development() {
    _version = (await fs.readJson('package.json')).version
    _cache = ''
    _dir = 'www/'
    await fs.emptyDir(_dir)
    await buildAssets(_dir, _cache)
    await buildCss(_dir, _cache)
    await buildJs(_dir, _cache, false, _version)
    watch()
    return _dir
}