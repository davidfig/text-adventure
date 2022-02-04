const inventory = new Set()

function getInventory() {
    return Array.from(inventory)
}

export function hasInventory(item) {
    return inventory.has(item)
}

export function addInventory(item) {
    inventory.add(item)
    const items = getInventory()
    let s = ''
    for (const item of items) {
        s += `<div>${item}</div>`
    }
    document.querySelector('.inventory-text').innerHTML = s
}

export function removeInventory(item) {
    inventory.delete(item)
}