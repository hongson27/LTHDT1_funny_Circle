class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw() {
        let ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = this.getRandomColor();
        ctx.closePath()
    }
    getRandom(){
        return Math.floor(Math.random() * 255);
    }
    getRandomColor() {
        let red = this.getRandom();
        let green = this.getRandom();
        let blue = this.getRandom();
        return `rgb(${red}, ${green}, ${blue})`;
    }
}
for (let i = 0; i < 6; i++) {
  //  let r = 150 - 20i;
    let circle = new Circle(300+30*i, 300, 150-20*i);
    circle.draw();
}
