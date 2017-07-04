import { BookGrabber } from "./books/grabber";

export class MaterialGrabber implements Grabber {
    private grabbers: Grabber[];

    constructor() {
        this.grabbers = [];
        this.grabbers.push(new BookGrabber());
    }

    public grabTip(): Knowledge {
        const currentGrabber = this.grabbers[Math.floor(Math.random() * this.grabbers.length)];
        return currentGrabber.grabTip();
    }
}
