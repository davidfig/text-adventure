import { getState, setState } from "../code/state.js"
import { status } from "../code/say.js"

export function startEnergy(energy) {
    setState("energy-max", energy)
    setState("energy", energy)
    changeEnergy(0)
}

export function changeEnergy(delta) {
    const energy = getState("energy")
    setState("energy", energy + delta)
    status(`Energy ${getState("energy")} / ${getState("energy-max")}`)
}

export function getEnergy() {
    return getState("energy")
}