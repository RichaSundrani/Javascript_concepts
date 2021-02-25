
function Bear(type) {
    console.log(type);
    this.type = type;
    console.log(type);
}

// not available for the instances 
// Bear.eat = function () {
//     console.log("bear eat");
// }

// // add to the prototype of bear
Bear.prototype.eat = function () {
    console.log(this.type + " bear eat");
}
// this.name = "Richard";
Bear.prototype.sleeps = function () {
    console.log(this.name + " bear sleeping");
}

// setTimeout(function () {
//     console.log(this.name);
// }, 2000);

// setTimeout(() => {
//     console.log(this.name);
// }, 2000);

// this.name = "Richard";
// function callSetTimeOut() {
//     this.name = "Parkar"
//     setTimeout(() => {
//         console.log("callSetTimeOut this :  " + this.name);
//     }, 2000);
//     console.log("inside callSetTimeOut " + this.name);
// }
// console.log("Something... before");
// callSetTimeOut();
// console.log("Something... after");
// console.log("last " + this.name);



// // instances of bear object (function) 
// var grizzely = new Bear("grizzely");
// var polar = new Bear("polar");
// grizzely.eat();
// polar.sleeps();

// creating grizzely prototype and inherit from bear prototype 
// function Grizzely() {
//     Bear.call(this, 'grizzely')
// }
// Grizzely.prototype = Object.create(Bear.prototype);
// Grizzely.prototype.eat = function () {
//     console.log("Grizzely.prototype eat");
// }

// var grizzely = new Grizzely();
// console.log(grizzely.eat());

// grizzely.eat = function () {
//     console.log("grizzely instance eats");
// }
// console.log(grizzely.eat());




