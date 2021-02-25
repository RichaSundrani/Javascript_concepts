
// Object literals are not good practice when objects have many behavious/ methods
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log(this.radius)
    }
};
circle.draw();

// Factory function 
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log(radius);
        }
    }
}
const circle = createCircle(1);
circle.draw();


// Constructor function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Radius" + radius);
    }
}

const newCircle = new Circle(1);
newCircle.draw();