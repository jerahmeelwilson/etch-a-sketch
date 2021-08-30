const sketchpad = document.getElementById("sketchpad");



function buildPad(size) {
    let sketchsize = size * size;
    let count = 0;
    for (let i = 0; i < sketchsize; i++) {
        count = count + 1;
        const space = document.createElement("div");
        space.classList.add("sketchspace");
        sketchpad.appendChild(space);
    }
    console.log(count);
}

buildPad(16);

const sketchspaces = document.querySelectorAll("div.sketchspace");
sketchspaces.forEach(space => space.addEventListener("mouseover", colorInSpace));


function resizeSketchPad() {
    const sketchpadsize = document.getElementById("sketchpadsize");
    sketchpad.innerHTML = "";
    sketchpad.style.gridTemplateColumns = `repeat(${sketchpadsize.value}, calc(500px/${sketchpadsize.value}))`;
    sketchpad.style.gridTemplateRows = `repeat(${sketchpadsize.value}, calc(500px/${sketchpadsize.value}))`;
    buildPad(sketchpadsize.value);
    const sketchspaces = document.querySelectorAll("div.sketchspace");
    sketchspaces.forEach(space => space.style.height = `calc(500px/${sketchpadsize.value})`);
    sketchspaces.forEach(space => space.style.width = `calc(500px/${sketchpadsize.value})`);
    sketchspaces.forEach(space => space.addEventListener("mouseover", colorInSpace));
}

const resizebutton = document.getElementById("submit");
resizebutton.onclick = resizeSketchPad;

function colorInSpace(e) {
    e.target.classList.add("blackspace");
}

function resetSketchpad() {
    const sketchspaces = document.querySelectorAll("div.sketchspace");
    sketchspaces.forEach(space => space.classList.remove("blackspace"));
    console.log("reset");
}


const resetbutton = document.getElementById("reset");
resetbutton.onclick = resetSketchpad;