function setup() {
    createCanvas(800, 400);
    background(240);
}

function draw() {
    fill(100, 100, 255, 150);
    noStroke();
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 40, 40);
    }
}
