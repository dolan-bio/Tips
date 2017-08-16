import { IGrabber } from "../grabber";
import { IKnowledgeOutput } from "../knowledge";
import { CompositionOverInheritance } from "./composition-over-inheritance";
import { TenTipsForCleanCode } from "./ten-tips-for-clean-code";
import { IVideo } from "./video";

export class VideoGrabber implements IGrabber {
    private material: IVideo[];

    constructor() {
        this.material = [];
        this.material.push(TenTipsForCleanCode);
        this.material.push(CompositionOverInheritance);
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
