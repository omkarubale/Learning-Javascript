const circle = {
    radius : 0,
    get area() { return this.radius*this.radius*Math.PI },
}

circle.radius = 2;

console.log(circle.area);