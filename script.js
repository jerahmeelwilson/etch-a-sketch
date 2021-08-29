const sketchpad = document.getElementById("sketchpad");

let sketchsize = 16 * 16;
let count = 0;

for (let i = 0; i < sketchsize; i++) {
    count = count + 1;
    const space = document.createElement("div");
    space.classList.add("sketchspace");
    sketchpad.appendChild(space);
}

function colorInSpace(e) {
    e.target.classList.add("blackspace");
}


const sketchspaces = document.querySelectorAll("div.sketchspace");
sketchspaces.forEach(space => space.addEventListener("mouseover", colorInSpace));
