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

  // code/say.ts
  function say(text) {
    const computerInput = document.querySelector(".body");
    computerInput.innerHTML += `<div class="computer-input">${text}</div>`;
  }
  function status(text) {
    const aboutText = document.querySelector(".about-text");
    aboutText.innerHTML = text;
  }
  function inventory(text) {
    const computerInput = document.querySelector(".inventory-text");
    computerInput.innerHTML = text;
  }

  // rooms/Room.ts
  var Room = class {
  };

  // rooms/firstRoom.ts
  var FirstRoom = class extends Room {
    enter() {
      status("Normal");
      inventory("");
      say("Hello! Welcome to (game name)! In this game, you will do stuff! The three places you can go (for now) are your house and the shop. Good luck!");
      say("Where do you want to go first? Your house or the shop? ");
    }
    respond(text) {
      text = text.toLowerCase();
      if (text.includes("shop")) {
        say("You decide to go to the shop!");
        say("Hello! Welcome to the shop! This is where you will buy and trade things!");
        say("You will start with $50.");
        say("Type 'talk to merchant' to talk to the merchant, or type 'leave shop' to leave the shop!");
      } else if (text.includes("talk to merchant")) {
        say("Merchant: Hello! I expect you are here to buy something? (respond with 'yes, buy' or 'no, not buy'.)");
      } else if (text.includes("yes, buy")) {
        say(" Merchant: Nice! I see you have $50. You can afford to buy a tomato seed. Buy tomato seed? (respond with 'yes, buy tomato seed' or 'no, don't buy tomato seed'.)");
      } else if (text.includes("leave shop")) {
        say("You have left the shop.");
        say("Do you want to go to your house or the shop?");
      } else {
        say("huh?");
      }
    }
  };
  var firstRoom = new FirstRoom();

  // code/room.ts
  var room;
  function initRooms() {
    firstRoom.enter();
  }
  function getRoom() {
    return room;
  }

  // code/main.ts
  var body;
  var input;
  function keyup(e) {
    if (e.code === "Enter") {
      say(`<div class="player-input">${input.value}<div>`);
      getRoom().respond(input.value);
      input.value = "";
      input.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }
  window.onload = () => {
    body = document.querySelector(".body");
    input = document.querySelector(".input");
    input.focus();
    input.addEventListener("keyup", keyup);
    input.addEventListener("blur", () => input.focus());
    status("Looking fine.");
    inventory("Nothing.");
    initRooms();
  };
})();
//# sourceMappingURL=index.js.map
