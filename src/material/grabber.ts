import { BookGrabber } from "./books/grabber";
import { IKnowledge, IKnowledgeOutput } from "./knowledge";

export interface IGrabber {
    grabTip(): IKnowledgeOutput;
}

export class MaterialGrabber implements IGrabber {
    private grabbers: IGrabber[];

    constructor() {
        this.grabbers = [];
        this.grabbers.push(new BookGrabber());
    }

    public grabTip(): IKnowledgeOutput {
        const currentGrabber = this.grabbers[Math.floor(Math.random() * this.grabbers.length)];
        return currentGrabber.grabTip();
    }
}
