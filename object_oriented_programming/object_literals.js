const book = {
    title : "Richard Parkar's Book", 
    author: "Richard Parkar", 
    year:"2011", 
    bookSummary : function () {
        return `${this.title} by ${this.author} - ${this.year} `
    }
}; 

const book1 = {
    title: "Book one",
    author: "Nimmu",
    year: "2021",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book.bookSummary());
console.log(Object.values(book));
console.log(Object.keys(book));

// If we want multiple book objects we have to replicate the same code - not a good idea - user constructor function to avoid duplicate code 