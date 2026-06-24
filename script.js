const world = document.getElementById("world");
console.dir(world);

console.dir(window.innerWidth);
console.dir(window.innerHeight);

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
  return World;
}

const World = renderWorld();
console.log(World);

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

const tools = document.getElementById("tools");
const items = document.getElementById("items");

console.log(tools.clientWidth);
console.log(tools.clientHeight);

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
