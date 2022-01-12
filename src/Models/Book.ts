export class Book {
  bookid: number;
  bookname: string;
  genre: string;
  quantity: number;
  price: number;

  constructor(
    bookid: number,
    bookname: string,
    genre: string,
    quantity: number,
    price: number
  ) {
    this.bookid = bookid;
    this.bookname = bookname;
    this.genre = genre;
    this.quantity = quantity;
    this.price = price;
  }
}
