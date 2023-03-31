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

    clearBtn.addEventListener("click",()=>{
      squares.style.backgroundColor = "black";
    });

    eraserBtn.addEventListener("click",()=>{
      squares.addEventListener("mouseover",()=>{
        squares.style.backgroundColor = "black";
      });
    });
  }
}
