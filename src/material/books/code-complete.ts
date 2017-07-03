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
        text: "Barricades are a damage-containment strategy. The reason is similar to that for having isolated compartments in the hull of a ship. If the ship runs into an iceberg and pops open the hull, that compartment is shut off and the rest of the ship isn’t affected. They are also similar to firewalls in a building. A building’s firewalls prevent fire from spreading from one part of a building to another part.",
        page: 203,
    }, {
        text: "Convert input data to the proper type at input time Input typically arrives in the form of a string or number. Sometimes the value will map onto a boolean type like “yes” or “no.” Sometimes the value will map onto an enumerated type like Color_Red, Color_Green, and Color_Blue. Carrying data of questionable type for any length of time in a program increases complexity and increases the chance that someone can crash your program by inputting a color like “Yes.” Convert input data to the proper form as soon as possible after it’s input.",
        page: 204,
    }, {
        text: "Be willing to trade speed and resource usage during development in exchange for built-in tools that can make development go more smoothly.",
        page: 205,
    }, {
        text: "The code between references to a variable is a “window of vulnerability.” In the window, new code might be added, inadvertently altering the variable, or someone reading the code might forget the value the variable is supposed to contain. It’s always a good idea to localize references to variables by keeping them close together.",
        page: 245,
    }, {
        text: "Keep Variables “Live” for as Short a Time as Possible. And as with span, the basic advantage of maintaining a low number is that it reduces the window of vulnerability. You reduce the chance of incorrectly or inadvertently altering a variable between the places in which you intend to alter it.",
        page: 246,
    }, {
        text: "Keep Variables “Live” for as Short a Time as Possible. A second advantage of keeping the live time short is that it gives you an accurate picture of your code. If a variable is assigned a value in line 10 and not used again until line 45, the very space between the two references implies that the variable is used between lines 10 and 45. If the variable is assigned a value in line 44 and used in line 45, no other uses of the variable are implied, and you can concentrate on a smaller section of code when you’re thinking about that variable.",
        page: 247,
    }, {
        text: "A short live time makes your code more readable.",
        page: 247,
    }, {
        text: "Short live times are useful when splitting a large routine into smaller routines. If references to variables are kept close together, it’s easier to refactor related sections of code into routines of their own.",
        page: 247,
    }, {
        text: "Other programmers prefer to keep their variables as local as possible because local scope helps intellectual manageability. The more information you can hide, the less you have to keep in mind at any one time. The less you have to keep in mind, the smaller the chance that you’ll make an error because you forgot one of the many details you needed to remember.",
        page: 251,
    }, {
        text: "Use each variable for one purpose only It’s sometimes tempting to use one variable in two different places for two different activities. Usually, the variable is named inappropriately for one of its uses or a “temporary” variable is used in both cases (with the usual unhelpful name x or temp).",
        page: 255,
    }, {
        text: "Avoid variables with hidden meanings. This is called hybrid coupling. The variable is stretched over two jobs, meaning that the variable is the wrong type for one of the jobs. In the pageCount example, pageCount normally indicates the number of pages; it’s an integer. When pageCount is -1, however, it indicates that an error has occurred; the integer is moonlighting as a boolean! For example, the value in the variable pageCount might represent the number of pages printed, unless it equals -1, in which case it indicates that an error has occurred. Or, the variable bytesWritten might be the number of bytes written to an output file, unless its value is negative, in which case it indicates the number of the disk drive used for the output.",
        page: 256,
        reference: "Page-Jones 1988",
    }, {
        text: "The effort required to debug a program was minimized when variables had names that averaged 10 to 16 characters. Programs with names averaging 8 to 20 characters were almost as easy to debug. The guideline doesn’t mean that you should try to make all of your variable names 9 to 15 or 10 to 16 characters long. It does mean that if you look over your code and see many names that are shorter, you should check to be sure that the names are as clear as they need to be.",
        page: 262,
        reference: "Gorla, Benander, and Benander (1990)",
    }, {
        text: "Are short variable names always bad? No, not always. When you give a variable a short name like i, the length itself says something about the variable—namely, that the variable is a scratch value with a limited scope of operation.",
        page: 262,
    }, {
        text: "If a variable is to be used outside the loop, it should be given a name more meaningful than i, j, or k. For example, if you are reading records from a file and need to remember how many records you’ve read, a name like recordCount would be appropriate.",
        page: 265,
    }, {
        text: "If the loop is longer than a few lines, it’s easy to forget what i is supposed to stand for and you’re better off giving the loop index a more meaningful name. Because code is so often changed, expanded, and copied into other programs, many experienced programmers avoid names like i altogether.",
        page: 265,
    }, {
        text: "In nested for loops, use a more descriptive name than i and j.",
        page: 265,
    }, {
        text: "Think of a better name than flag for status variables. It’s better to think of flags as status variables. A flag should never have flag in its name because that doesn’t give you any clue about what the flag does. For clarity, flags should be assigned values and their values should be tested with enumerated types, named constants, or global variables that act as named constants.",
        page: 266,
    }, {
        text: "Be leery of “temporary” variables. It’s often necessary to preserve values temporarily. But in one way or another, most of the variables in your program are temporary. Calling a few of them temporary may indicate that you aren’t sure of their real purposes.",
        page: 267,
    }, {
        text: "Use positive boolean variable names Negative names like notFound, notdone, and notSuccessful are difficult to read when they are negated.",
        page: 269,
    }, {
        text: "When naming constants, name the abstract entity the constant represents rather than the number the constant refers to. FIVE is a bad name for a constant (regardless of whether the value it represents is 5.0). CYCLES_NEEDED is a good name. CYCLES_NEEDED can equal 5.0 or 6.0. FIVE = 6.0 would be ridiculous.",
        page: 270,
    }, {
        text: "Any convention at all is often better than no convention. The convention may be arbitrary. The power of naming conventions doesn’t come from the specific convention chosen but from the fact that a convention exists, adding structure to the code and giving you fewer things to worry about.",
        page: 271,
    }, {
        text: "Don’t abbreviate by removing one character from a word. Typing one character is little extra work, and the one-character savings hardly justifies the loss in readability. It’s like the calendars that have “Jun” and “Jul.” You have to be in a big hurry to spell June as “Jun.” With most one-letter deletions, it’s hard to remember whether you removed the character. Either remove more than one character or spell out the word.",
        page: 283,
    }, {
        text: "Abbreviate consistently Always use the same abbreviation. For example, use Num everywhere or No everywhere, but don’t use both. Similarly, don’t abbreviate a word in some names and not in others. For instance, don’t use the full word Number in some places and the abbreviation Num in others.",
        page: 283,
    }, {
        text: "Create names that you can pronounce. Use xPos rather than xPstn and needsComp rather than ndsCmptg. Apply the telephone test—if you can’t read your code to someone over the phone, rename your variables to be more distinctive.",
        page: 283,
        reference: "Kernighan and Plauger 1978",
    }, {
        text: "Avoid numerals in names. If the numerals in a name are really significant, use an array instead of separate variables. If an array is inappropriate, numerals are even more inappropriate. For example, avoid file1 and file2, or total1 and total2. You can almost always think of a better way to differentiate between two variables than by tacking a 1 or a 2 onto the end of the name.",
        page: 286,
    }, {
        text: "Avoid multiple natural languages In multinational projects, enforce use of a single natural language for all code, including class names, variable names, and so on. Reading another programmer’s code can be a challenge; reading another programmer’s code in Southeast Martian is impossible.",
        page: 287,
    }, {
        text: "Avoid “magic numbers”. Magic numbers are literal numbers, such as 100 or 47524, that appear in the middle of a program without explanation. If you program in a language that supports named constants, use them instead. If you can’t use named constants, use global variables when it’s feasible to do so.",
        page: 292,
    }, {
        text: "Avoid magic characters and strings. Magic characters are literal characters (such as 'A') and magic strings are literal strings (such as 'Gigamatic Accounting Program') that appear throughout a program. If you program in a language that supports the use of named constants, use them instead. Otherwise, use global variables.",
        page: 298,
    }, {
        text: "Anytime you see a numeric literal, ask whether it makes sense to replace it with an enumerated type.",
        page: 303,
    }, {
        text: "Don't pretend that you're not using global variables by creating a monster object and passing that everywhere",
    }, {
        text: "Put related statements together. They can be related because they operate on the same data, perform similar tasks, or depend on each other’s being performed in order.",
        page: 352,
    }, {
        text: "Use routine parameters to make dependencies obvious. If no data is passed between routines, you don’t know whether any of the routines use the same data. By rewriting the code so that data is passed between the routines, you set up a clue that the execution order is important.",
        page: 349,
    }, {
        text: "Name routines so that dependencies are obvious. In the Visual Basic example, ComputeMarketingExpense() is misnamed because it does more than compute marketing expenses; it also initializes member data. If you’re opposed to creating an additional routine to initialize the data, at least give ComputeMarketingExpense() a name that describes all the functions it performs. In this case, ComputeMarketingExpenseAndInitializeMemberData() would be an adequate name. You might say it’s a terrible name because it’s so long, but the name describes what the routine does and is not terrible. The routine itself is terrible!",
        page: 348,
    }, {
        text: "Don't make semantic assumptions when writing methods.",
    }, {
        text: "Document unclear dependencies with comments. Try first to write code without order dependencies.Try second to write code that makes dependencies obvious. If you’re still concerned that an order dependency isn’t explicit enough, document it. Documenting unclear dependencies is one aspect of documenting coding assumptions, which is critical to writing maintainable, modifiable code.",
        page: 350,
    }, {
        text: "Write the nominal path through the code first; then write the unusual cases. Write your code so that the normal path through the code is clear. Make sure that the rare cases don’t obscure the normal path of execution. This is important for both readability and performance.",
        page: 355,
    }, {
        text: "Put the normal case after the if rather than after the else. Put the case you normally expect to process first. This is in line with the general principle of putting code that results from a decision as close as possible to the decision. Here’s a code example that does a lot of error processing, haphazardly checking for errors along the way.",
        page: 356,
    }, {
        text: "For Case statements, order cases alphabetically or numerically. If cases are equally important, putting them in A-B-C order improves readability. That way a specific case is easy to pick out of the group.",
        page: 361,
    }, {
        text: "For Case statements, put the normal case first If you have one normal case and several exceptions, put the normal case first. Indicate with comments that it’s the normal case and that the others are unusual.",
        page: 361,
    }, {
        text: "Keep the actions of each case simple. Keep the code associated with each case short. Short code following each case helps make the structure of the case statement clear. If the actions performed for a case are complicated, write a routine and call the routine from the case rather than putting the code into the case itself.",
        page: 361,
    }, {
        text: "The foreach loop or its equivalent (foreach in C#, For-Each in Visual Basic, for-in in Python) is useful for performing an operation on each member of an array or other container. It has the advantage of eliminating loop-housekeeping arithmetic and therefore eliminating any chance of errors in the loop-housekeeping arithmetic.",
        page: 372,
    }, {
        text: "You can forestall these problems by observing two practices. First, minimize the number of factors that affect the loop. Simplify! Simplify! Simplify! Second, treat the inside of the loop as if it were a routine—keep as much of the control as possible outside the loop. Explicitly state the conditions under which the body of the loop is to be executed. Don’t make the reader look inside the loop to understand the loop control. Think of a loop as a black box: the surrounding program knows the control conditions but not the contents.",
        page: 373,
    }, {
        text: "Keep the actions of each case simple. Keep the code associated with each case short. Short code following each case helps make the structure of the case statement clear. If the actions performed for a case are complicated, write a routine and call the routine from the case rather than putting the code into the case itself.",
        page: 361,
    }, {
        text: "Use the default clause only to detect legitimate defaults. You might sometimes have only one case remaining and decide to code that case as the default clause. Though sometimes tempting, that’s dumb. You lose the automatic documentation provided by case-statement labels, and you lose the ability to detect errors with the default clause.",
        page: 363,
    }, {
        text: "Don't make the reader look inside the loop to understand the loop control. Think of a loop as a black box: the surrounding program knows the control conditions but not the contents.",
        page: 373,
    }, {
        text: "Keep loop-initialization statements with the loop they’re related to. If you don’t, you’re more likely to cause errors when you generalize the loop into a bigger loop and forget to modify the initialization code. The same kind of error can occur when you move or copy the loop code into a different routine without moving or copying its initialization code. Putting initializations away from the loop—in the data-declaration section or in a housekeeping section at the top of the routine that contains the loop—invites initialization troubles.",
        page: 373,
    }, {
        text: "Keep loop-housekeeping chores at either the beginning or the end of the loop. Loop housekeeping chores are expressions like i = i + 1 or j++, expressions whose main purpose isn’t to do the work of the loop but to control the loop.",
        page: 376,
    }, {
        text: "Make each loop perform only one function. The mere fact that a loop can be used to do two things at once isn’t sufficient justification for doing them together. Loops should be like routines in that each one should do only one thing and do it well. If it seems inefficient to use two loops where one would suffice, write the code as two loops, comment that they could be combined for efficiency, and then wait until benchmarks show that the section of the program poses a performance problem before changing the two loops into one.",
        page: 376,
    }, {
        text: "Avoid code that depends on the loop index’s final value. It’s bad form to use the value of the loop index after the loop. The terminal value of the loop index varies from language to language and implementation to implementation. The value is different when the loop terminates normally and when it terminates abnormally. Even if you happen to know what the final value is without stopping to think about it, the next person to read the code will probably have to think about it. It’s better form and more self-documenting if you assign the final value to a variable at the appropriate point inside the loop.",
        page: 377,
    }, {
        text: "Be wary of a loop with a lot of breaks scattered through it. A loop’s containing a lot of breaks can indicate unclear thinking about the structure of the loop or its role in the surrounding code. A proliferation of breaks raises the possibility that the loop could be more clearly expressed as a series of loops rather than as one loop with many exits.",
        page: 380,
    }, {
        text: "Use break and continue only with caution Use of break eliminates the possibility of treating a loop as a black box. Limiting yourself to only one statement to control a loop’s exit condition is a powerful way to simplify your loops. Using a break forces the person reading your code to look inside the loop for an understanding of the loop control. That makes the loop more difficult to understand.",
        page: 381,
    }, {
        text: "Use meaningful variable names to make nested loops readable. Arrays are often indexed with the same variables that are used for loop indexes. If you have a onedimensional array, you might be able to get away with using i, j, or k to index it. But if you have an array with two or more dimensions, you should use meaningful index names to clarify what you’re doing. Meaningful array-index names clarify both the purpose of the loop and the part of the array you intend to access.",
        page: 382,
    }, {
        text: "Make your loops short enough to view all at once. If you usually look at loops on your monitor and your monitor displays 50 lines, that puts a 50-line restriction on you. Experts have suggested a loop-length limit of one page. When you begin to appreciate the principle of writing simple code, however, you’ll rarely write loops longer than 15 or 20 lines",
        page: 385,
    }, {
        text: "Limit nesting to three levels. Studies have shown that the ability of programmers to comprehend a loop deteriorates significantly beyond three levels of nesting. If you’re going beyond that number of levels, make the loop shorter (conceptually) by breaking part of it into a routine or simplifying the control structure.",
        page: 385,
        reference: "Yourdon 1986a",
    }, {
        text: "Make long loops especially clear. Length adds complexity. If you write a short loop, you can use riskier control structures such as break and continue, multiple exits, complicated termination conditions, and so on. If you write a longer loop and feel any concern for your reader, you’ll give the loop a single exit and make the exit condition unmistakably clear.",
        page: 385,
    }, {
        text: "Use a return when it enhances readability. In certain routines, once you know the answer, you want to return it to the calling routine immediately. If the routine is defined in such a way that it doesn’t require any further cleanup once it detects an error, not returning immediately means that you have to write more code.",
        page: 391,
    }, {
        text: "Use guard clauses (early returns or exits) to simplify complex error processing. Code that has to check for numerous error conditions before performing its nominal actions can result in deeply indented code and can obscure the nominal case",
        page: 392,
    }, {
        text: "Minimize the number of returns in each routine. It’s harder to understand a routine when, reading it at the bottom, you’re unaware of the possibility that it returned somewhere above. For that reason, use returns judiciously—only when they improve readability.",
        page: 393,
    }, {
        text: "Use safety counters to prevent infinite recursion. If you’re using recursion in a situation that doesn’t allow a simple test such as the one just described, use a safety counter to prevent infinite recursion. The safety counter has to be a variable that’s not re-created each time you call the routine. Use a class member variable or pass the safety counter as a parameter.",
        page: 396,
    }, {
        text: "Limit recursion to one routine. Cyclic recursion (A calls B calls C calls A) is dangerous because it’s hard to detect. Mentally managing recursion in one routine is tough enough; understanding recursion that spans routines is too much. If you have cyclic recursion, you can usually redesign the routines so that the recursion is restricted to a single routine. If you can’t and you still think that recursion is the best approach, use safety counters as a recursive insurance policy.",
        page: 396,
    }, {
        text: "Don’t use recursion for factorials or Fibonacci numbers. One problem with computer-science textbooks is that they present silly examples of recursion. The typical examples are computing a factorial or computing a Fibonacci sequence. Recursion is a powerful tool, and it’s really dumb to use it in either of those cases. If a programmer who worked for me used recursion to compute a factorial, I’d hire someone else.",
        page: 397,
    }, {
        text: "Move complicated expressions into boolean functions. If a test is repeated often or distracts from the main flow of the program, move the code for the test into a function and test the value of the function",
        page: 434,
    }, {
        text: "Use decision tables to replace complicated conditions. Sometimes you have a complicated test involving several variables. It can be helpful to use a decision table to perform the test rather than using ifs or cases. A decision-table lookup is easier to code initially, having only a couple of lines of code and no tricky control structures. This minimization of complexity minimizes the opportunity for mistakes. If your data changes, you can change a decision table without changing the code; you only need to update the contents of the data structure.",
        page: 435,
    }, {
        text: "Not a few people don’t have not any trouble understanding a nonshort string of nonpositives — that is, most people have trouble understanding a lot of negatives. You can do several things to avoid complicated negative boolean expressions in your programs. In if statements, convert negatives to positives and flip-flop the code in the if and else clauses",
        page: 435,
    }, {
        text: "Apply DeMorgan’s Theorems to simplify boolean tests with negatives. DeMorgan’s Theorems let you exploit the logical relationship between an expression and a version of the expression that means the same thing because it’s doubly negated.",
        page: 436,
    }, {
        text: "Different languages use different kinds of evaluation, and language implementers tend to take liberties with expression evaluation, so check the manual for the specific version of the language you’re using to find out what kind of evaluation your language uses. Better yet, since a reader of your code might not be as sharp as you are, use nested tests to clarify your intentions instead of depending on evaluation order and short-circuit evaluation.",
        page: 440,
    }, {
        text: "Organize numeric tests so that they follow the points on a number line. In general, structure your numeric tests so that you have comparisons like these: MIN_ELEMENTS <= i and i <= MAX_ELEMENTS and i < MIN_ELEMENTS or MAX_ELEMENTS < i. The idea is to order the elements left to right, from smallest to largest. In the first line, MIN_ELEMENTS and MAX_ELEMENTS are the two endpoints, so they go at the ends. The variable i is supposed to be between them, so it goes in the middle. In the second example, you’re testing whether i is outside the range, so i goes on the outside of the test at either end and MIN_ELEMENTS and MAX_ELEMENTS go on the inside.",
        page: 440,
    }, {
        text: "Excessive indentation, or “nesting,” has been pilloried in computing literature for 25 years and is still one of the chief culprits in confusing code. Studies by Noam Chomsky and Gerald Weinberg suggest that few people can understand more than three levels of nested ifs, and many researchers recommend avoiding nesting to more than three or four levels.",
        page: 445,
        reference: "Yourdon 1986a, Myers 1976, Marca 1981, and Ledgard and Tauer 1987a",
    }, {
        text: "Compare numbers to 0. Although it’s appropriate to compare logical expressions implicitly, you should compare numeric expressions explicitly. For numbers, write 'while ( balance != 0 )' rather than 'while ( balance )'",
        page: 441,
    }, {
        text: "Redesign deeply nested code. Some experts argue that case statements virtually always indicate poorly factored code in object-oriented programming and are rarely, if ever, needed. This transformation from case statements that invoke routines to an object factory with polymorphic method calls is one such example.",
        page: 453,
        reference: "Meyer 1997",
    }, {
        text: "Complicated code is a sign that you don’t understand your program well enough to make it simple. Deep nesting is a warning sign that indicates a need to break out a routine or redesign the part of the code that’s complicated. It doesn’t mean you have to modify the routine, but you should have a good reason for not doing so if you don’t.",
        page: 453,
    }, {
        text: "Intuitively, the complexity of a program would seem to largely determine the amount of effort required to understand it. Tom McCabe published an influential paper arguing that a program’s complexity is defined by its control flow (1976). Other researchers have identified factors other than McCabe’s cyclomatic complexity metric (such as the number of variables used in a routine), but they agree that control flow is at least one of the largest contributors to complexity, if not the largest.",
        page: 457,
        reference: "Tom McCabe (1976)",
    }, {
        text: "Computer-science researchers have been aware of the importance of complexity for at least two decades. Many years ago, Edsger Dijkstra cautioned against the hazards of complexity: “The competent programmer is fully aware of the strictly limited size of his own skull; therefore, he approaches the programming task in full humility”. This does not imply that you should increase the capacity of your skull to deal with enormous complexity. It implies that you can never deal with enormous complexity and must take steps to reduce it wherever possible.",
        page: 457,
        reference: "Dijkstra 1972",
    }, {
        text: "One measure of “programming complexity” is the number of mental objects you have to keep in mind simultaneously in order to understand a program. This mental juggling act is one of the most difficult aspects of programming and is the reason programming requires more concentration than other activities. It’s the reason programmers get upset about “quick interruptions”—such interruptions are tantamount to asking a juggler to keep three balls in the air and hold your groceries at the same time.",
        page: 457,
    }, {
        text: "Making boolean expressions simple and readable contributes substantially to the quality of your code.",
        page: 460,
    }, {
        text: "Minimizing complexity is a key to writing high-quality code.",
        page: 460,
    }, {
        text: "Software has both external and internal quality characteristics. External characteristics are characteristics that a user of the software product is aware of, including the following: Correctness - The degree to which a system is free from faults in its specification, design, and implementation; Efficiency - Minimal use of system resources, including memory and execution time; Reliability - The ability of a system to perform its required functions under stated conditions whenever required—having a long mean time between failures; Integrity - The degree to which a system prevents unauthorized or improper access to its programs and its data. The idea of integrity includes restricting unauthorized user accesses as well as ensuring that data is accessed properly— that is, that tables with parallel data are modified in parallel, that date fields contain only valid dates, and so on; Adaptability - The extent to which a system can be used, without modification, in applications or environments other than those for which it was specifically designed; Accuracy - The degree to which a system, as built, is free from error, especially with respect to quantitative outputs. Accuracy differs from correctness; it is a determination of how well a system does the job it’s built for rather than whether it was built correctly; Robustness - The degree to which a system continues to function in the presence of invalid inputs or stressful environmental conditions.",
        page: 465,
    }, {
        text: "Programmers care about the internal characteristics of the software as well as the external ones. The internal quality characteristics include: Maintainability - The ease with which you can modify a software system to change or add capabilities, improve performance, or correct defects; Flexibility - The extent to which you can modify a system for uses or environments other than those for which it was specifically designed; Portability - The ease with which you can modify a system to operate in an environment different from that for which it was specifically designed; Reusability - The extent to which and the ease with which you can use parts of a system in other systems; Readability - The ease with which you can read and understand the source code of a system, especially at the detailed-statement level; Testability - The degree to which you can unit-test and system-test a system; the degree to which you can verify that the system meets its requirements; Understandability - The ease with which you can comprehend a system at both the system-organizational and detailed-statement levels. Understandability has to do with the coherence of the system at a more general level than readability does.",
        page: 464,
    }, {
        text: "Explicit quality-assurance activity. One common problem in assuring quality is that quality is perceived as a secondary goal. Indeed, in some organizations, quick and dirty programming is the rule rather than the exception. Programmers like Global Gary, who litter their code with defects and “complete” their programs quickly, are rewarded more than programmers like High-Quality Henry, who write excellent programs and make sure that they are usable before releasing them. In such organizations, it shouldn’t be surprising that programmers don’t make quality their first priority. The organization must show programmers that quality is a priority. Making the quality-assurance activity explicit makes the priority clear, and programmers will respond accordingly.",
        page: 466,
    }, {
        text: "Unit tests only find 30%-35% of bugs. Beta testing is the highest at 75%. Unit testing is used for designing code, not finding bugs",
        page: 470,
    }, {
        text: "Support pair programming with coding standards. Pair programming will not be effective if the two people in the pair spend their time arguing about coding style.",
        page: 483,
    }, {
        text: "Don’t let pair programming turn into watching. The person without the keyboard should be an active participant in the programming. That person is analyzing the code, thinking ahead to what will be coded next, evaluating the design, and planning how to test the code.",
        page: 483,
    }, {
        text: "Don’t force pair programming of the easy stuff. One group that used pair programming for the most complicated code found it more expedient to do detailed design at the whiteboard for 15 minutes and then to program solo. Most organizations that have tried pair programming eventually settle into using pairs for part of their work but not all of it.",
        page: 483,
        reference: "Manzo 2002, Boehm and Turner 2004",
    }, {
        text: "Rotate pairs and work assignments regularly. In pair programming, as with other collaborative development practices, benefit arises from different programmers learning different parts of the system. Rotate pair assignments regularly to encourage cross pollination—some experts recommend changing pairs as often as daily.",
        page: 483,
        reference: "Reifer 2002",
    }, {
        text: "Developers sometimes wonder whether it’s better to write test cases after the code has been written or beforehand. It is suggested that writing test cases first will minimize the amount of time between when a defect is inserted into the code and when the defect is detected and removed.",
        page: 503,
        reference: "Beck 2003",
    }, {
        text: "Testing is an important part of any software-quality program, and in many cases it’s the only part. This is unfortunate, because collaborative development practices in their various forms have been shown to find a higher percentage of errors than testing does, and they cost less than half as much per error found as testing does.",
        page: 500,
        reference: "Card 1987, Russell 1991, Kaplan 1995",
    }, {
        text: "Depending on the project’s size and complexity, developer testing should probably take 8 to 25 percent of the total project time.",
        page: 502,
    }, {
        text: "Writing test cases before writing the code doesn’t take any more effort than writing test cases after the code; it simply resequences the test-case-writing activity.",
        page: 503,
    }, {
        text: "Writing test cases first forces you to think at least a little bit about the requirements and design before writing code, which tends to produce better code.",
        page: 504,
    }, {
        text: "Writing test cases first exposes requirements problems sooner, before the code is written, because it’s hard to write a test case for a poor requirement.",
        page: 504,
    }, {
        text: "Developer testing tends to have an optimistic view of test coverage. Average programmers believe they are achieving 95 percent test coverage, but they’re typically achieving more like 80 percent test coverage in the best case, 30 percent in the worst case, and more like 50-60 percent in the average case.",
        page: 504,
        reference: "Boris Beizer in Johnson 1994",
    }, {
        text: "The scope of most errors is fairly limited. One study found that 85 percent of errors could be corrected without modifying more than one routine.",
        page: 519,
        reference: "Endres 1975",
    }, {
        text: "Clerical errors (typos) are a surprisingly common source of problems. One study found that 36% of all construction errors were clerical mistakes.",
        page: 519,
        reference: "Weiss 1975",
    }, {
        text: "Misunderstanding the design is a recurring theme in studies of programmer errors. Beizer’s compilation study, for what it’s worth, found that 16% of the errors grew out of misinterpretations of the design. Another study found that 19% of the errors resulted from misunderstood design. It’s worthwhile to take the time you need to understand the design thoroughly.",
        page: 519,
        reference: "Beizer 1990, Weiss 1975",
    }, {
        text: "The General Principle of Software Quality is that improving quality reduces development costs.",
        page: 474,
    }, {
        text: "The best way to improve productivity and quality is to reduce the time spent reworking code, whether the rework arises from changes in requirements, changes in design, or debugging.",
        page: 474,
    }, {
        text: "General Principle of Software Quality is also that improving quality improves the development schedule and thus reduces development costs",
        page: 518,
    }, {
        text: "Hurrying to solve a problem is one of the most time-ineffective things you can do. It leads to rushed judgments, incomplete defect diagnosis, and incomplete corrections. Wishful thinking can lead you to see solutions where there are none.",
        page: 551,
    }, {
        text: "Copy and paste is a design error.",
        page: 565,
        reference: "David Parnas, McConnell 1998b",
    }, {
        text: "Duplicated code almost always represents a failure to fully factor the design in the first place. Duplicate code sets you up to make parallel modifications—whenever you make changes in one place, you have to make parallel changes in another place. It also violates what Andrew Hunt and Dave Thomas refer to as the “DRY principle”",
        page: 565,
        reference: "Andrew Hunt and Dave Thomas - Don’t Repeat Yourself (2000)",
    }, {
        text: "If you find a class that takes ownership for a hodgepodge of unrelated responsibilities (poor cohesion), that class should be broken up into multiple classes, each of which has responsibility for a cohesive set of responsibilities.",
        page: 566,
    }, {
        text: "Well-factored programs tend to have many small, well-defined routines that don’t need large parameter lists. A long parameter list is a warning that the abstraction of the routine interface has not been well thought out.",
        page: 566,
    }, {
        text: "Sometimes a class has two or more distinct responsibilities. When that happens you find yourself changing either one part of the class or another part of the class—but few changes affect both parts of the class. That’s a sign that the class should be cleaved into multiple classes along the lines of the separate responsibilities.",
        page: 566,
    }, {
        text: "When you find yourself routinely making changes to the same set of classes, that suggests the code in those classes could be rearranged so that changes affect only one class. In my experience, this is a hard ideal to accomplish, but it’s nonetheless a good goal.",
        page: 566,
    }, {
        text: "Although case statements are not inherently bad, if you find yourself making parallel modifications to similar case statements in multiple parts of the program, you should ask whether inheritance might be a better approach.",
        page: 566,
    }, {
        text: "If you find yourself repeatedly manipulating the same set of data items, you should ask whether those manipulations should be combined into a class of their own.",
        page: 566,
    }, {
        text: "Primitive data types can be used to represent an infinite number of real-world entities. If your program uses a primitive data type like an integer to represent a common entity such as money, consider creating a simple Money class so that the compiler can perform type checking on Money variables, so that you can add safety checks on the values assigned to money, and so on. If both Money and Temperature are integers, the compiler won’t warn you about erroneous assignments like bankBalance = recordLowTemperature.",
        page: 567,
    }, {
        text: "Sometimes the result of refactoring code is that an old class doesn’t have much to do. If a class doesn’t seem to be carrying its weight, ask if you should assign all of that class’s responsibilities to other classes and eliminate the class altogether.",
        page: 567,
    }, {
        text: "Finding yourself passing data to one routine just so that routine can pass it to another routine is called “tramp data”. This might be OK, but ask yourself whether passing the specific data in question is consistent with the abstraction presented by each of the routine interfaces. If the abstraction for each routine is OK, passing the data is OK. If not, find some way to make each routine’s interface more consistent.",
        page: 567,
        reference: "Page-Jones 1988",
    }, {
        text: "If you find that most of the code in a class is just passing off calls to routines in other classes, consider whether you should eliminate the middleman and call those other classes directly.",
        page: 567,
    }, {
        text: "Encapsulation (information hiding) is probably the strongest tool you have to make your program intellectually manageable and to minimize ripple effects of code changes. Anytime you see one class that knows more about another class than it should—including derived classes knowing too much about their parents—err on the side of stronger encapsulation rather than weaker.",
        page: 567,
    }, {
        text: "A subclass uses only a small percentage of its parents’ routines indicates that that subclass has been created because a parent class happened to contain the routines it needed, not because the subclass is logically a descendent of the superclass. Consider achieving better encapsulation by switching the subclass’s relationship to its superclass from an is-a relationship to a has-a relationship; convert the superclass to member data of the former subclass, and expose only the routines in the former subclass that are really needed.",
        page: 567,
    }, {
        text: "Comments have an important role to play, but they should not be used as a crutch to explain bad code. The age-old wisdom is dead-on: “Don’t document bad code—rewrite it”.",
        page: 568,
        reference: "Kernighan and Plauger 1978",
    }, {
        text: "A routine uses setup code before a routine call or takedown code after a routine call is a ref flag. This is semantic coupling.",
        page: 568,
    }, {
        text: "A routine uses more features of another class than of its own class suggests that the routine should be moved into the other class and then invoked by its old class.",
        page: 565,
    }, {
        text: "Programmers are notoriously bad at guessing what functionality might be needed someday. “Designing ahead” is subject to numerous predictable problems such as: guessing wrong, not able to anticipate all the intricate features of the future requirement and creates additional complexity, which means more testing and defect correction etc.",
        page: 569,
    }, {
        text: "Experts agree that the best way to prepare for future requirements is not to write speculative code; it’s to make the currently required code as clear and straightforward as possible so that future programmers will know what it does and does not do and will make their changes accordingly.",
        page: 570,
        reference: "Fowler 1999, Beck 2000",
    }, {
        text: "Reasons to refactor: Code is duplicated, a routine is too long, a loop is too long or too deeply nested, a class has poor cohesion, a class interface does not provide a consistent level of abstraction, a parameter list has too many parameters, changes within a class tend to be compartmentalized, changes require parallel modifications to multiple classes, inheritance hierarchies have to be modified in parallel, case statements have to be modified in parallel, related data items that are used together are not organized into classes, a routine uses more features of another class than of its own class, a primitive data type is overloaded, a class doesn’t do very much, a chain of routines passes tramp data, a middleman object isn’t doing anything, one class is overly intimate with another, a routine has a poor name, data members are public, a subclass uses only a small percentage of its parents’ routines, comments are used to explain difficult code, global variables are used, a routine uses setup code before a routine call or takedown code after a routine call, a program contains code that seems like it might be needed someday.",
        page: 570,
    }, {
        text: "If you’re using a numeric or string literal like 3.14 (Magic Number), replace that literal with a named constant like PI.",
        page: 571,
    }, {
        text: "If a variable is used for more than one purpose—common culprits are i, j, temp, and x—create separate variables for each usage, each of which has a more specific name.",
        page: 571,
    }, {
        text: "If a data primitive needs additional behavior (including stricter type checking) or additional data, convert the data to an object and add the behavior you need. This can apply to simple numeric types like Money and Temperature. It can also apply to enumerated types like Color, Shape, Country, or OutputType.",
        page: 572,
    }, {
        text: "Simplify a boolean expression by introducing well named intermediate variables that help document the meaning of the expression.",
        page: 572,
    }, {
        text: "Move a complex boolean expression into a well-named boolean function. If the expression is complicated enough, this refactoring can improve readability. If the expression is used more than once, it eliminates the need for parallel modifications and reduces the chance of error in using the expression.",
        page: 572,
    }, {
        text: "Return as soon as you know the answer instead of assigning a return value within nested if-then-else statements. Code is often easiest to read and least error-prone if you exit a routine as soon as you know the return value. The alternative of setting a return value and then unwinding your way through a lot of logic can be harder to follow.",
        page: 573,
    }, {
        text: "Convert a long routine to a class If a routine is too long, sometimes turning it into a class and then further factoring the former routine into multiple routines will improve readability.",
        page: 573,
    }, {
        text: "The Pareto Principle, also known as the 80/20 rule, states that you can get 80 percent of the result with 20 percent of the effort. The principle applies to a lot of areas other than programming, but it definitely applies to program optimization.",
        page: 592,
    }, {
        text: "Barry Boehm reports that 20 percent of a program’s routines consume 80 percent of its execution time. In his classic paper “An Empirical Study of Fortran Programs,” Donald Knuth found that less than four percent of a program usually accounts for more than 50 percent of its run time.",
        page: 592,
        reference: "Barry Boehm (1987b), Donald Knuth (1971)",
    }, {
        text: "Refactor when you add a class. Adding a class often brings issues with existing code to the fore. Use this time as an opportunity to refactor other classes that are closely related to the class you’re adding.",
        page: 582,
    }, {
        text: "Refactor when you fix a defect. Use the understanding you gain from fixing a bug to improve other code that might be prone to similar defects.",
        page: 582,
    }, {
        text: "Refactor when you add a routine. When you add a routine, check whether related routines are well organized. If not, refactor them.",
        page: 582,
    }, {
        text: "In a maintenance environment, improve the parts you touch. Code that is never modified doesn’t need to be refactored. But when you do touch a section of code, be sure you leave it better than you found it.",
        page: 583,
    }, {
        text: "Define an interface between clean code and ugly code, and then move code across the interface. The “real world” is often messier than you’d like. The messiness might come from complicated business rules, hardware interfaces, or software interfaces. A common problem with geriatric systems is poorly written production code that must remain operational at all times.",
        page: 583,
    }, {
        text: "Performance is only loosely related to code speed. To the extent that you work on your code’s speed, you’re not working on other quality characteristics. Be wary of sacrificing other characteristics to make your code faster. Your work on speed might hurt overall performance rather than help it.",
        page: 588,
    }, {
        text: "Reducing the lines of code in a high-level language does not improves the speed or size of the resulting machine. There no predictable relationship exists between the number of lines of code in a high-level language and a program’s ultimate size and speed.",
        page: 593,
    }, {
        text: "You should not optimize as you go along. One theory is that if you strive to write the fastest and smallest possible code as you write each routine, your program will be fast and small. This approach creates a forest-for-the-trees situation in which programmers ignore significant global optimizations because they’re too busy with micro-optimizations. Remember the 80/20 rule. You would be spending 96% of your time optimizing on something which may not need to be optimized.",
        page: 594,
    }, {
        text: "Use a high-quality design. Make the program right. Make it modular and easily modifiable so that it’s easy to work on later. When it’s complete and correct, check the performance. If the program lumbers, make it fast and small. Don’t optimize until you know you need to.",
        page: 596,
    }, {
        text: "You should not optimize as you go along. In the rare case in which developers identify the bottlenecks correctly, they overkill the bottlenecks they’ve identified and allow others to become critical. Again, the ultimate effect is a reduction in performance. Optimizations done after a system is complete can identify each problem area and its relative importance so that optimization time is allocated effectively.",
        page: 594,
    }, {
        text: "Focusing on optimization during initial development detracts from achieving other program objectives. Developers immerse themselves in algorithm analysis and arcane debates that in the end don’t contribute much value to the user. Concerns such as correctness, information hiding, and readability become secondary goals, even though performance is easier to improve later than these other concerns are. Post hoc performance work typically affects less than five percent of a program’s code. Would you rather go back and do performance work on five percent of the code or readability work on 100 percent?",
        page: 595,
    }, {
        text: "In short, premature optimization’s primary drawback is its lack of perspective. Its victims include final code speed, performance attributes that are more important than code speed, program quality, and ultimately the software’s users. If the development time saved by implementing the simplest program is devoted to optimizing the running program, the result will always be a program that runs faster than one developed with indiscriminate optimization efforts.",
        page: 595,
        reference: "Stevens 1981",
    }, {
        text: "One of the most significant sources of inefficiency is unnecessary input/output (I/O). If you have a choice of working with a file in memory vs. on disk, in a database, or across a network, use an in-memory data structure unless space is critical.",
        page: 598,
    }, {
        text: "Sources of inefficiency include I/O, paging, system calls, interpreted languages and errors (leaving debugging code turned on, forgetting to de-allocate memory, improperly designing database tables, polling nonexistent devices until they time out, and so on).",
        page: 598,
    }, {
        text: "The code-tuning changes described in this chapter might seem cosmetically similar to refactorings, but refactorings are changes that improve a program’s internal structure. The changes in this chapter might better be called “anti-refactorings”. Far from “improving the internal structure,” these changes degrade the internal structure in exchange for gains in performance.",
        page: 609,
        reference: "Fowler 1999",
    }, {
        text: "Case statements are faster than if statements in C#. If statements are faster than case statements in Java",
        page: 614,
    }, {
        text: "Use look-up tables instead of long if-else statement chains for static data. It is a 33%-50% boost in performance. Although the definition of the table is hard to read, if it’s well documented it won’t be any harder to read than the code for the complicated chain of logic was. If the definition changes, the table will be much easier to maintain than the earlier logic would have been.",
        page: 615,
    }, {
        text: "If a program uses lazy evaluation, it avoids doing any work until the work is needed. Lazy evaluation is similar to just-in-time strategies that do the work closest to when it’s needed. Suppose, for example, that your program contains a table of 5000 values, generates the whole table at startup time, and then uses it as the program executes. If the program uses only a small percentage of the entries in the table, it might make more sense to compute them as they’re needed rather than all at once. Once an entry is computed, it can still be stored for future reference (otherwise known as “cached”).",
        page: 616,
    }, {
        text: "Jamming, or “fusion,” is the result of combining two loops that operate on the same set of elements. The gain lies in cutting the loop overhead from two loops to one. When you jam loops, you find code in two loops that you can combine into one. Usually, that means the loop counters have to be the same. Performance gains up to 38%.",
        page: 618,
    }, {
        text: "The goal of loop unrolling is to reduce the amount of loop housekeeping. Unrolling means turning the loop into individual repeated lines of code. Although completely unrolling a loop is a fast solution and works well when you’re dealing with a small number of elements, it’s not practical when you have a large number of elements or when you don’t know in advance how many elements you’ll have. Performance gains of up to 43%.",
        page: 618,
    }, {
        text: "Miminize the work inside loops. One key to writing effective loops is to minimize the work done inside a loop. If you can evaluate a statement or part of a statement outside a loop so that only the result is used inside the loop, do so. It’s good programming practice, and in some cases it improves readability.",
        page: 619,
    }, {
        text: "Use Sentinel Values. When you have a loop with a compound test, you can often save time by simplifying the test. If the loop is a search loop, one way to simplify the test is to use a sentinel value, a value that you put just past the end of the search range and that’s guaranteed to terminate the search.",
        page: 621,
    }, {
        text: "Put the busiest loop on the inside. When you have nested loops, think about which loop you want on the outside and which you want on the inside. The key to improving the loop is that the outer loop executes much more often than the inner loop. Each time the loop executes, it has to initialize the loop index, increment it on each pass through the loop, and check it after each pass. Performance gains of up to 34%.",
        page: 623,
    }, {
        text: "Use Strength Reduction to code tune. Reducing strength means replacing an expensive operation such as multiplication with a cheaper operation such as addition. Sometimes you’ll have an expression inside a loop that depends on multiplying the loop index by a factor. Addition is usually faster than multiplication, and if you can compute the same number by adding the amount on each iteration of the loop rather than by multiplying, the code will typically run faster.",
        page: 623,
    }, {
        text: "Integer addition and multiplication tend to be faster than floating point. Changing a loop index from a floating point to an integer, for example, can save time.",
        page: 625,
    }, {
        text: "Conventional wisdom maintains that multiple dimensions on arrays are expensive. If you can structure your data so that it’s in a one-dimensional array rather than a twodimensional or three-dimensional array, you might be able to save some time. ",
        page: 625,
    }, {
        text: "In addition to minimizing accesses to doubly or triply dimensioned arrays, it’s often advantageous to minimize array accesses, period. A loop that repeatedly uses one element of an array is a good candidate for the application of this technique.",
        page: 626,
    }, {
        text: "Use Supplementary Indexes to code-tune. Using a supplementary index means adding related data that makes accessing a data type more efficient. You can add the related data to the main data type, or you can store it in a parallel structure.",
        page: 627,
    }, {
        text: "Use Caching to save a few values in such a way that you can retrieve the most commonly used values more easily than the less commonly used values. If a program randomly reads records from a disk, for example, a routine might use a cache to save the records read most frequently. When the routine receives a request for a record, it checks the cache to see whether it has the record. If it does, the record is returned directly from memory rather than from disk. Use this as a means of code tuning.",
        page: 628,
    }, {
        text: "You can use algebraic identities to replace costly operations with cheaper ones. For example, the following expressions are logically equivalent: 'not a and not b' and 'not (a or b)'. If you choose the second expression instead of the first, you can save a not operation. Use this as a means of code tuning.",
        page: 630,
    }, {
        text: "If you’re using a named constant or a magic number in a routine call and it’s the only argument, that’s a clue that you could precompute the number, put it into a constant, and avoid the routine call. The same principle applies to multiplications, divisions, additions, and other operations. Use this as a means of code tuning.",
        page: 632,
    }, {
        text: "System routines are expensive and provide accuracy that’s often wasted. Unity does something similar with their own Math routines.",
        page: 633,
    }, {
        text: "A common low-level design decision is the choice of whether to compute results on the fly or compute them once, save them, and look them up as needed. If the results are used many times, it’s often cheaper to compute them once and look them up the rest of the time. In a space-wars video game, for example, the programmers initially computed gravity coefficients for different distances from the sun. The computation for the gravity coefficients was expensive and affected performance. The program recognized relatively few distinct distances from the sun, however, so the programmers were able to precompute the gravity coefficients and store them in a 10-element array. The array lookup was much faster than the expensive computation. Use this as a means of code tuning.",
        page: 635,
    }, {
        text: "Eliminate Common Subexpressions. If you find an expression that’s repeated several times, assign it to a variable and refer to the variable rather than recomputing the expression in several places. The loan-calculation example has a common subexpression that you could eliminate. Use this as a means of code tuning.",
        page: 638,
    }, {
        text: "One long-standing piece of conventional wisdom that shouldn’t be left unmentioned is the advice that when you run into a performance bottleneck, you should recode in a low-level language. If you’re coding in C++, the low-level language might be assembler. If you’re coding in Python, the low-level language might be C. Recoding in a lowlevel language tends to improve both speed and code size.",
        page: 640,
    }, {
        text: "Code tuning invariably involves tradeoffs among complexity, readability, simplicity, and maintainability on the one hand and a desire to improve performance on the other. It introduces a high degree of maintenance overhead because of all the reprofiling that’s required.",
        page: 644,
    }, {
        text: "Computers have become so powerful that for many common kinds of programs, the level of performance optimization discussed in this chapter has become irrelevant. In other ways, performance issues have hardly changed at all. People writing desktop applications and websites may not need this information, but people writing software for embedded systems, real-time systems, and other systems with strict speed or space restrictions can still benefit from it.",
        page: 643,
    }, {
        text: "If an optimization isn’t important enough to haul out the profiling machinery, it isn’t important enough to degrade readability, maintainability, and other code characteristics. The impact of unmeasured code tuning on performance is speculative at best, whereas the impact on readability is as certain as it is detrimental.",
        page: 644,
    }, {
        text: "As the kinds of defects change with size, so do the numbers of defects. You would naturally expect a project that’s twice as large as another to have twice as many errors. But the density of defects—the number of defects per 1000 lines of code—increases. The product that’s twice as large is likely to have more than twice as many errors.",
        page: 652,
    }, {
        text: "Productivity has a lot in common with software quality when it comes to project size. At small sizes (2000 lines of code or smaller), the single biggest influence on productivity is the skill of the individual programmer. As project size increases, team size and organization become greater influences on productivity.",
        page: 653,
        reference: "Jones 1998",
    }, {
        text: "If you are working on a one-person project, the biggest influence on the project’s success or failure is you. If you’re working on a 25-person project, it’s conceivable that you’re still the biggest influence, but it’s more likely that no one person will wear the medal for that distinction; your organization will be a stronger influence on the project’s success or failure.",
        page: 654,
    }, {
        text: "On a small project, construction is the most prominent activity by far, taking up as much as 65 percent of the total development time. On a medium-size project, construction is still the dominant activity but its share of the total effort falls to about 50 percent. On very large projects, architecture, integration, and system testing take up more time and construction becomes less dominant. In short, as project size increases, construction becomes a smaller part of the total effort.",
        page: 654,
    }, {
        text: "The more communication paths you have between people, the more time you spend communicating and the more opportunities are created for communication mistakes. Larger-size projects demand organizational techniques that streamline communication or limit it in a sensible way.",
        page: 650,
    }, {
        text: "If someone on a project is going to define standards, have a respected architect define the standards rather than the manager. Software projects operate as much on an “expertise hierarchy” as on an “authority hierarchy.”",
        page: 662,
    }, {
        text: "Techniques for Encouraging Good Coding: Assign two people to every part of the project; Review every line of code; Require code sign-offs; Route good code examples for review; Emphasize that code listings are public assets; Reward good code; Have one easy standard to determine whats good.",
        page: 663,
    }, {
        text: "Emphasize that code listings are public assets. Programmers sometimes feel that the code they’ve written is “their code,” as if it were private property. Although it is the result of their work, code is part of the project and should be freely available to anyone else on the project who needs it. It should be seen by others during reviews and maintenance, even if at no other time.",
        page: 663,
    }, {
        text: "If you’re managing a programming project and you have a programming background, an easy and effective technique for eliciting good work is to say “I must be able to read and understand any code written for the project.” That the manager isn’t the hottest technical hotshot can be an advantage in that it might discourage “clever” or tricky code.",
        page: 664,
    }, {
        text: "A software project is dynamic. Code changes, requirements change, design changes, which in turn changes code.",
        page: 666,
    }, {
        text: "During development, you’re bound to be bristling with ideas about how to improve the system. If you implement each change as it occurs to you, you’ll soon find yourself walking on a software treadmill—for all that the system will be changing, it won’t be moving closer to completion.",
        page: 666,
    }, {
        text: "If you don’t control changes to requirements, you can end up writing code for parts of the system that are eventually eliminated. You can write code that’s incompatible with new parts of the system. You might not detect many of the incompatibilities until. integration time, which will become finger-pointing time because nobody will really know what’s going on.",
        page: 664,
    }, {
        text: "Handle change requests in groups It’s tempting to implement easy changes as ideas arise. The problem with handling changes in this way is that good changes can get lost. If you think of a simple change 25 percent of the way through the project and you’re on schedule, you’ll make the change. If you think of another simple change 50 percent of the way through the project and you’re already behind, you won’t. When you start to run out of time at the end of the project, it won’t matter that the second change is 10 times as good as the first—you won’t be in a position to make any nonessential changes. Some of the best changes can slip through the cracks merely because you thought of them later rather than sooner. A solution to this problem is to write down all ideas and suggestions, no matter how easy they would be to implement, and save them until you have time to work on them. Then, viewing them as a group, choose the ones that will be the most beneficial.",
        page: 666,
    }, {
        text: "Estimate the cost of each change Whenever your customer, your boss, or you are tempted to change the system, estimate the time it would take to make the change, including review of the code for the change and retesting the whole system. Include in your estimate time for dealing with the change’s ripple effect through requirements to design to code to test to changes in the user documentation. Let all the interested parties know that software is intricately interwoven and that time estimation is necessary even if the change appears small at first glance. Regardless of how optimistic you feel when the change is first suggested, refrain from giving an off-the-cuff estimate. Such estimates are often mistaken by a factor of 2 or more.",
        page: 666,
    }, {
        text: "Be wary of high change volumes While some degree of change is inevitable, a high volume of change requests is a key warning sign that requirements, architecture, or top-level designs weren’t done well enough to support effective construction. Backing up to work on requirements or architecture might seem expensive, but it won’t be nearly as expensive as constructing the software more than once or throwing away code for features that you really didn’t need.",
        page: 666,
    }, {
        text: "Establish a change-control board or its equivalent in a way that makes sense for your project The job of a change-control board is to separate the wheat from the chaff in change requests. Anyone who wants to propose a change submits the change request to the change-control board. The term “change request” refers to any request that would change the software: an idea for a new feature, a change to an existing feature, an “error report” that might or might not be reporting a real error, and so on. The board meets periodically to review proposed changes. It approves, disapproves, or defers each change. Change-control boards are considered a best practice for prioritizing and controlling requirements changes; however, they are still fairly uncommon in commercial settings.",
        page: 667,
        reference: "Jones 1998, Jones 2000",
    }, {
        text: "According to Fred Brooks’s law, adding people to a late software project makes it later. It’s like adding gas to a fire. Brooks’s explanation is convincing: new people need time to familiarize themselves with a project before they can become productive. Their training takes up the time of the people who have already been trained. And merely increasing the number of people increases the complexity and amount of project communication. Brooks points out that the fact that one woman can have a baby in nine months does not imply that nine women can have a baby in one month.",
        page: 676,
        reference: "Brooks 1995",
    }, {
        text: "The simple statement that adding programmers to a late project makes it later, however, masks the fact that under some circumstances it’s possible to add people to a late project and speed it up. As Brooks points out in the analysis of his law, adding people to software projects in which the tasks can’t be divided and performed independently doesn’t help. But if a project’s tasks are partitionable, you can divide them further and assign them to different people, even to people who are added late in the project. Other researchers have formally identified circumstances under which you can add people to a late project without making it later.",
        page: 676,
        reference: "Abdel-Hamid 1989, McConnell 1999",
    }, {
        text: "On average, programmers only spend 13% of time writing code. 14% of the time is spent reading code, the rest is on meetings, business, person, training, and even walking around.",
        page: 681,
    }, {
        text: "Managers of programming projects aren’t always aware that certain programming issues are matters of religion. If you’re a manager and you try to require compliance with certain programming practices, you’re inviting your programmers’ ire. Here’s a list of religious issues: Programming language, Indentation style, Placing of braces, Choice of IDE, Commenting style, Efficiency vs. readability tradeoffs, Choice of methodology—for example, Scrum vs. Extreme Programming vs. evolutionary delivery, Programming utilities, Naming conventions, Use of gotos, Use of global variables, Measurements, especially productivity measures such as lines of code per day",
        page: 681,
    }, {
        text: "Physical environment makes a big difference in productivity. DeMarco and Lister asked 166 programmers from 35 organizations about the quality of their physical environments. Most employees rated their workplaces as not acceptable. In a subsequent programming competition, the programmers who performed in the top 25 percent had bigger, quieter, more private offices and fewer interruptions from people and phone calls.",
        page: 684,
    }, {
        text: "In software development, nontechnical managers are common, as are managers who have technical experience but who are 10 years behind the times. Technically competent, technically current managers are rare. If you work for one, do whatever you can to keep your job. It’s an unusual treat.",
        page: 686,
    }, {
        text: "If your manager is more typical, you’re faced with the unenviable task of managing your manager. “Managing your manager” means that you need to tell your manager what to do rather than the other way around. The trick is to do it in a way that allows your manager to continue believing that you are the one being managed. Here are some approaches to dealing with your manager: Plant ideas for what you want to do, and then wait for your manager to have a brainstorm (your idea) about doing what you want to do; Educate your manager about the right way to do things. This is an ongoing job because managers are often promoted, transferred, or fired; Focus on your manager’s interests, doing what he or she really wants you to do, and don’t distract your manager with unnecessary implementation details. (Think of it as “encapsulation” of your job.); Refuse to do what your manager tells you, and insist on doing your job the right way; Find another job.",
        page: 686,
    }, {
        text: "Create a penalty for breaking the build Most groups that use daily builds create a penalty for breaking the build. Make it clear from the beginning that keeping the build healthy is one of the project’s top priorities. A broken build should be the exception, not the rule. Insist that developers who have broken the build stop all other work until they’ve fixed it. If the build is broken too often, it’s hard to take seriously the job of not breaking the build.",
        page: 705,
    }, {
        text: "A common and somewhat outdated rule is to limit statement line length to 80 characters. It is because lines longer than 80 characters are hard to read, the 80-character limitation discourages deep nesting and lines longer than 80 characters often won’t fit on 8.5” x 11” paper, especially when code is printed “2 up” (2 pages of code to each physical printout page). With larger screens, narrow typefaces, and landscape mode, the 80-character limit appears increasingly arbitrary. A single 90-character-long line is usually more readable than one that has been broken in two just to avoid spilling over the 80th column. With modern technology, it’s probably all right to exceed 80 columns occasionally.",
        page: 753,
    }, {
        text: "Make the incompleteness of a statement obvi . Sometimes a statement must be broken across lines, either because it’s longer than programming standards allow or because it’s too absurdly long to put on one line. Make it obvious that the part of the statement on the first line is only part of a statement. The easiest way to do that is to break up the statement so that the part on the first line is blatantly incorrect syntactically if it stands alone.",
        page: 754,
    }, {
        text: "Do not align right sides of assignment statements. while adding indentations for alignment might look attractive, it becomes a headache to maintain the alignment of the equals signs as variable names change and code is run through tools that substitute tabs for spaces and spaces for tabs. It is also hard to maintain as lines are moved among different parts of the program that have different levels of indentation. For consistency with the other indentation guidelines as well as maintainability, treat groups of statements containing assignment operations just as you would treat other statements",
        page: 758,
    }, {
        text: "Use blank lines to separate parts of a routine. Use blank lines between the routine header, its data and named-constant declarations (if any), and its body.",
        page: 766,
    }, {
        text: "In laying out class interfaces, the convention is to present the class members in the following order: 1. Header comment that describes the class and provides any notes about the overall usage of the class; 2. Constructors and destructors; 3. Public routines; 4. Protected routines; 5. Private routines and member data.",
        page: 768,
    }, {
        text: "Class implementations are generally laid out in this order: 1. Header comment that describes the contents of the file the class is in; 2. Class data; 3. Public routines; 4. Protected routines; 5. Private routines.",
        page: 768,
    }, {
        text: "Structuring code is important for its own sake. The specific convention you follow is less important than the fact that you follow some convention consistently. A layout convention that’s followed inconsistently can actually hurt readability",
        page: 775,
    }, {
        text: "Self-documenting code carries the burden of documentation, comments should be the icing on top.",
        page: 779,
    }, {
        text: "Name the class well, and name it such that it describes its central purpose",
        page: 780,
    }, {
        text: "The class interface must have a consistent abstraction",
        page: 780,
    }, {
        text: "The class interface should make it obvious on how to use the class",
        page: 780,
    }, {
        text: "Each routine should be named exactly what it does and does a well defined task",
        page: 780,
    }, {
        text: "Routine interfaces must be clear",
        page: 780,
    }, {
        text: "Named constants shouyld be used instead of magic numbers",
        page: 780,
    }, {
        text: "Data types should be simple to minimize complexity",
        page: 780,
    }, {
        text: "Related statements should be grouped together",
        page: 780,
    }, {
        text: "Minimize nesting",
        page: 780,
    }, {
        text: "A loop should do one and only one function",
        page: 780,
    }, {
        text: "Simplify boolean expressions by using additional boolean variables, boolean functions, and decision tables",
        page: 780,
    }, {
        text: "Write straight forward code rather than clever code",
        page: 780,
    }, {
        text: "Hide implementation details as much as possible",
        page: 780,
    }, {
        text: "Capers Jones points out that studies at IBM found that a commenting density of one comment roughly every 10 statements was the density at which clarity seemed to peak. Fewer comments made the code hard to understand. More comments also reduced code understandability.",
        page: 792,
        reference: "Jones 2000",
    }, {
        text: "Avoid self-indulgent comments. Many years ago, I heard the story of a maintenance programmer who was called out of bed to fix a malfunctioning program. The program’s author had left the company and couldn’t be reached. The maintenance programmer hadn’t worked on the program before, and after examining the documentation carefully, he found only one comment: MOV AX, 723h ; R. I. P. L. V. B",
        page: 792,
    }, {
        text: "Focus paragraph comments on the why rather than the how. Comments that explain how something is done usually operate at the programming-language level rather than the problem level. It’s nearly impossible for a comment that focuses on how an operation is done to explain the intent of the operation, and comments that tell how are often redundant. What does the following comment tell you that the code doesn’t?",
        page: 797,
    }, {
        text: "Comments should be unambiguous, readable without the work of figuring out abbreviations. Avoid all but the most common abbreviations in comments. Unless you’re using endline comments, using abbreviations isn’t usually a temptation. If you are and it is, realize that abbreviations are another strike against a technique that struck out several pitches ago",
        page: 799,
    }, {
        text: "Don’t comment tricky code; rewrite it. Here’s a comment from a project I worked on. Commenting tricky code is exactly the wrong approach to take. Comments can’t rescue difficult code. As Kernighan and Plauger emphasize, “Don’t document bad code— rewrite it”.",
        page: 801,
        reference: "Kernighan and Plauge (1978)",
    }, {
        text: "Justify violations of good programming style. If you’ve had to violate good programming style, explain why. That will prevent a well-intentioned programmer from changing the code to a better style, possibly breaking your code. The explanation will make it clear that you knew what you were doing and weren’t just sloppy—give yourself credit where credit is due!",
        page: 801,
    }, {
        text: "Document the source of algorithms that are used. If you’ve used an algorithm from a book or magazine, document the volume and page number you took it from. If you developed the algorithm yourself, indicate where the reader can find the notes you’ve made about it",
        page: 809,
    }, {
        text: "Explanatory comments are typically used to explain complicated, tricky, or sensitive pieces of code. In such situations they are useful, but usually that’s only because the code is confusing. If the code is so complicated that it needs to be explained, it’s nearly always better to improve the code than it is to add comments. Make the code itself clearer, and then use summary or intent comments.",
        page: 786,
    }, {
        text: "Good comments don't repeat the code. It instead should clarify its intent. Comments should explain, at a higher level of abstraction than the code of what you're trying to do.",
        page: 786,
    }, {
        text: "The common argument against commenting as you go along is “When you’re concentrating on the code, you shouldn’t break your concentration to write comments.” Thev appropriate response is that, if you have to concentrate so hard on writing code that commenting interrupts your thinking, you need to design in pseudocode first and then convert the pseudocode to comments. Code that requires that much concentration is a warning sign.",
        page: 791,
    }, {
        text: "If your design is hard to code, simplify the design before you worry about comments or code. If you use pseudocode to clarify your thoughts, coding is straightforward and the comments are automatic.",
        page: 791,
    }, {
        text: "Integrate commenting into your development style. The alternative to integrating commenting into your development style is leaving commenting until the end of the project, and that has too many disadvantages. It becomes a task in its own right, which makes it seem like more work than when it’s done a little bit at a time. Commenting done later takes more time because you have to remember or figure out what the code is doing instead of just writing down what you’re already thinking about. It’s also less accurate because you tend to forget assumptions or subtleties in the design.",
        page: 791,
    }, {
        text: "In good code, the need to comment individual lines of code is rare. Here are two possible reasons a line of code would need a comment: The single line is complicated enough to need an explanation; The single line once had an error, and you want a record of the error.",
        page: 792,
    }, {
        text: "Endline comments have conceptual problems and tend to be used for code that’s too complicated. They are also difficult to format and maintain. Overall, they’re best avoided.",
        page: 795,
    }, {
        text: "Focus your documentation efforts on the code itself. For the record, the code itself is always the first documentation you should check. Code is the first point of documentation.",
        page: 796,
    }, {
        text: "Use comments to prepare the reader for what is to follow. Good comments tell the person reading the code what to expect. A reader should be able to scan only the comments and get a good idea of what the code does and where to look for a specific activity. A corollary to this rule is that a comment should always precede the code it describes. This idea isn’t always taught in programming classes, but it’s a well-established convention in commercial practice.",
        page: 798,
    }, {
        text: "Make every comment count. There’s no virtue in excessive commenting—too many comments obscure the code they’re meant to clarify. Rather than writing more comments, put the extra effort into making the code itself more readable.",
        page: 798,
    }, {
        text: "Document surprises. If you find anything that isn’t obvious from the code itself, put it into a comment. If you have used a tricky technique instead of a straightforward one to improve performance, use comments to point out what the straightforward technique would be and quantify the performance gain achieved by using the tricky technique.",
        page: 798,
    }, {
        text: "Avoid abbreviations. Comments should be unambiguous, readable without the work of figuring out abbreviations. Avoid all but the most common abbreviations in comments. Unless you’re using endline comments, using abbreviations isn’t usually a temptation. If you are and it is, realize that abbreviations are another strike against a technique that struck out several pitches ago.",
        page: 799,
    }, {
        text: "Comment the units of numeric data. If a number represents length, indicate whether the length is expressed in inches, feet, meters, or kilometers. If it’s time, indicate whether it’s expressed in elapsed seconds since 1-1-1980, milliseconds since the start of the program, and so on. If it’s coordinates, indicate whether they represent latitude, longitude, and altitude and whether they’re in radians or degrees; whether they represent an X, Y, Z coordinate system with its origin at the earth’s center; and so on. Don’t assume that the units are obvious. To a new programmer, they won’t be. To someone who’s been working on another part of the system, they won’t be. After the program has been substantially modified, they won’t be.",
        page: 802,
    }, {
        text: "Keep comments close to the code they describe. One reason that the prolog to a routine shouldn’t contain voluminous documentation is that such a practice puts the comments far away from the parts of the routine they describe. During maintenance, comments that are far from the code tend not to be maintained with the code. The comments and the code start to disagree, and suddenly the comments are worthless. Instead, follow the Principle of Proximity and put comments as close as possible to the code they describe. They’re more likely to be maintained, and they’ll continue to be worthwhile.",
        page: 806,
    }, {
        text: "Your employer can’t force you to be a good programmer; a lot of times your employer isn’t even in a position to judge whether you’re good. If you want to be great, you’re responsible for making yourself great. It’s a matter of your personal character.",
        page: 820,
    }, {
        text: "The people who are best at programming are the people who realize how small their brains are. They are humble.",
        page: 821,
        reference: "The Humble Programmer, Edsger Dijkstra (1972)",
    }, {
        text: "The people who are the worst at programming are the people who refuse to accept the fact that their brains aren’t equal to the task. Their egos keep them from being great programmers. The more you learn to compensate for your small brain, the better a programmer you’ll be. The more humble you are, the faster you’ll improve.",
        page: 821,
    }, {
        text: "Once you admit that your brain is too small to understand most programs and you realize that effective programming is a search for ways to offset that fact, you begin a career-long search for ways to compensate.",
        page: 822,
    }, {
        text: "In the development of a superior programmer, curiosity about technical subjects must be a priority. The relevant technical information changes continually. Specific features of the technical environment change every 5 to 10 years. If you aren’t curious enough to keep up with the changes, you might find yourself down at the old-programmers’ home playing cards with T-Bone Rex and the Brontosaurus sisters.",
        page: 822,
    }, {
        text: "If your workload consists entirely of short-term assignments that don’t develop your skills, be dissatisfied. If you’re working in a competitive software market, half of what you now need to know to do your job will be out of date in three years. If you’re not learning, you’re turning into a dinosaur.",
        page: 822,
    }, {
        text: "Part of maturing as a programming professional is developing an uncompromising sense of intellectual honesty. Intellectual honesty commonly manifests itself in several ways: Refusing to pretend you’re an expert when you’re not; Readily admitting your mistakes; Trying to understand a compiler warning rather than suppressing the message; Clearly understanding your program—not compiling it to see if it works; Providing realistic status reports; Providing realistic schedule estimates and holding your ground when management asks you to adjust them",
        page: 826,
    }, {
        text: "Truly excellent programmers learn how to work and play well with others. Writing readable code is part of being a team player. The computer probably reads your program as often as other people do, but it’s a lot better at reading poor code than people are. As a readability guideline, keep the person who has to modify your code in mind. Programming is communicating with another programmer first and communicating with the computer second.",
        page: 828,
    }, {
        text: "If management applies pressure to change your estimate, realize that ultimately the decision whether to do a project rests with management: “Look. This is how much it’s going to cost. I can’t say whether it’s worth this price to the company—that’s your job. But I can tell you how long it takes to develop a piece of software—that’s my job. I can’t ‘negotiate’ how long it will take; that’s like negotiating how many feet are in a mile. You can’t negotiate laws of nature. We can, however, negotiate other aspects of the project that affect the schedule and then reestimate the schedule. We can eliminate features, reduce performance, develop the project in increments, or use fewer people and a longer schedule or more people and a shorter schedule.”",
        page: 828,
    }, {
        text: "“Hustle” or “making an effort” doesn’t have the rosy glow it does in high-school physical education class. Hustle is extra, unnecessary effort. It shows that you’re eager but not that you’re getting your work done. It’s easy to confuse motion with progress, busy-ness with being productive. The most important work in effective programming is thinking, and people tend not to look busy when they’re thinking. If I worked with a programmer who looked busy all the time, I’d assume that he was not a good programmer because he wasn’t using his most valuable tool, his brain",
        page: 830,
    }, {
        text: "Most of the time, persistence in software development is pigheadedness—it has little value. Persistence when you’re stuck on a piece of new code is hardly ever a virtue. Try redesigning the class, try an alternative coding approach, or try coming back to it later. When one approach isn’t working, that’s a good time to try an alternative.",
        page: 831,
        reference: "Pirsig 1974",
    }],
};

export { CodeComplete };
