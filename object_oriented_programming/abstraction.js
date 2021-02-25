
// Procedural approach

// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime * rate);
// }

// getWage(baseSalary, overtime, rate)   // multiple parameters


// Object Oriented approach

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage(); // no parameter better function. all the parameters are modeled as properties