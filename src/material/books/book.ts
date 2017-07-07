import { IKnowledge } from "../knowledge";

export interface IBook {
    name: string;
    author: string;
    knowledge: IKnowledge[];
}
