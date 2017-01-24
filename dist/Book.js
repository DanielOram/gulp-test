"use strict";
var Book = (function () {
    function Book(title, isb, author, release_date, publisher) {
        this.title = title;
        this.isb = isb;
        this.author = author;
        this.release_date = release_date;
        this.publisher = publisher;
    }
    Book.prototype.getInfo = function () {
        return "Title: " + this.title + " ISB: " + this.isb
            + " Author: " + this.author + " Release Date: " + this.release_date
            + " Publisher: " + this.publisher;
    };
    Book.prototype.testMethod = function () {
        console.log('test method');
    };
    return Book;
}());
exports.Book = Book;
