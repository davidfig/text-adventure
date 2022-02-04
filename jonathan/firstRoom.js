import { say } from "../code/say.js"

class FirstRoom {
    enter() {
        say("You have gotten captured to be at a zoo. Find out how to escape by climbing trees, stealing keys and food and finnaly, breaking out of the zoo!")
        say("You can find things on the ground like money, food, and also, Poop!")
        say("the places you can go are the bank, shop, and your house")
    }

    respond(text) {
        if (text.includes("house")) {
            say("You went to your house")
        } else if (text.includes("shop")) {
            say("You went to your house!")
        } else if (text.includes("bank")) {
            say("You went to the bank")
        } else {        
            say("I did not understand that!")
        }
    }
}

export const firstRoom = new FirstRoom()