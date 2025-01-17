class Book {
    #title;
    #author;
    #isAvailable;
  
    constructor(title, author) {
      this.#title = title;
      this.#author = author;
      this.#isAvailable = true;
    }
  
    getTitle() {
      return this.#title;
    }
  
    getAuthor() {
      return this.#author;
    }
  
    isAvailable() {
      return this.#isAvailable;
    }
  
    checkoutBook() {
      if (this.#isAvailable) {
        this.#isAvailable = false;
        console.log(`Книга "${this.#title}" видана.`);
      } else {
        console.log(`Книга "${this.#title}" наразі недоступна.`);
      }
    }
  
    returnBook() {
      this.#isAvailable = true;
      console.log(`Книга "${this.#title}" повернута.`);
    }
  }

  
  class Library {
    books = [];
  
    // Метод для додавання книги до бібліотеки
    addBook(book) {
      this.books.push(book);
      console.log(`Книга "${book.getTitle()}" додана до бібліотеки.`);
    }
  
    // Метод для видачі книги
    checkoutBook(title) {
      const book = this.books.find(b => b.getTitle() === title);
      if (book) {
        book.checkoutBook();
      } else {
        console.log(`Книга з назвою "${title}" не знайдена.`);
      }
    }
  
    // Метод для перегляду доступних книг
    viewAvailableBooks() {
      const availableBooks = this.books.filter(book => book.isAvailable());
      if (availableBooks.length === 0) {
        console.log("Немає доступних книг.");
      } else {
        console.log("Доступні книги:");
        availableBooks.forEach(book => {
          console.log(`"${book.getTitle()}" автор: ${book.getAuthor()}`);
        });
      }
    }
  }


    const book1 = new Book("Контопська Відьма", "Григорій Квітка-Основ'яненко");
    const book2 = new Book("1984", "Джордж Орвелл");
    const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.viewAvailableBooks();
library.checkoutBook("1984");
library.viewAvailableBooks();
library.checkoutBook("1984");
book1.returnBook();
library.viewAvailableBooks();
