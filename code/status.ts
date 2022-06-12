const status: Record<string, [number, number, string]> = {}

export function addStatus(name: string, current: number, maximum: number, currency: string): void {
    status[name] = [current, maximum, currency];
    print();
}

export function setStatus(name: string, value: number): void {
    status[name][0] = value;
    print();
}

export function setStatusMaximum(name: string, value: number): void {
    status[name][1] = value;
    print();
}

export function changeStatus(name: string, delta: number): void {
    status[name][0] += delta;
    print();
}

export function getStatus(name: string): number {
    return status[name][0];
}

function print() {
    let s = ''
    for (const key in status) {
        const entry = status[key];
        const currency = entry[2] ? entry[2] : '';
        if (entry[1]) {
            s += `<div>${key}: ${entry[0]} / ${entry[1]}</div>`;
        } else {
            s += `<div>${key}: ${currency}${entry[0]}</div>`;
        }
    }
    const aboutText = document.querySelector('.about-text') as HTMLDivElement;
    aboutText.innerHTML = s;
}