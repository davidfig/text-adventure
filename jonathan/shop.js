import { say } from "../code/say.js"
import { addInventory } from "../code/inventory.js"

class Shop {

    enter() {
        say("Shop!")
    }

    respond(text) {
        if (text.includes("look")) {
            say("You see lots of bananas for sale!")  
        } else {
            say("Sorry, I can't do that")
        } 
    }
}

export const shop = new Shop()    