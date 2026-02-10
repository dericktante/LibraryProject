const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

function displayBooks(){
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = "";
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div"); 
        bookCard.textContent = book.title;
        libraryDiv.appendChild(bookCard);

    });
}

addBookToLibrary("The Popper", "J.R.R. Tolkien", 310, true);
displayBooks();