import { IGrabber } from "../grabber";
import { IKnowledgeOutput } from "../knowledge";
import * as resources from "./resources";
import { IStackOverflow } from "./stack-overflow";

export class StackOverflowGrabber implements IGrabber {
    private material: IStackOverflow[];

    constructor() {
        this.material = [];
        this.material.push(resources.TheDifferenceBetweenTheRunnableAndCallableInterfacesInJava);
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
