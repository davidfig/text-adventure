const inventory = new Set();

function getInventory() {
    return Array.from(inventory);
}

export function hasInventory(item: string): boolean {
    return inventory.has(item);
}

function updateInventory() {
    const items = getInventory();
    let s = '';
    for (const item of items) {
        s += `<div>${item}</div>`;
    }
    const inventoryText = document.querySelector('.inventory-text') as HTMLDivElement;
    inventoryText.innerHTML = s;
}

export function addInventory(item: string): void {
    inventory.add(item);
    updateInventory();
}

export function removeInventory(item: string): void {
    inventory.delete(item);
    updateInventory();
}