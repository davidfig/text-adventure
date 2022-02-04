import { firstRoom } from '../dalia/firstRoom.js'
import { whoRoom } from './whoRoom.js'
import { clear } from './say.js'

let room

export function initRooms() {
    const search = new URLSearchParams(window.location.search)
    if (!search.get('coder')) {
        changeRoom(whoRoom)
    } else {
        if (search.get('coder').toLowerCase().includes('dalia')) {
            document.title = 'Dalia\'s Adventure'
            changeRoom(firstRoom)
        } else if (search.get('coder').toLowerCase().includes('jonathan')) {
            document.title = 'Jonathan\'s Adventure'
            changeRoom(firstRoom)
        }
    }
}

export function getRoom() {
    return room
}

export function changeRoom(newRoom) {
    clear();
    room = newRoom
    room.enter()
}