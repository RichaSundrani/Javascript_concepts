function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

// add prototype methods

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// Magazine constructor 
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
// Inherit prototype 

Magazine.prototype = Object.create(Book.prototype);

// user magazine constructor 
Magazine.prototype.constructor = Magazine;

const magazine1 = new Magazine("Mag 1", "Kdg", "2010", "Feb");
console.log(magazine1);