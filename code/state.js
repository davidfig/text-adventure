let state = {}

export function setState(variable, value) {
    state[variable] = value
}

export function getState(variable) {
    return state[variable]
}
