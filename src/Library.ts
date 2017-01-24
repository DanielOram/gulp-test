import { Book } from './Book';

class Library {
    books: Book[];

    constructor(books: Book[]){
        this.books = books;
    }

    getBooks(): Book[]{
        return this.books;
    }
}