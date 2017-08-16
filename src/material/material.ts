import { IKnowledge } from "./knowledge";

export interface IMaterial {
    name: string;
    author: string;
    knowledge: IKnowledge[];
}
