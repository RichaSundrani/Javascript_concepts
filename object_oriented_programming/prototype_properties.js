// Constructor 

function Book(title, author, year){
    this.title = title; 
    this.author = author;
    this.year = year;
}; 

Book.prototype.bookSummary = function () {
    return `${this.title} by ${this.author} - ${this.year} `
};

Book.prototype.bookAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old!`
}; 

Book.prototype.addSequel = function(title, year){
    this.sequel = new Book(title , this.author, year); 
    return `New book with title: ${title}, has been release by the same author!`
}



const book1 = new Book("Richard's book", "Richard", 2011); 
console.log(book1.bookSummary());
const book2 = new Book("Nimmu's book", "Nimmu", 2009); 
console.log(book2.bookSummary());
console.log(book2.bookAge());
console.log(book2.addSequel('Nimmu book2', 2015));
console.log(book2.sequel.bookAge());