import { firstRoom } from './firstRoom.js'
import { clear, inventory, status } from './say.js'

let body, input, room = firstRoom

export function changeRoom(newRoom) {
    clear();
    room = newRoom
}

function keyup(e) {
    if (e.code === 'Enter') {
        body.innerHTML += `<div class="player-input">${input.value}<div>`
        room.respond(input.value)
        input.value = ''
        input.scrollIntoView({ behavior: "smooth", block: "end" });
    }
}

window.onload = () => {
    body = document.querySelector('.body')
    input = document.querySelector('.input')
    input.focus();
    input.addEventListener("keyup", keyup);
    input.addEventListener("blur", () => input.focus());
    status('Looking fine.')
    inventory("Nothing.")
    room.enter()
}