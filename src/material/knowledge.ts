export interface IKnowledge {
    text: string;
    page?: number;
    reference?: string;
}

export interface IKnowledgeOutput extends IKnowledge {
    from: string;
}
