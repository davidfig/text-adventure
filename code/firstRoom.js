import { say } from "./say.js"

class FirstRoom {
    enter() {
        say("Welcome to the first room! What are you going to do???")
    }

    respond(text) {
        if (text.includes("look")) {
            say("you look around!")
        } else {
            say("I did not understand that!")
        }
    }
}

export const firstRoom = new FirstRoom()