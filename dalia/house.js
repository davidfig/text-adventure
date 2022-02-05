import { say } from "../code/say.js"

class House {
    firstTime = true
    inFirstTime

    enter() {
        if (this.firstTime === true) {
            say("You decide to go to your house!")
            say("Hello! Welcome to your house! This is where you will check your storage areas and level up!")
            say("You can also add things to your house like more storage areas!")
            say("You start with enough land to add a farm.")
            say("Type 'leave house' to leave and get to your new farm!")
            this.firstTime = false
            this.inFirstTime = true
        } else {
            say("second thing")
            this.inFirstTime = false
        }
    }

    response(text) {
        if (text.includes("leave house")) { 
            changeRoom(firstRoom)
        } else {
            console.log("")
        }
    }
}

export const house = new House()