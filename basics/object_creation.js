// Ways to create objects in javascript 

// #1 - OBJECT CONSTRUCTOR 
// The simplest way to create an empty object is using the Object constructor.
let newObj = new Object();  // not recommended

// #2 - Object's create method 
// The create method of Object creates a new object by passing the prototype object as a parameter
var object = Object.create(null);
 
// #3 - Object literal syntax
// The object literal syntax is equivalent to create method when it passes null as parameter
var object = {};

// #4 - ES6 class 
class Person {
    constructor(name) {
       this.name = name;
    }
 }

 //#5 - Singleton pattern 
// A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return 
// the same instance and this way one can ensure that they don't accidentally create multiple instances.
 var object = new function(){
    this.name = "John doe";
 }
