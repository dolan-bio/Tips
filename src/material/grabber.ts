import { BookGrabber } from "./books/grabber";
import { IKnowledge, IKnowledgeOutput } from "./knowledge";
import { VideoGrabber } from "./videos/grabber";

export interface IGrabber {
    grabTip(): IKnowledgeOutput;
}

export class MaterialGrabber implements IGrabber {
    private grabbers: IGrabber[];

    constructor() {
        this.grabbers = [];
        this.grabbers.push(new BookGrabber());
        this.grabbers.push(new VideoGrabber());
    }

    public grabTip(): IKnowledgeOutput {
        const currentGrabber = this.grabbers[Math.floor(Math.random() * this.grabbers.length)];
        return currentGrabber.grabTip();
    }
}
