import { IGrabber } from "../grabber";
import { IKnowledgeOutput } from "../knowledge";
import { IBook } from "./book";
import { CodeComplete } from "./code-complete";

export class BookGrabber implements IGrabber {
    private books: IBook[];

    constructor() {
        this.books = [];
        this.books.push(CodeComplete);
    }

    public grabTip(): IKnowledgeOutput {
        const currentBook = this.books[Math.floor(Math.random() * this.books.length)];
        const knowledge = currentBook.knowledge[Math.floor(Math.random() * currentBook.knowledge.length)];

        return {
            text: knowledge.text,
            page: knowledge.page,
            reference: knowledge.reference,
            from: currentBook.name,
        };
    }
}
