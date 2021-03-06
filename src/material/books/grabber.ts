import { IGrabber } from "../grabber";
import { IKnowledgeOutput } from "../knowledge";
import { IBook } from "./book";
import { CodeComplete } from "./code-complete";

export class BookGrabber implements IGrabber {
    private material: IBook[];

    constructor() {
        this.material = [];
        this.material.push(CodeComplete);
    }

    public grabTip(): IKnowledgeOutput {
        const currentMaterial = this.material[Math.floor(Math.random() * this.material.length)];
        const knowledge = currentMaterial.knowledge[Math.floor(Math.random() * currentMaterial.knowledge.length)];

        return {
            text: knowledge.text,
            page: knowledge.page,
            reference: knowledge.reference,
            from: currentMaterial.name,
        };
    }
}
