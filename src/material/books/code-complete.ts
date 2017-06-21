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
        text: "Barricades are a damage-containment strategy. The reason is similar to that for having isolated compartments in the hull of a ship. If the ship runs into an iceberg and popsopen the hull, that compartment is shut off and the rest of the ship isn’t affected. They are also similar to firewalls in a building. A building’s firewalls prevent fire from spreadingfrom one part of a building to another part.",
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
    }],
};

export { CodeComplete };
