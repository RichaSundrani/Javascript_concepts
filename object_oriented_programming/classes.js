class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    bookSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    bookAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;
    }
    addSequel() {
        this.sequel = new Book(title, this.author, year);
        return `New book with title: ${title}, has been release by the same author!`
    }
    static bextBook(){
        return `Richards book is best!`
    }
};
console.log(Book.bextBook());
const book1 = new Book("Richard's book", "Richard", 2014);
console.log(book1);
console.log(book1.bookSummary());


// Inheritance - Magazine subclass

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year); 
        this.month = month;
    }
}

const magazine1 = new Magazine("KDG-book", "KDG", 2014, "June"); 
console.log(magazine1.bookSummary());


