import { IGrabber } from "../grabber";
import { IKnowledge } from "../knowledge";
import { IBook } from "./book";
import { CodeComplete } from "./code-complete";

export class BookGrabber implements IGrabber {
    private books: IBook[];

    constructor() {
        this.books = [];
        this.books.push(CodeComplete);
    }

    public grabTip(): IKnowledge {
        const currentBook = this.books[Math.floor(Math.random() * this.books.length)];

        return currentBook.knowledge[Math.floor(Math.random() * currentBook.knowledge.length)];
    }
}
