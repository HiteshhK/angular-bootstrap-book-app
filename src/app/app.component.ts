import { Component } from '@angular/core';
import { Book } from '../Models/Book';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Novel Store';
  description = `Novel store is free to use book app to store,read delete and share books with users among them.n
  This is initial version with default books, some more books and features will be added later.
       --happy reading`;

  search: string = '';
  books = [
    new Book(1, 'The Alchemist', 'fantasy', 4, 200.0),
    new Book(2, 'The Lord of the rings', 'fantasy', 6, 700.0),
    new Book(3, 'The Blue uumbrella', 'fantasy', 3, 95.0),
    new Book(4, 'Asylum', 'fantasy', 1, 319.0),
    new Book(5, 'The Perfect Murder', 'Thriller', 8, 195.0),
    new Book(6, 'The Adventure of sherlok', 'Thriller', 20, 2000.0),
    new Book(7, 'Before i go to sleep', 'Thriller', 1, 1200.0),
    new Book(8, 'Kite runner', 'Fiction', 4, 510.0),
    new Book(9, 'All the light we can not see', 'Fiction', 1, 660.0),
    new Book(10, 'Harry potter series', 'Fiction', 20, 2000.0),
  ];

  tableData: Book[] = [];
  constructor() {
    this.tableData = this.books;
  }

  searchBooksByName() {
    console.log({ search: this.search });
    const title = this.search;
    if (title) {
      this.tableData = this.books.filter(function (ele, i, array) {
        let arrayelement = ele.bookname.toLowerCase();
        console.log({ arrayelement, title });
        return arrayelement.includes(title);
      });
      console.log(this.tableData);
    } else {
      this.tableData = this.books;
    }
  }

  booksAboveAmount(amount = 500) {
    console.log(this.tableData);
    this.tableData = this.books.filter((book) => book.price > amount);
  }

  getBookByGenre(genre: string) {
    this.tableData = this.books.filter((book) => book.genre === genre);
  }

  shoAll() {
    this.tableData = this.books;
  }
}
