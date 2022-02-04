import { initRooms, getRoom } from './room.js'
import { inventory, say, status } from './say.js'

let body, input

function keyup(e) {
    if (e.code === 'Enter') {
        say(`<div class="player-input">${input.value}<div>`)
        getRoom().respond(input.value)
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
    initRooms()    
}