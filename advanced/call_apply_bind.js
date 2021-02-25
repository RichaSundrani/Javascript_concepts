


var person1 = { firstName: 'Richard', lastName: 'Parkar' };
var person2 = { firstName: 'Nimmu', lastName: 'Gupta' };
var person3 = { firstName: 'Kausik', lastName: 'Dasgupta' };

function greetings(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2);
};

// The method Call invokes the function and allows you to pass in arguments one by one using commas.
// Function.prototype.call()
greetings.call(person1, "Hello", "How are you?");
greetings.call(person2, "Hello", "How are you?");
greetings.call(person3, "Hello", "How are you?");

//The method Apply invokes the function and allows you to pass in arguments as an array.
//Function.prototype.apply()
greetings.apply(person1, ["Hello", "How are you?"]);
greetings.apply(person2, ["Hello", "How are you?"]);
greetings.apply(person3, ["Hello", "How are you?"]);

// bind: returns a new function, allowing you to pass in an array and any number of arguments
// Function.prototype.bind() 
// The Bind method returns a new function, allowing you to pass in a this array and any number of arguments. 
// Use it when you want that function to later be called with a certain context like events.

let greet1 = greetings.bind(person1);
greet1("Hello", "How are you?");
let greet2 = greetings.bind(person2);
greet2("Hello", "How are you?");
let greet3 = greetings.bind(person3);
greet3("Hello", "How are you?");

