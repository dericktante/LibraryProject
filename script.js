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
        bookCard.classList.add("book-card"); 
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        `;
        libraryDiv.appendChild(bookCard);

    });
}

const newBookBtn = document.getElementById("newBookBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", () => {
  if (bookForm.style.display === "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  }
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  bookForm.style.display = "none";
  displayBooks();
});



addBookToLibrary("The Popper", "J.R.R. Tolkien", 310, true);
displayBooks();
bookForm.reset();
bookForm.style.display = "none";
