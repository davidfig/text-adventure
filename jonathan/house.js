import { say } from "../code/say.js"
import { addInventory } from "../code/inventory.js"
import { changeRoom } from "../code/room.js"
import { shop } from "./shop.js"
import { bank } from "./bank.js"

class House {
hasBanana2 = false
    enter() {
        say("House!")
    }

    respond(text) {
        if (text.includes("shop")) {
            changeRoom(shop)
        } else if (text.includes("bank")) {
            changeRoom(bank) 
        } else if (text.includes("look")) {
            say("You see trees and other monkeys. You also see a banana on the floor")  
        } else if (text.includes("pick up")) {
            if (this.hasBanana2 === false) {
                say("You picked up the banana!")
                addInventory("Banana")
                this.hasBanana2 = true
            } else {
                say("Nothing to pick up!")
            }
        } else {
            say("Sorry, I can't do that")
        } 
    }
}

export const house = new House()    