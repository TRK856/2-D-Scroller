// canvas set-up
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

// world set-up
let world = [];

world.width = 3000;
world.height = 3000;
world.center = { x: world.width / 2, y: world.height / 2 }; // center of the world
world.push({
    shape: "rect",
    x: world.center.x,
    y: world.center.y,
    w: 90,
    h: 30,
}); // objects inside the world

// canvas varible set up
let canvas = [];

// canvas top corner location (reletive to the world)
// prettier-ignore
canvas.location = { x: world.center.x - (cnv.width/2), y: world.center.y - (cnv.height/2)};

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
    drawAllRedirect(world);
    requestAnimationFrame(drawPOV);
}

function drawAllRedirect(obj) {
    for (let i = 0; i < obj.length; i++) {
        if (rectDrawCheck(obj[i]) === true) {
            if (obj[i].shape === "rect") {
                drawRect(obj[i]);
            }
        }
    }
}

function drawRect(obj) {
    fill("red");
    rect(
        obj.x - canvas.location.x,
        obj.y - canvas.location.y,
        obj.w,
        obj.h,
        "fill"
    );
}

// check if you should draw a rect (if it is in the POV)
function rectDrawCheck(obj) {
    let le1 = canvas.location.x;
    let re1 = canvas.location.x + cnv.width;
    let te1 = canvas.location.y;
    let be1 = canvas.location.y + cnv.height;
    let le2 = obj.x;
    let re2 = obj.x + obj.w;
    let te2 = obj.y;
    let be2 = obj.y + obj.h;
    return le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2;
}

// movement
function move() {
    if (player.keyhandler.ArrowLeft === true) {
        canvas.location.x -= 3;
    }
    if (player.keyhandler.ArrowRight === true) {
        canvas.location.x += 3;
    }
    if (player.keyhandler.ArrowUp === true) {
        canvas.location.y -= 3;
    }
    if (player.keyhandler.ArrowDown === true) {
        canvas.location.y += 3;
    }
}

// Physics
function physics() {
    if (xSpeed != 0) {
        xSpeed *= friction;
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
