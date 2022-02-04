import { say } from '../code/say.js'

class FirstRoom {
    enter() {
        say("The woods are dark and dreary. You hear the howls of various wild animals around you. Do you look for food or a shelter?")
    }

    respond(text) {
        text = text.toLowerCase()
        if (text.includes("food")) {
            say("You decide to look for food, but it will not be easy. Suddenly, as you walk amongst the trees, you see some delicious-looking fungi! Do you pick it, eat it, or ignore it?")
        } else if (text.includes("pick")) {
            say("You decide to pick the fungi. Added 3 fungi to inventory.")
        } else if (text.includes("shelter")) {
            say("You decide to look for a shelter. As you walk, you realize that the trees seem shorter than you had thought, and actually not that tall. Do you climb a tree to camp out for the night?")
        } else if (text.includes("climb")) {
            say("You decide to climb a tree. You find one, and start to climb.")
        } else {
            say("Huh?")
        }
    }
}

export const firstRoom = new FirstRoom()