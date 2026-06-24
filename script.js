const world = document.getElementById("world");
console.dir(world);

console.dir(window.innerWidth);
console.dir(window.innerHeight);

// const World = [
//   ["sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky"],
//   ["dirt", "dirt", "dirt","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky"],
//   ["diamond", "diamond", "diamond","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky"],

// ];

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

  // All tiles are sky type
  for (let i = 0; i < rows; i++) {
    World[i] = [];
    for (let j = 0; j < columns; j++) {
      World[i][j] = "sky";
    }
  }

  // All tiles from half teh screen to 3/4 of the screen height is fills with dirt
  for (let i = Math.floor(rows / 2); i < Math.floor((3 / 4) * rows); i++) {
    for (let j = 0; j < columns; j++) {
      World[i][j] = "dirt";
      if (i === Math.floor(rows / 2)) {
        World[i][j] = "dirt1";
      }
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

  // // Adding clouds
  // World[0][Math.floor((1 / 6) * columns)] = "cloud";
  // World[0][Math.floor((1 / 6) * columns) + 1] = "cloud";

  // World[1][Math.floor((1 / 6) * columns)] = "cloud";
  // World[1][Math.floor((1 / 6) * columns) + 1] = "cloud";
  // World[1][Math.floor((1 / 6) * columns) - 1] = "cloud";
  // World[1][Math.floor((1 / 6) * columns) + 2] = "cloud";

  // World[2][Math.floor((1 / 6) * columns)] = "cloud";
  // World[2][Math.floor((1 / 6) * columns) + 1] = "cloud";

  // World[0][Math.floor((3 / 6) * columns)] = "cloud";
  // World[0][Math.floor((3 / 6) * columns) + 1] = "cloud";

  // World[1][Math.floor((3 / 6) * columns)] = "cloud";
  // World[1][Math.floor((3 / 6) * columns) + 1] = "cloud";
  // World[1][Math.floor((3 / 6) * columns) - 1] = "cloud";
  // World[1][Math.floor((3 / 6) * columns) + 2] = "cloud";

  // World[2][Math.floor((3 / 6) * columns)] = "cloud";
  // World[2][Math.floor((3 / 6) * columns) + 1] = "cloud";

  // World[0][Math.floor((5 / 6) * columns)] = "cloud";
  // World[0][Math.floor((5 / 6) * columns) + 1] = "cloud";

  // World[1][Math.floor((5 / 6) * columns)] = "cloud";
  // World[1][Math.floor((5 / 6) * columns) + 1] = "cloud";
  // World[1][Math.floor((5 / 6) * columns) - 1] = "cloud";
  // World[1][Math.floor((5 / 6) * columns) + 2] = "cloud";

  // World[2][Math.floor((5 / 6) * columns)] = "cloud";
  // World[2][Math.floor((5 / 6) * columns) + 1] = "cloud";

  const stones = ["gold", "iron", "emerald", "diamond", "ruby"];
  for (let i = Math.floor((3 / 4) * rows); i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let index = Math.floor(Math.random() * stones.length);
      World[i][j] = stones[index];
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
