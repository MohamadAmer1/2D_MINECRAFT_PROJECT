const world = document.getElementById("world");
console.dir(world);

console.dir(window.innerWidth);
console.dir(window.innerHeight);

// Created the home screen of the game and the start button functionality + making it responsive to all kinds of screens
const windowSize = Math.min(Math.floor(window.innerHeight), Math.floor(window.innerWidth));

const homeScreen = document.getElementById("home-screen");
const startButton = document.getElementById("start-button");
const H1 = document.querySelector("#home-screen > h1");
H1.style.fontSize = `${windowSize * 0.2}px`;
startButton.style.height = `${windowSize * 0.07}px`;
startButton.style.fontSize = `${windowSize * 0.05}px`;
startButton.addEventListener("click", () => {
  homeScreen.classList.add("hidden-class");
});

/* Decided the tile width + height would be 5% of the overall minimal between width and hight of the world 
 And that way it would be responsive for vertical and horizontal screens */
const tileHeight = world.clientHeight * (5 / 100);
const tileWidth = world.clientWidth * (5 / 100);
const tileSize = Math.min(Math.floor(tileHeight), Math.floor(tileWidth));

function renderWorld() {
  const World = [];
  console.log(Math.floor(world.clientWidth), Math.floor(world.clientHeight));
  const rows = Math.floor(world.clientHeight / tileSize);
  const columns = Math.floor(world.clientWidth / tileSize);
  console.log(rows, columns);

  // Start by making all tiles to be are sky type
  for (let i = 0; i < rows; i++) {
    World[i] = [];
    for (let j = 0; j < columns; j++) {
      World[i][j] = "sky";
    }
  }

  /*
  The trees should look like this
    ===
    ===
    ===
     |
     |
     |
  */
  World[Math.floor(rows / 2) - 1][Math.floor((1 / 3) * columns)] = "oak";
  World[Math.floor(rows / 2) - 2][Math.floor((1 / 3) * columns)] = "oak";
  World[Math.floor(rows / 2) - 3][Math.floor((1 / 3) * columns)] = "oak";

  World[Math.floor(rows / 2) - 4][Math.floor((1 / 3) * columns) - 1] = "leaf";
  World[Math.floor(rows / 2) - 4][Math.floor((1 / 3) * columns)] = "leaf";
  World[Math.floor(rows / 2) - 4][Math.floor((1 / 3) * columns) + 1] = "leaf";

  World[Math.floor(rows / 2) - 5][Math.floor((1 / 3) * columns) - 1] = "leaf";
  World[Math.floor(rows / 2) - 5][Math.floor((1 / 3) * columns)] = "leaf";
  World[Math.floor(rows / 2) - 5][Math.floor((1 / 3) * columns) + 1] = "leaf";

  World[Math.floor(rows / 2) - 6][Math.floor((1 / 3) * columns) - 1] = "leaf";
  World[Math.floor(rows / 2) - 6][Math.floor((1 / 3) * columns)] = "leaf";
  World[Math.floor(rows / 2) - 6][Math.floor((1 / 3) * columns) + 1] = "leaf";

  // build another tree in the 2/3 of the screen width
  World[Math.floor(rows / 2) - 1][Math.floor((2 / 3) * columns)] = "oak";
  World[Math.floor(rows / 2) - 2][Math.floor((2 / 3) * columns)] = "oak";
  World[Math.floor(rows / 2) - 3][Math.floor((2 / 3) * columns)] = "oak";

  World[Math.floor(rows / 2) - 4][Math.floor((2 / 3) * columns) - 1] = "leaf";
  World[Math.floor(rows / 2) - 4][Math.floor((2 / 3) * columns)] = "leaf";
  World[Math.floor(rows / 2) - 4][Math.floor((2 / 3) * columns) + 1] = "leaf";

  World[Math.floor(rows / 2) - 5][Math.floor((2 / 3) * columns) - 1] = "leaf";
  World[Math.floor(rows / 2) - 5][Math.floor((2 / 3) * columns)] = "leaf";
  World[Math.floor(rows / 2) - 5][Math.floor((2 / 3) * columns) + 1] = "leaf";

  World[Math.floor(rows / 2) - 6][Math.floor((2 / 3) * columns) - 1] = "leaf";
  World[Math.floor(rows / 2) - 6][Math.floor((2 / 3) * columns)] = "leaf";
  World[Math.floor(rows / 2) - 6][Math.floor((2 / 3) * columns) + 1] = "leaf";

  // Add a zombie in the middle and 2 pigs in the 2 edges
  World[Math.floor(rows / 2) - 1][Math.floor((1 / 2) * columns)] = "creeper";
  World[Math.floor(rows / 2) - 1][0] = "pig";
  World[Math.floor(rows / 2) - 1][columns - 1] = "pig";

  const stones = ["gold", "iron", "emerald", "diamond", "ruby", "dirt"];
  for (let i = Math.floor(rows / 2); i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let index = Math.floor(Math.random() * stones.length);
      World[i][j] = stones[index];
      if (i === Math.floor(rows / 2)) {
        World[i][j] = "dirt1";
      }
    }
  }
  world.textContent = "";
  World.forEach((item) => {
    item.forEach((type) => {
      const div = document.createElement("div");
      div.style.width = `${tileSize}px`;
      div.style.height = `${tileSize}px`;
      div.classList.add(`${type}`);
      div.classList.add("block");
      world.appendChild(div);
    });
  });
}

