const container = document.getElementById("container");
const newGridBtn = document.getElementById("new-grid");
const rainbowBtn = document.getElementById("rainbow");
const shadingBtn = document.getElementById("shading");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const sketchpadScreen = document.getElementById("sketchpad-screen");

sketchpadScreen.setAttribute("style","display:flex; flex-wrap: wrap; overflow:hidden;")

for (let i = 0; i <= 25; i++) {
  for (let j = 0; j <= 25; j++) {
    const squares = document.createElement("div");
    squares.className = "pixel-square";
    squares.setAttribute("style", "height: 40px;width: 40px; background-color: black;")
    sketchpadScreen.appendChild(squares);
    squares.addEventListener("mouseover",()=>{
      squares.style.backgroundColor = "yellow";
    }); 
  }
}

// newGrid buttons re-enable the same action as of first
// have to enable user to create desired pixel size
newGridBtn.addEventListener("click",()=>{
  const shapes = document.querySelectorAll(".pixel-square");
  shapes.forEach(shape =>{
    shape.addEventListener("mouseover",()=>{
      shape.style.backgroundColor = "yellow";
    });
  });
});

// clears whole sketchpad
clearBtn.addEventListener("click",()=>{
  const pixels = document.querySelectorAll(".pixel-square");
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = "black";
  });
});

//erase colored pixel on hover
eraserBtn.addEventListener("click",()=>{
  const pixels = document.querySelectorAll(".pixel-square");
  pixels.forEach(pixel =>{
    pixel.addEventListener("mouseover",()=>{
      pixel.style.backgroundColor = "black";
    });
  });
});

// Rainbow button , creates random color for every pixel
rainbowBtn.addEventListener("click",()=>{
  boxes = document.querySelectorAll(".pixel-square");
  boxes.forEach(box=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.addEventListener("mouseover",()=>{
      box.style.backgroundColor = "#"+ randomColor;
    });
  });
});