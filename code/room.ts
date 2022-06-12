import { firstRoom } from '../rooms/firstRoom';
import { Room } from '../rooms/Room';
import { clear } from './say';

let room: Room;

export function initRooms(): void {
    firstRoom.enter();
}

export function getRoom(): Room {
    return room;
}

export function changeRoom(newRoom: Room) {
    clear()
    room = newRoom
    room.enter()
}