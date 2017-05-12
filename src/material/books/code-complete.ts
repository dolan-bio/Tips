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
        text: "You should not worry about semantics in inheritance. You should be able to treat the base class the same in each derived class.",
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
    }, {
        text: "Minimize the number of different routines called by a class. A low 'Fan out'. One study found that the number of faults in a class was statistically correlated with the total number of routines that were called from within a class. The same study found that the more classes a class used, the higher its fault rate tended to be. ",
        page: 150,
        reference: "Basili, Briand, and Melo 1996",
    }, {
        text: "Minimize indirect routine calls to other classes. Direct connections are hazardous enough. Indirect connections—such as account.ContactPerson().DaytimeContactInfo().PhoneNumber() — tend to be even more hazardous. Researchers have formulated a rule called the “Law of Demeter”, which essentially states that Object A can call any of its own routines. If Object A instantiates an Object B, it can call any of Object B’s routines. But it should avoid calling routines on objects provided by Object B. In the account example above, that means account.ContactPerson() is OK but account.ContactPerson().DaytimeContactInfo() is not.",
        page: 150,
        reference: "Lieberherr and Holland 1989",
    }, {
        text: "In general, minimize the extent to which a class collaborates with other classes Try to minimise the number of kinds of objects instantiated, the number of different direct routine calls on instantiated objects and the number of routine calls on objects returned by other instantiated objects",
        page: 150,
    }, {
        text: "Initialize all member data in all constructors, if possible Initializing all data members in all constructors is an inexpensive defensive programming practice.",
        page: 151,
    }, {
        text: "Enforce the singleton property by using a private constructor. Say you have a class called Customer, if you only want one Customer to be created, create a static Customer.GetInstance() method, and a private constructor to enforce it.",
        page: 151,
    }, {
        text: "Prefer deep copies to shallow copies until proven otherwise One of the major decisions you’ll make about complex objects is whether to implement deep copies or shallow copies of the object. A deep copy of an object is a member-wise copy of the object’s member data; a shallow copy typically just points to or refers to a single reference copy, although the specific meanings of “deep” and “shallow” vary. The motivation for creating shallow copies is typically to improve performance. Although creating multiple copies of large objects might be aesthetically offensive, it rarely causes any measurable performance impact. A small number of objects might cause performance issues, but programmers are notoriously poor at guessing which code really causes problems. ",
        page: 151,
        reference: "Chapter 25, Code-Tuning Strategies",
    }, {
        text: "Deep copies are simpler to code and maintain than shallow copies. In addition to the code either kind of object would contain, shallow copies add code to count references, ensure safe object copies, safe comparisons, safe deletes, and so on. This code can be error-prone, and you should avoid it unless there’s a compelling reason to create it.",
        page: 152,
        reference: "Scott Meyers’s More Effective C++, Item 29 (1996)",
    }, {
        text: "Avoid creating god classes",
        page: 155,
        reference: "Riel 1996",
    }, {
        text: "Reasons to create a Class include: Modelling real-world objects, modelling abstract objects, reducing complexity, isolating complexity, hiding implementation details, limit effects of changes, hiding global data, streamlining parameter passing, making central points of control, facilitate reusable code, plan for a family of programs, packaging related operations, and accomplishing a specific refactoring.",
        page: 153,
    }, {
        text: "Eliminate irrelevant classes. If a class consists only of data but no behavior, ask yourself whether it’s really a class and consider demoting it so that its member data just becomes attributes of one or more other classes.",
        page: 155,
    }, {
        text: "Avoid classes named after verbs A class that has only behavior but no data is generally not really a class",
        page: 155,
    }, {
        text: "In routines, defend against bad data. Do checking for bad data and throw an error instead of having the routine malfunction.",
        page: 163,
    }, {
        text: "Reasons to create a class include: reducing complexity, introduce an intermediate - understandable abstraction, avoiding duplicate code, support subclassing, hiding sequences, hide pointer operations, improve portability, simplify complicated boolean testsimprove performance and to ensure all routines are small.",
        page: 165,
    }, {
        text: "Make names of routines as long as necessary Research shows that the optimum average length for a variable name is 9 to 15 characters.",
        page: 172,
    }, {
        text: "Put parameters in input-modify-output order Instead of ordering parameters randomly or alphabetically, list the parameters that are input-only first, input-and-output second, and output-only third. This ordering implies the sequence of operations happening within the routine-inputting data, changing it, and sending back a result.",
        page: 174,
    }, {
        text: "Don’t use routine parameters as working variables. It’s dangerous to use the parameters passed to a routine as working variables. Use local variables instead. Imagine if you return a mutated input variable, it will look confusing",
        page: 176,
    }, {
        text: "7+ parameters in a routine is too much. Psychological research has found that people generally cannot keep track of more than about seven chunks of information at once",
        page: 178,
        reference: "Miller 1956",
    }, {
        text: "Unused parameters are correlated with an increased error rate. In one study, 46 percent of routines with no unused variables had no errors, and only 17 to 29 percent of routines with more than one unreferenced variable had no errors.",
        page: 176,
        reference: "Card, Church, and Agresti 1986",
    }, {
        text: "Don't be afraid to create small routines (1-3 lines). Do it for readability.",
    }, {
        text: "Pass the variables or objects that the routine needs to maintain its interface abstraction. The top most priority is to maintain interface abstraction. If the variables the interface needs is coincidently all the variables in a class, do not change the interface to take in the class, make it true to that interface, keep it 3 variables. Imagine if the class changes in future, it will break abstraction.",
        page: 179,
    }, {
        text: "If you find yourself frequently changing the parameter list to the routine, with the parameters coming from the same object each time, that’s an indication that you should be passing the whole object rather than specific elements.",
        page: 179,
    }, {
        text: "Use a function if the primary purpose of the routine is to return the value indicated by the function name. Otherwise, use a procedure.",
        page: 182,
    }, {
        text: "Check the values of all routine input parameters Checking the values of routine input parameters is essentially the same as checking data that comes from an external source, except that the data comes from another routine instead of from an external interface. (I sort of disagree with this. In my opinion, no need to do such robust checking if you 100% know the return value will be correct inside your app).",
        page: 188,
        reference: "Section 8.5, “Barricade Your Program to Contain the Damage Caused by Errors",
    }, {
        text: "Initialise the return variable at the start of a function to prevent it mistakenly returning an uninitialised variable.",
    }, {
        text: "Don’t use an exception to pass the buck. If an error condition can be handled locally, handle it locally. Don’t throw an uncaught exception in a section of code if you can handle the error locally.",
        page: 199,
    }, {
        text: "Throw an exception only for conditions that are truly exceptional. Exceptions should be reserved for conditions that are truly exceptional—in other words, for conditions that cannot be addressed by other coding practices. Exceptions are used in similar circumstances to assertions—for events that are not just infrequent but for events that should never occur.",
        page: 199,
    }, {
        text: "Don't throw low level exceptions outwards because that breaks encapsulation. Throw a new one is generally better.",
        page: 200,
    }, {
        text: "Include in the exception message all information that led to the exception. Every exception occurs in specific circumstances that are detected at the time the code throws the exception. This information is invaluable to the person who reads the exception message. Be sure the message contains the information needed to understand why the exception was thrown. If the exception was thrown because of an array.",
        page: 200,
    }, {
        text: "Avoid empty catch blocks. Such an approach says that either the code within the try block is wrong because it raises an exception for no reason, or the code within the catch block is wrong because it doesn’t handle a valid exception. Determine which is the root cause of the problem, and then fix either the try block or the catch block.",
        page: 201,
    }, {
        text: ""
    }],
};

export { CodeComplete };
