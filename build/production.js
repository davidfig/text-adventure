import fs from 'fs-extra'
import cuid from 'cuid'

import { version } from './version'
import { buildJs } from './js'
import { buildCss } from './css'
import { buildAssets } from './assets'

export async function production() {
    await version()
    const packageJson = await fs.readJson('./package.json')
    console.log(`Deploying ${packageJson.name}...`)
    const cache = `.${cuid.slug()}`
    const dir = 'dist/'
    await fs.emptyDir(dir)
    await buildAssets(dir, cache)
    await buildCss(dir, cache)
    await buildJs(dir, cache, true, packageJson.version)
    console.log(`${packageJson.name} v${packageJson.version} deployed to ${dir}`)
    process.exit(0)
}

production()