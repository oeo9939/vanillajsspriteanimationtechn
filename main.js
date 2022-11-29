const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

// 6876px width - 6876 / 12 columns = 573 (margin, extra pixels)
const spriteWidth = 575;

// 5230px height - 5230 / 10 rows = 523
const spriteHeight = 523;

let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for (let j = 0; j < state.frames; s++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
    }
});

// Showcase it is animated
// let x = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % 11;
    frameX = spriteWidth * position;
    // ctx.fillRect(50, 50, 100, 100);
    // Showcase it is animated
    // x++;
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // if (gameFrame % staggerFrames == 0){
    //     if (frameX < 6) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();