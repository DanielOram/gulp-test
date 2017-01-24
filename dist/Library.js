"use strict";
var Library = (function () {
    function Library(books) {
        this.books = books;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
