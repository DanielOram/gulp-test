export class Book {
    title: string;
    isb: number;
    author: string;
    release_date: string;
    publisher: string;

    constructor(title: string, isb: number, author: string, release_date: string, publisher: string) {
        this.title = title;
        this.isb = isb;
        this.author = author;
        this.release_date = release_date;
        this.publisher = publisher;
    }

    getInfo(): string {
        return "Title: " + this.title + " ISB: " + this.isb
            + " Author: " + this.author + " Release Date: " + this.release_date
            + " Publisher: " + this.publisher;
    }

    testMethod(){
        console.log('test method');
    }
}