import { say } from "../code/say.js"
import { addInventory } from "../code/inventory.js"
import { changeStatus, getStatus } from "../code/status.js"
import { changeRoom } from "../code/room.js"
import { house } from "./house.js"
import { shop } from "./shop.js"

class Bank {

    enter() {
        say("Bank!")
    }

    respond(text) {
        if (text.includes("look")) {
            say("You see a safe and some money on the ground") 
        } else if (text.includes("store money")) { 
            say("Your money has been stored!")
            const money = getStatus("Money")
            changeStatus("Money", -money)
            changeStatus("Bank Money", money)
        } else if (text.includes("take money")) { 
            say("You took back your money!")
            const money = getStatus("Bank Money")
            changeStatus("Bank Money", -money)
            changeStatus("Money", money)
        } else {
            say("Sorry, I can't do that")
        } 
    }
}

export const bank = new Bank()    