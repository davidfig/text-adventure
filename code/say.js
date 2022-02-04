export function clear() {
    document.querySelector('.body').innerHTML = ''
}
export function say(text) {
    document.querySelector('.body').innerHTML += `<div class="computer-input">${text}</div>`
}

export function status(text) {
    document.querySelector('.about-text').innerHTML = text
}

export function inventory(text) {
    document.querySelector('.inventory-text').innerHTML = text
}
