addEventListener('DOMContentLoaded', main);

function main() {
    const radius = 300;
    const nrOfPoints = 6;
    const multiplier = 2;
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    setFullscreen(canvas);
    draw(ctx, nrOfPoints, multiplier);
}

/**
 * Draws everything on the canvas
 * @param {CanvasRenderingContext2D} ctx
 */
function draw(ctx, nrOfPoints, multiplier) {
    //1. Rita outline cirkeln
    drawOutlineCircle(ctx);
    //2. Rita punkter på cirkeln
    //3. Rita linjer mellan punkterna
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} radius
 */
function drawOutlineCircle(ctx, radius) {
    const xCenter = ctx.canvas.width * 0.5;
    const yCenter = ctx.canvas.height * 0.5;
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, 300, 0, Math.PI * 2);
    ctx.stroke();
}

/**
 * @param {HTMLCanvasElement} canvas
 */ 
function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}