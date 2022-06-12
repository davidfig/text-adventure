import jsonBump from 'json-bump'
import readline from 'readline'

export async function version() {
    return new Promise(async resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        const version = await jsonBump('package.json', { readOnly: true })
        const updated = `${version.major}.${version.minor}.${parseInt(version.patch) + 1}`
        rl.question(`Current version: ${version.original}\nUpdated version: `, async selected => {
            if (selected !== version) {
                await jsonBump('package.json', { replace: selected })
                console.log(`Writing version ${selected} to package.json`)
            }
            rl.close()
            resolve()
        })
        rl.write(updated)
    })
}