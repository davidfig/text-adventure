import { inventory, say, status } from '../code/say'
import { changeRoom } from '../code/room'
import { Room } from './Room'

class FirstRoom extends Room {
    enter() {
        status("Normal");
        inventory("");
        say("Hello! Welcome to (game name)! In this game, you will do stuff! The three places you can go (for now) are your house and the shop. Good luck!");
        say("Where do you want to go first? Your house or the shop? ");
    }

    respond(text: string) {
        text = text.toLowerCase();
        if (text.includes("shop")) {
            say("You decide to go to the shop!");
            say("Hello! Welcome to the shop! This is where you will buy and trade things!");
            say("You will start with $50.");
            say("Type 'talk to merchant' to talk to the merchant, or type 'leave shop' to leave the shop!");
        } else if (text.includes("talk to merchant")) {
            say("Merchant: Hello! I expect you are here to buy something? (respond with 'yes, buy' or 'no, not buy'.)");
        } else if (text.includes("yes, buy")) {
            say(" Merchant: Nice! I see you have $50. You can afford to buy a tomato seed. Buy tomato seed? (respond with 'yes, buy tomato seed' or 'no, don't buy tomato seed'.)");
        } else if (text.includes("leave shop")) {
            say("You have left the shop.");
            say("Do you want to go to your house or the shop?");
        } else {
            say("huh?");
        }
    }
}

export const firstRoom = new FirstRoom();