import { BookGrabber } from "./books/grabber";
import { IKnowledge } from "./knowledge";

export interface IGrabber {
    grabTip(): IKnowledge;
}

export class MaterialGrabber implements IGrabber {
    private grabbers: IGrabber[];

    constructor() {
        this.grabbers = [];
        this.grabbers.push(new BookGrabber());
    }

    public grabTip(): IKnowledge {
        const currentGrabber = this.grabbers[Math.floor(Math.random() * this.grabbers.length)];
        return currentGrabber.grabTip();
    }
}
