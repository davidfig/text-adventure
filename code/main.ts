import { initRooms, getRoom } from './room'
import { inventory, status } from './say'

let body: HTMLBodyElement;

window.onload = () => {
    body = document.querySelector('.body') as HTMLBodyElement;
    inventory("Nothing.");
    status('Looking fine.');
    initRooms();
}