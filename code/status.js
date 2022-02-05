const status = {}

export function addStatus(name, current, maximum) {
    status[name] = [current, maximum]
    print()
}

export function setStatus(name, value) {
    status[name][0] = value
    print()
}

export function setStatusMaximum(name, value) {
    status[name][1] = value
    print()
}

export function changeStatus(name, delta) {
    status[name][0] += delta
    print()
}

function print() {
    let s = ''
    for (const key in status) {
        const entry = status[key]
        s += `<div>${key} ${entry[0]} / ${entry[1]}`
    }
    document.querySelector('.about-text').innerHTML = s
}