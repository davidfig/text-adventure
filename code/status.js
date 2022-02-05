const status = {}

export function addStatus(name, current, maximum, currency) {
    status[name] = [current, maximum, currency]
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

export function getStatus(name) {
    return status[name][0]
}

function print() {
    let s = ''
    for (const key in status) {
        const entry = status[key]
        const currency = entry[2] ? entry[2] : ''
        if (entry[1]) {
            s += `<div>${key}: ${entry[0]} / ${entry[1]}</div>`
        } else {
            s += `<div>${key}: ${currency}${entry[0]}</div>`
        }
    }
    document.querySelector('.about-text').innerHTML = s
}