import { initRooms, getRoom } from './room'
import { inventory, say, status } from './say'

let body: HTMLBodyElement;
let input: HTMLInputElement;

function keyup(e: KeyboardEvent): void {
    if (e.code === 'Enter') {
        say(`<div class="player-input">${input.value}<div>`);
        getRoom().respond(input.value);
        input.value = '';
        input.scrollIntoView({ behavior: "smooth", block: "end" });
    }
}

window.onload = () => {
    body = document.querySelector('.body') as HTMLBodyElement;
    input = document.querySelector('.input') as HTMLInputElement;
    input.focus();
    input.addEventListener("keyup", keyup);
    input.addEventListener("blur", () => input.focus());
    status('Looking fine.');
    inventory("Nothing.");
    initRooms();
}