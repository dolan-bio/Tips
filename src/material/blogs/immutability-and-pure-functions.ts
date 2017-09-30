import { IBlog } from "./blog";

export const ImmutabilityAndPureFunctions: IBlog = {
    name: "Understanding Immutability and Pure Functions (for OOP)",
    author: "David Raab",
    url: "https://sidburn.github.io/blog/2016/03/14/immutability-and-pure-functions",
    knowledge: [{
        text: "Immutability is about data. So Immutability really means that data itself cannot be changed. But as stated previously, instead of modifying data itself we call functions that then can return new immutable data.",
    }, {
        text: "A much more useful explanation is to say that immutability is not about forbidding change at all. Instead immutability is more on how to handle change. Immutability is not about forbidding some kind of operations. You still can add an element to an array, the difference is that you just do it differently.",
    }],
};
