const world = document.getElementById("world")
console.dir(world);

console.dir(window.innerWidth);
console.dir(window.innerHeight);


function CreateWorld(){
    const World = []
    const width = Math.floor(world.clientWidth)
    const height = Math.floor(world.clientHeight)
    console.log(width,height);
    

}

CreateWorld()
const World = [
  ["sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky"],
  ["dirt", "dirt", "dirt","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky"],
  ["diamond", "diamond", "diamond","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky", "sky", "sky","sky"],
  
];
const tileHeight = world.clientHeight * (5/100);
const tileWidth = world.clientWidth * (5/100);
const tileSize = Math.min(Math.floor(tileHeight),Math.floor(tileWidth))


World.forEach((item) => {
  item.forEach((type) => {
    const div = document.createElement("div");
    div.style.width = `${tileSize}px`;
    div.style.height = `${tileSize}px`;
    div.classList.add(`${type}`)
    div.classList.add("block")
    world.appendChild(div)
  });
});
