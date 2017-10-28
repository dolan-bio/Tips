import { IBlog } from "./blog";

export const ImmutabilityAndPureFunctions: IBlog = {
    name: "Understanding Immutability and Pure Functions (for OOP)",
    author: "David Raab",
    url: "https://sidburn.github.io/blog/2016/03/14/immutability-and-pure-functions",
    knowledge: [{
        text: "Immutability is about data. So Immutability really means that data itself cannot be changed. But as stated previously, instead of modifying data itself we call functions that then can return new immutable data.",
    }, {
        text: "A much more useful explanation is to say that immutability is not about forbidding change at all. Instead immutability is more on how to handle change. Immutability is not about forbidding some kind of operations. You still can add an element to an array, the difference is that you just do it differently.",
    }, {
        text: "The big problem arises if a language also supports classes. Because a class is about hiding data and additionally contains functions, it introduces a lot of complexity. To understand the reason of this complexity, we first need to talk about pure and impure functions on its own.",
    }, {
        text: "So why does immutability not directly fit in the OO world? Because immutability is solely about data-structures. Immutability is the core idea that data cannot be changed. Functions take immutable data and they return immutable data.",
    }, {
        text: "Pure functions are only those functions that don't have any kind of side-effects. So what exactly is a side-effect? A simple explanation would be: A function only can depend on its input. Calling a function with the same input, always has to produce the same output. No matter how often, or at what time you call it. We can view + as a pure function.",
    }],
};
