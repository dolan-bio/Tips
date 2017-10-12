import { IStackOverflow } from "../stack-overflow";

export const TheDifferenceBetweenTheRunnableAndCallableInterfacesInJava: IStackOverflow = {
    name: "The difference between the Runnable and Callable interfaces in Java",
    author: "Scottm",
    url: "https://stackoverflow.com/questions/141284/the-difference-between-the-runnable-and-callable-interfaces-in-java",
    knowledge: [{
        text: "The Callable interface is similar to Runnable, in that both are designed for classes whose instances are potentially executed by another thread. A Runnable, however, does not return a result and cannot throw a checked exception.",
    }, {
        text: "Runnable has been around since Java 1.0, but Callable was only introduced in Java 1.5 ... to handle use-cases that Runnable does not support. In theory, the Java team could have changed the signature of the Runnable.run() method, but this would have broken binary compatiblity with pre-1.5 code, requiring recoding when migrating old Java code to newer JVMs. That is a BIG NO-NO. Java strives to be backwards compatible ... and that's been one of Java's biggest selling points for business computing.",
    }],
};
