// // Book constructor 

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// };

// // Add methods to Book object 
// Book.prototype.getSummary = function () {
//     console.log(`${this.title} was written by ${this.author} and published in year ${this.year}`)
// };

// // Magazine constructor to inherit from Book
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// };

// // To add the Book prototype methods to Magazine prototype 
// Magazine.prototype = Object.create(Book.prototype);

// // To use Magazine constructor 
// Magazine.prototype.constructor = Magazine;

// ES6 - classes 
// Main class 
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        console.log(`${this.title} was written by ${this.author} and published in year ${this.year}`)
    };
    getAge() {
        console.log(`Book is ${new Date().getFullYear() - this.year} year old`);
    }
};

const book1 = new Book("Book 1", "Jane doe", "2012");

// Magazine subclass 
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
};

const mag1 = new Book("Mag 1", "Jane doe mag", "2017");

mag1.getSummary();