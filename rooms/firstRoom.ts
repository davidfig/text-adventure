import { Room } from './Room'
import { addInventory } from "../code/inventory";
import { say } from '../code/say';
import firstRoomData from "./firstRoom.json";

class FirstRoom extends Room {
    berriesArePicked = false;

    handle(noun: string, verb: string): void {
        if (noun === "berries" && verb === "pick") {
            if (this.berriesArePicked) {
                say("You already have the berries.");
            } else {
                addInventory("berries");
                this.berriesArePicked = true;
            }
        }

        if (noun === "road" && verb === "go") {
            //
        }

    }
}

export const firstRoom = new FirstRoom();