import { firstRoom } from './firstRoom.js'

let body, input, room = firstRoom

export function changeRoom(newRoom) {
    room = newRoom
}

function keyup(e) {
    if (e.code === 'Enter') {
        body.innerHTML += `<div class="player-input">${input.value}<div>`
        room.respond(input.value)
        input.value = ''
    }
}

window.onload = () => {
    body = document.querySelector('.body')
    input = document.querySelector('.input')
    input.focus();
    input.addEventListener("keyup", keyup);
    room.enter()
}