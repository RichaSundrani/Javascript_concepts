
// Procedural programming 
let baseSalary = 2000;
let overTime = 10;
let rate = 10;

function getWadge(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
};

// Encapsulation - employee object 

let employee = {
    baseSalary: 4000,
    overTime: 20,
    rate: 20,
    getWadge: function () {   // functions are better with fewer parameters 
        return this.baseSalary + (this.overTime * this.rate);
    }
};

employee.getWadge();