renderWorld();
// let World = renderWorld();
// World.forEach((item) => {
//   item.forEach((type) => {
//     const div = document.createElement("div");
//     div.style.width = `${tileSize}px`;
//     div.style.height = `${tileSize}px`;
//     div.classList.add(`${type}`);
//     div.classList.add("block");
//     world.appendChild(div);
//   });
// });

// This is the Part of rendering the tools for usage

const items = document.getElementById("items");

const axe = document.createElement("div");
axe.classList.add("axe");

const pickaxe = document.createElement("div");
pickaxe.classList.add("pickaxe");

const shovel = document.createElement("div");
shovel.classList.add("shovel");

const sword = document.createElement("div");
sword.classList.add("sword");

const inventory = document.createElement("div");
inventory.classList.add("inventory");

items.appendChild(axe);
items.appendChild(pickaxe);
items.appendChild(shovel);
items.appendChild(sword);
items.appendChild(inventory);

// Created the inventory items
// console.log(document.querySelectorAll(".inventory-items > div"));
const inventoryItems = document.querySelector(".inventory-items");
let inventorySize = Math.min(inventoryItems.clientWidth, inventoryItems.clientHeight);
document.querySelectorAll(".inventory-items > div").forEach((tile) => {
  tile.style.width = `${inventorySize * (40 / 100)}px`;
  tile.style.height = `${inventorySize * (40 / 100)}px`;
  tile.style.setProperty("--count-size", `${inventorySize * (15 / 100)}px`);
});

// Created selectTool function which make sure to update the selectedTool
let selectedInventoryTile = "";
let selectedTool = "";

function selectTool(e) {
  console.log(e);

  if (!e.target.classList.value) {
    return;
  }
  // console.log(document.querySelectorAll("#items > div"));

  document.querySelectorAll("#items > div").forEach((tool) => {
    tool.classList.remove("chosen-tool");
  });
  // this class has the tool name
  selectedTool = e.target.classList[0];
  e.target.classList.toggle("chosen-tool");
  inventoryItems.classList.add("hidden-class");
  console.dir(inventoryItems);
  document.querySelectorAll(".inventory-items > div").forEach((tile) => {
    tile.classList.remove("chosen-tool");
  });
  if (selectedTool === "inventory") {
    inventoryItems.classList.toggle("hidden-class");
  } else {
    selectedInventoryTile = "";
  }
  // console.log(selectedTool);
}

items.addEventListener("click", selectTool);

/*
Created selectTile function which make sure to update the selectedTile
And according to that it checks if it matches the tool type that is required
To remove it
*/
let TileFitTool = {
  dirt: "shovel",
  dirt1: "shovel",
  oak: "axe",
  leaf: "axe",
  gold: "pickaxe",
  iron: "pickaxe",
  emerald: "pickaxe",
  diamond: "pickaxe",
  ruby: "pickaxe",
  creeper: "sword",
  pig: "sword",
};

function clickTile(e) {
  const selectedTile = e.target;
  // console.log(e);

  if (!e.target.classList[0]) {
    return;
  }
  selectedTileClass = e.target.classList[0];
  // console.log(selectedTileClass);

  if (TileFitTool[selectedTileClass] !== selectedTool) {
    return;
  }

  document.querySelectorAll("#sounds > audio").forEach((sound) => {
    if (selectedTileClass === sound.id) {
      const activateSound = document.getElementById(sound.id);
      activateSound.play();
    }
  });

  document.querySelectorAll(".inventory-items > div").forEach((tile) => {
    // console.dir(selectedTile);

    // console.dir(tile);
    if (tile.classList[0] === selectedTileClass) {
      tile.dataset.count++;
    }
  });

  selectedTile.classList.toggle(selectedTileClass);
  selectedTile.classList.toggle("sky");
}

world.addEventListener("click", clickTile);

// Created function which its job to save the tile w are clicking in the inventory
function clickInventoryTile(e) {
  if (e.target.classList[0] === "inventory-items") {
    return;
  }

  document.querySelectorAll(".inventory-items > div").forEach((tool) => {
    tool.classList.remove("chosen-tool");
  });

  selectedInventoryTile = e.target.classList[0];
  e.target.classList.add("chosen-tool");
  // console.log(selectedInventoryTile);
  // console.dir(e)
}

inventoryItems.addEventListener("click", clickInventoryTile);

/*
Created a function which adds a tile which was chosen in the inventory to the world,
If the number of tiles reach 0 then we cant add more
*/
function addTileToWorld(e) {
  const selectedTile = e.target;
  // console.log(e);
  if (selectedInventoryTile === "") {
    return;
  }
  if (selectedTile.classList[0] !== "sky") {
    return;
  }

  // console.dir(selectedTile);
  document.querySelectorAll(".inventory-items > div").forEach((tile) => {
    // console.dir(selectedTile);
    // console.dir(tile);

    if (tile.classList[0] === selectedInventoryTile) {
      if (tile.dataset.count === "0") {
        return;
      }
      selectedTile.classList.remove("sky");
      selectedTile.classList.toggle(selectedInventoryTile);
      selectedTile.classList.toggle("block");
      selectedTile.classList.toggle("block");

      // console.dir(tile);
      // console.dir(selectedTile);
      // console.log(tile.dataset.count);

      tile.dataset.count--;
    }
  });
}
world.addEventListener("click", addTileToWorld);

// Created Reset button functionality
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", renderWorld);

// Created Home button functionality
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
  homeScreen.classList.remove("hidden-class");
});
