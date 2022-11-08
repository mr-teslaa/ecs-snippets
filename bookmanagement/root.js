// GET THE UI ELEMENT
let form = document.querySelector('#bookForm'),
    booklist = document.querySelector('#bookList');

// BOOK CLASS
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// ADD FORM TO TABLE
// UI ELEMENT
class UI {

    static addBookList(book) {
        let list = document.querySelector('#bookList');
        let tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>
            <a href="#" class="button danger"> Delete </a>
        </td>`;
        list.appendChild(tr);
    }

    static clearForm() {
        title.value = '';
        author.value = '';
        isbn.value = '';
    }

    static showalert(message, className) {
        let div = document.createElement('div')
        div.className = `status alert ${className}`
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container')
        let form = document.querySelector('form')

        container.insertBefore(div, form)
        
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000)
    }

    static deleteFromBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove()
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim())
            UI.showalert("Book Deleted ✅", "success")
        }
    }
}


// LOCAL STORAGE CLASS
class Store {

    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books;
    }


    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = Store.getBooks();

        books.forEach(book => {
            UI.addBookList(book)
        })
    }

    static removeBook(isbn) {
        let books = Store.getBooks()

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1)
            }
        }) 

        localStorage.setItem('books', JSON.stringify(books))
    }
}


// DEFINE FUNCTIONS
const newBook = (e) => {
    let title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    if(title && author && isbn) {
        UI.showalert("YEY, Successfully added the book 🎉", "success")

        let book = new Book(title, author, isbn);

        UI.addBookList(book)
        UI.clearForm()
        Store.addBook(book)
    } else {
        UI.showalert("Don't forget to add your task, you will rock it 😎", "danger")
    }

    e.preventDefault()
}

const removeBook = (e) => {
    UI.deleteFromBook(e.target)   
}


// ADD EVENT LISTENER
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);

document.addEventListener('DOMContentLoaded', Store.displayBooks())