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
    }, {
        text: "If the derived class isn’t going to adhere completely to the same interface contract defined by the base class, inheritance is not the right implementation technique. Consider containment or making a change further up the inheritance hierarchy.",
        page: 144,
    }, {
        text: "“Design and document for inheritance, or prohibit it.” If a class isn’t designed to be inherited from, make its members non-virtual in C++, final in Java, or non-overridable in Microsoft Visual Basic so that you can’t inherit from it.",
        page: 144,
        reference: "Joshua Bloch",
    }, {
        text: "If a programmer must be constantly thinking about semantic differences in subclass implementations, then inheritance is increasing complexity rather than reducing it.",
        page: 145,
    }, {
        text: "You should not worry about semantics in inheritance. You should be able to treat the base class the same in each derived class."
    }, {
        text: "Be suspicious of base classes of which there is only one derived class When I see a base class that has only one derived class, I suspect that some programmer has been “designing ahead”—trying to anticipate future needs, usually without fully understanding what those future needs are. The best way to prepare for future work is not to design extra layers of base classes that “might be needed someday”; it’s to make current work as clear, straightforward, and simple as possible. That means not creating any more inheritance structure than is absolutely necessary.",
        page: 146,
    }, {
        text: "Be suspicious of classes that override a routine and do nothing inside the derived routine This typically indicates an error in the design of the base class. For instance, suppose you have a class Cat and a routine Scratch() and suppose that you eventually find out that some cats are declawed and can’t scratch. You might be tempted to create a class derived from Cat named ScratchlessCat and override the Scratch() routine to do nothing.",
        page: 146,
    }, {
        text: "Avoid deep inheritance trees Object-oriented programming provides a large number of techniques for managing complexity. But every powerful tool has its hazards, and some object-oriented techniques have a tendency to increase complexity rather than reduce it. Arthur Riel suggests limiting inheritance hierarchies to a maximum of six levels.",
        page: 147,
        reference: "Object-Oriented Design Heuristics (1996), Arthur Riel",
    }, {
        text: "Prefer polymorphism to extensive type checking Frequently repeated case statements sometimes suggest that inheritance might be a better design choice, although this is not always true.",
        page: 147,
    }, {
        text: "Keep the number of routines in a class as small as possible. A study of C++ programs found that higher numbers of routines per class were associated with higher fault rates. However, other competing factors were found to be more significant, including deep inheritance trees, large number of routines called within a class, and strong coupling between classes. Evaluate the tradeoff between minimizing the number of routines and these other factors.",
        page: 150,
        reference: "Basili, Briand, and Melo 1996",
    }, {
        text: "In general, minimize the extent to which a class collaborates with other classes Try to minimize all of the following: Number of kinds of objects instantiated; Number of different direct routine calls on instantiated objects; Number of routine calls on objects returned by other instantiated objects.",
        page: 150,
    }, {
        text: "Initialize all member data in all constructors, if possible Initializing all data members in all constructors is an inexpensive defensive programming practice.",
        page: 151,
    }, {
        text: "Make operators and constructors private when nessesary. E.g. Private constructor for singleton",
        page: 151,
    }],
};

export { CodeComplete };
