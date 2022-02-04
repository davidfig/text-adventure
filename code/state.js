class State {
    state = {}

    add(variable, value) {
        this.state[variable] = value
    }

    get(variable) {
        return this.state[variable]
    }
}

export const state = new State()