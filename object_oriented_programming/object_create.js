//Object of protos 
const bookProto = {
    bookSummary: function () {
        return `${this.title} by ${this.author} - ${this.year}`;
    },
    bookAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old!`
    }
}; 

// Create object 
const book1 = Object.create(bookProto); 
book1.title = "Richard book";
book1.author = "Richard"; 
book1.year = "2021";

console.log(book1); 
console.log(book1.bookSummary()); 

// OR 

const book2 = Object.create(bookProto, {
    title :{value : "Nimmu book"}, 
    author :{value : "Nimmu"}, 
    year :{value : 2019}
});

console.log(book2); 
console.log(book2.bookSummary()); 
