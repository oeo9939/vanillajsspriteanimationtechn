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
let frameY = 3;

// Showcase it is animated
// let x = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50, 50, 100, 100);
    // Showcase it is animated
    // x++;
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (frameX < 6) frameX++;
    else frameX = 0;
    requestAnimationFrame(animate);
}

animate();