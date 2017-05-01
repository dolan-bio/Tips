const CodeComplete: Book = {
    name: "Code Complete",
    author: "Steve McConnell",
    knowledge: [{
        text: "Anticipate change. Accommodating changes is one of the most challenging aspects of good program design. The goal is to isolate unstable areas so that the effect of a change will be limited to one routine, class, or package.",
        page: 97,
        reference: "Glass 1995",
    }, {
        text: "Higher number of arguments means higher coupling.",
        page: 100,
    }, {
        text: "Semantic Coupling is the worst. The most insidious kind of coupling occurs when one module makes use not of some syntactic element of another module but of some semantic knowledge of another module’s inner workings.",
        page: 102,
    }, {
        text: "The more easily a module can call a module without including a lot of dependencies means less coupling.",
    }, {
        text: "Two modules are object-parameter coupled to each other if Object1 requires Object2 to pass it an Object3. This kind of coupling is tighter than Object1 requiring Object2 to pass it only primitive data types because it requires Object2 to know about Object3.",
        page: 101,
    }, {
        text: "Aim for strong cohesion",
    }, {
        text: "In ten years the pendulum has swung from “design everything” to “design nothing.” But the alternative to BDUF isn’t no design up front, it’s a Little Design Up Front (LDUF) or Enough Design Up Front—ENUF.",
        page: 119,
    }, {
        text: "Beware of interface erosion",
    }, {
        text: "Favour read-time convinence to write-time convinence. Code is read far more times than it’s written, even during initial development. Favoring a technique that speeds write-time convenience at the expense of read-time convenience is a false economy.",
        page: 141,
    }, {
        text: "Anytime you find yourself looking at a class’s implementation to figure out how to use the class, you're not programming to the interface; you’re programming through the interface to the implementation. If you’re programming through the interface, encapsulation is broken, and once encapsulation starts to break down, abstraction won’t be far behind.",
        page: 142,
    }, {
        text: "Try not to implement a 'has a' through inheritance",
        page: 143,
    }, {
        text: "Red flag if there is a class with more than 7 data members",
    }],
};

export { CodeComplete };
