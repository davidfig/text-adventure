let body

window.addEventListener("load", () => body = document.querySelector('.body'))

export function say(text) {
    body.innerHTML += `<div class="computer-input">${text}</div>`
}

