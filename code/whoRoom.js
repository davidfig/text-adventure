import { firstRoom } from '../dalia/firstRoom.js'
import { firstRoom as jonathanFirstRoom } from '../dalia/firstRoom.js'
import { say } from "./say.js"
import { changeRoom } from "./room.js"

class WhoRoom {
    count = 0

    enter() {
        say('Who is coding? Is it Dalia or Jonathan?')
    }

    respond(text) {
        text = text.toLowerCase()
        if (text.includes('dalia')) {
            history.replaceState({}, 'Dalia\'s Adventure', '?coder=dalia')
            changeRoom(firstRoom)
        } else if (text.includes('jon')) {
            history.replaceState({}, 'Jonathan\'s Adventure', '?coder=jonathan')
            changeRoom(jonathanFirstRoom)
        } else {
            if (this.count === 0) {
                say("I do not know who that is.")
            } else if (this.count === 1) {
                say("I still do not know who that is.")
            } else if (this.count === 2) {
                say("These are not the droids you're looking for.")
            } else {
                say("You can only choose between Jonathan and Dalia. Really!")
            }
            this.count++
        }
    } 
}

export const whoRoom = new WhoRoom()