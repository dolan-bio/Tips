import { IGrabber } from "../grabber";
import { IKnowledgeOutput } from "../knowledge";
import { IBlog } from "./blog";
import { ImmutabilityAndPureFunctions } from "./immutability-and-pure-functions";

export class BlogGrabber implements IGrabber {
    private material: IBlog[];

    constructor() {
        this.material = [];
        this.material.push(ImmutabilityAndPureFunctions);
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
