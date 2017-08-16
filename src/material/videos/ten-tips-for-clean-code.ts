import { IVideo } from "./video";

export const TenTipsForCleanCode: IVideo = {
    name: "10 Tips for Clean Code",
    author: "Coding Tech",
    url: "https://www.youtube.com/watch?v=UjhX2sVf0eg",
    knowledge: [{
        text: "An ounce of prevention is worth a pound of cure. Fast and dirty code will be more expensive to add new changes in the long run",
    }, {
        text: "We like to think we spend out time power typing, but we actually spend most of our time staring into the abyss.",
    }, {
        text: "You are responsible for the quality of your code. We have to be advocates for the quality of code that we write to be a professional. Doctors, lawyers and accountants have professional standards and procedure, and so do software engineers.",
    }, {
        text: "Write code that expresses intent.",
    }, {
        text: "Clean code should read like well written prose.",
    }, {
        text: "Comments are often lies waiting to happen. Code should speak for itself whenever possible. Comments means that there is something else which needs to be maintained along with the code.",
    }, {
        text: "Boy Scout Rule: Leave the code better than you found it.",
    }, {
        text: "Classes must be cohesive. If a class has methods which use one half of the properties, and methods which use another half, then you'd probably want to split it up to two classes.",
    }, {
        text: "Software architectures are structures that support the use cases of the systrm. Frameworks are tools to be used, not to be conformed to.",
        reference: "Bob Martin",
    }, {
        text: "Practice. Practice. Practice. Musicians don't only play on stage in front of an audience. The same applies to software engineering",
    }],
};
