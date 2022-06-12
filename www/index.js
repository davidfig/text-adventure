(() => {
  // build/live.js
  var port = 1235;
  var first = true;
  function createSocket() {
    const socket = new WebSocket(`ws://localhost:${port}`);
    socket.addEventListener("message", (data) => {
      window.location.reload();
    });
    socket.addEventListener("close", () => {
      setTimeout(createSocket, 0);
    });
    socket.addEventListener("open", () => {
      if (!first) {
        window.location.reload();
      } else {
        first = false;
      }
    });
  }
  window.addEventListener("load", () => {
    createSocket();
    console.log(`[RELOAD] Live reload listening on port ${port}...`);
  });

  // rooms/Room.ts
  var Room = class {
  };

  // code/inventory.ts
  var inventory = /* @__PURE__ */ new Set();
  function getInventory() {
    return Array.from(inventory);
  }
  function updateInventory() {
    const items = getInventory();
    let s = "";
    for (const item of items) {
      s += `<div>${item}</div>`;
    }
    const inventoryText = document.querySelector(".inventory-text");
    inventoryText.innerHTML = s;
  }
  function addInventory(item) {
    inventory.add(item);
    updateInventory();
  }

  // code/say.ts
  function say(text) {
    const computerInput = document.querySelector(".body");
    computerInput.innerHTML += `<div class="computer-input">${text}</div>`;
  }
  function status(text) {
    const aboutText = document.querySelector(".about-text");
    aboutText.innerHTML = text;
  }
  function inventory2(text) {
    const computerInput = document.querySelector(".inventory-text");
    computerInput.innerHTML = text;
  }

  // rooms/firstRoom.ts
  var FirstRoom = class extends Room {
    constructor() {
      super(...arguments);
      this.berriesArePicked = false;
    }
    handle(noun, verb) {
      if (noun === "berries" && verb === "pick") {
        if (this.berriesArePicked) {
          say("You already have the berries.");
        } else {
          addInventory("berries");
          this.berriesArePicked = true;
        }
      }
      if (noun === "road" && verb === "go") {
      }
    }
  };
  var firstRoom = new FirstRoom();

  // code/room.ts
  function initRooms() {
    firstRoom.enter();
  }

  // code/main.ts
  var body;
  window.onload = () => {
    body = document.querySelector(".body");
    inventory2("Nothing.");
    status("Looking fine.");
    initRooms();
  };
})();
//# sourceMappingURL=index.js.map
