// Constructor 

function Book(title, author, year){
    this.title = title; 
    this.author = author;
    this.year = year;
    this.bookSummary = function () {
        return `${this.title} by ${this.author} - ${this.year} `
    } 
}; 

// Now we can create mulptiple instances of book object

const book1 = new Book("Richard's book", "Richard", "2011"); 
console.log(book1.bookSummary());
const book2 = new Book("Nimmu's book", "Nimmu", "2020"); 
console.log(book2.bookSummary());

// Note -  Instead of writing the methods inside the constructor use protypes to add the methods and properties. 