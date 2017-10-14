import { IStackOverflow } from "../stack-overflow";

export const Java8IterableForeachVsForeachLoop: IStackOverflow = {
    name: "Java 8 Iterable.forEach() vs foreach loop",
    author: "nebkat",
    url: "https://stackoverflow.com/questions/16635398/java-8-iterable-foreach-vs-foreach-loop",
    knowledge: [{
        text: "Iterable#forEach in combination with lambda expressions is not a shortcut/replacement for writing a traditional for-each loop.",
    }, {
        text: "Replacing the body of a loop with a functional interface, as in the examples above, makes your code more explicit: You are saying that (1) the body of the loop does not affect the surrounding code and control flow, and (2) the body of the loop may be replaced with a different implementation of the function, without affecting the surrounding code.",
    }, {
        text: "Traditional for-each loops will certainly stay good practice (to avoid the overused term 'best practice') in Java. But this doesn't mean, that Iterable#forEach should be considered bad practice or bad style. It is always good practice, to use the right tool for doing the job, and this includes mixing traditional for-each loops with Iterable#forEach, where it makes sense.",
    }, {
        text: "",
    }],
};
