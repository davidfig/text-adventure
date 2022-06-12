let state: Record<string, string | number> = {};

export function setState(variable: string, value: string | number) {
    state[variable] = value;
}

export function getState(variable: string): string | number {
    return state[variable];
}
