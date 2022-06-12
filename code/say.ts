export function clear(): void {
    const body = document.querySelector('.body') as HTMLDivElement;
    body.innerHTML = ''
}
export function say(text: string): void {
    const computerInput = document.querySelector('.body') as HTMLDivElement;
    computerInput.innerHTML += `<div class="computer-input">${text}</div>`;
}

export function status(text: string): void {
    const aboutText = document.querySelector('.about-text') as HTMLDivElement;
    aboutText.innerHTML = text
}

export function inventory(text: string): void {
    const computerInput = document.querySelector('.inventory-text') as HTMLDivElement;
    computerInput.innerHTML = text;
}
