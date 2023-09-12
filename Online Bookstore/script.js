// Create constructor functions for Book and Author to represent books and authors.

// The Author constructor should take name, birthYear, and nationality as arguments.


function Author(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

let AuthorOne = new Author("Mukesh", 1998, "Bharat")

// console.log(AuthorOne)


// The Book constructor should take title, author (an Author object), genre, and price as arguments.

function Book(title, Author, genre, price){
    this.title = title;
    this.Author = Author;
    this.genre = genre;
    this.price = price;

    this.getBookInfo = () =>{
         console.log(this.title, this.Author.name, this.genre, this.price);
    }
}


let bookOne = new Book("Geography", AuthorOne, "5th", 500);

bookOne.getBookInfo()

console.log(bookOne);