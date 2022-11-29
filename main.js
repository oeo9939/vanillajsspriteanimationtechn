let playerState = "fall";
const animationsEl = document.getElementById("animations");
animationsEl.addEventListener("change", (e) => {
    playerState = e.target.value;

});

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

// animationsEl.addEventListener("change", updateValue);

// function updateValue(e) {
//     e.target.value;
// }


// console.log(playerState);

// let frameX = 0;
// let frameY = 4;
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
    },
    {
        name: "fall",
        frames: 7,
    },
    {
        name: "run",
        frames: 9,
    },
    {
        name: "dizzy",
        frames: 11,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "ko",
        frames: 12,
    },
    {
        name: "getHit",
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;

});

console.log(spriteAnimations);

// Showcase it is animated
// let x = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    // ctx.fillRect(50, 50, 100, 100);
    // Showcase it is animated
    // x++;
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // if (gameFrame % staggerFrames == 0){
    //     if (frameX < 6) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();