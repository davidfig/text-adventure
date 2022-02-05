import { say } from "../code/say.js"
import { addInventory, removeInventory } from "../code/inventory.js"
import { changeRoom } from "../code/room.js"
import { house } from "./house.js"
import { shop } from "./shop.js"
import { changeEnergy, startEnergy } from "./energy.js"

class FirstRoom {
    hasBanana = false

    enter() {
        say("You have gotten captured to be at a zoo. Find out how to escape by climbing trees, stealing keys and food and finnaly, breaking out of the zoo!")
        say("You can find things on the ground like money, food, and also, Poop!")
        say("the places you can go are the bank, shop, and your house")
        startEnergy(100)
    }

    respond(text) {
        if (text.includes("house")) {
            changeRoom(house)
        } else if (text.includes("shop")) {
            changeRoom(shop)
        } else if (text.includes("bank")) {
            say("You went to the bank!")
        } else if (text.includes("look")) {
            say("You see a banana on the floor!")
        } else if (text.includes("banana") && text.includes("eat")) {
            if (this.hasBanana) {
                say("You have eaten a banana!")
                removeInventory("banana")
            } else {
                say("You don't have a banana")
            }
        } else if (text.includes("pick up")) {
            if (!this.hasBanana) {
                say("You picked up the banana!")
                addInventory("Banana")
                this.hasBanana = true
            } else {
                say("Nothing to pick up!")
            }
        } else {
            say("I did not understand that!")
        }
    }
}

export const firstRoom = new FirstRoom()    