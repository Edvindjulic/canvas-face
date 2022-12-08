addEventListener('DOMContentLoaded', main);

function main() {
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
    const radius = 300;
    //1. Rita outline cirkeln
    drawOutlineCircle(ctx, radius);
    //2. Rita punkter på cirkeln
    drawPointsOnCircle(ctx, radius, nrOfPoints);
    //3. Rita linjer mellan punkterna
}

function drawPointsOnCircle(ctx, radius, nrOfPoints) {
    const angle = Math.PI * 0.25;
    const xCenter = ctx.canvas.width * 0.5;
    const yCenter = ctx.canvas.height * 0.5;
    const x = xCenter + radius * Math.cos(angle);
    const y = yCenter + radius * Math.sin(angle);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} radius
 */
function drawOutlineCircle(ctx, radius) {
    const xCenter = ctx.canvas.width * 0.5;
    const yCenter = ctx.canvas.height * 0.5;
    ctx.strokeStyle = '#aaaaaa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, radius, 0, Math.PI * 2);
    ctx.stroke();
}

/**
 * @param {HTMLCanvasElement} canvas
 */ 
function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}