// canvas set-up
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

// world set-up
let world = [{ shape: "rect", x: 200, y: 200, w: 90, h: 30 }]; // objects inside the world

world.width = 3000;
world.height = 3000;
world.center = { x: world.width / 2, y: world.height / 2 }; // center of the world

// canvas varible set up
let canvas;

canvas.location = {
    x: world.center.x - cnv.width,
    y: world.center.y - cnv.height,
}; // canvas top corner location (reletive to the world)

// player set-up
let player = {};

player.location = { x: cnv.width / 2, y: cnv.height / 2 };

player.keyhandler = {};

// start drawing
requestAnimationFrame(drawPOV);

// event listeners
document.addEventListener("keydown", (e) => {
    // store the key
    player.keyhandler[e.code] = true;

    // move the player/canvas
    move();
});

document.addEventListener("keyup", (e) => {
    // remove the stored key
    player.keyhandler[e.code] = false;
});

// draw
function drawPOV() {
    ctx.clearRect(0, 0, world.width, world.height);
    requestAnimationFrame(drawPOV);
}

// movement
function move() {
    if (player.keyhandler.ArrowLeft === true) {
    }
    if (player.keyhandler.ArrowRight === true) {
    }
    if (player.keyhandler.ArrowUp === true) {
    }
    if (player.keyhandler.ArrowDown === true) {
    }
}

// random rect shape generation
function randomRect() {
    return {
        x: randomInt(0, world.width),
        y: randomInt(0, world.height),
        w: randomInt(0, 400),
        h: randomInt(0, 400),
        color: randomRGB(),
    };
}
