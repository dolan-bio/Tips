import { CodeComplete } from "./code-complete";

export class BookGrabber implements Grabber {
    private books: Book[];

    constructor() {
        this.books = [];
        this.books.push(CodeComplete);
    }

    public grabTip(): Knowledge {
        const currentBook = this.books[Math.floor(Math.random() * this.books.length)];

        return currentBook.knowledge[Math.floor(Math.random() * currentBook.knowledge.length)];
    }
}
