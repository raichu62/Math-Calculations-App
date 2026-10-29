const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = 1000;
let height = 500;

canvas.width = width;
canvas.height = height;

const cy = (y) => {
    return height - y;
}

ctx.fillStyle = "White";
ctx.fillRect(0, 0, width, height);


ctx.strokeStyle = "#ddd";
ctx.lineWidth = 2;

for (let x = 0; x <= width; x += 25) {
    ctx.lineWidth = 2;
    if (x % 100 != 0) {
        ctx.lineWidth = 0.5;
    }
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
}

for (let y = 0; y <= height; y += 25) {
    ctx.lineWidth = 2;
    if (y % 100 != 0) {
        ctx.lineWidth = 0.5;
    }
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
}

function evaluate(line) {
    line = line.replace(' ', '');
    let list = line.split(/([*+/-=])/);
}