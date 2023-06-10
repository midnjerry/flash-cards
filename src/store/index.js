import { createStore } from 'vuex'

export default createStore({
  state: {
    players: [
      'Aaron Callaway',
      'Alex Russell',
      'Casey Hogan',
      'Christopher Ratsabout',
      'Clint Simmons',
      'Hannah Schomaker',
      'James Ximenez',
      'Jansen Adkins',
      'John Burgess',
      'Kai Hall',
      'Keaton Kido',
      'Maher Nassri',
      'Matt Xiao',
      'Michael Tarquini',
      'Patrick Solomon',
      'Shawn Chan',
      'Shawn Ervin',
      'Steven Diamantopoulos',
      'Victoria Cao',
      'Yune Kim',
    ],
    questions: [
      {
        language: 'HTML', category: 'UI', curriculum: 'extra',
        question: 'What is a semantic HTML tag?',
        answer: 'A tag that describes the purposes of its contents. example: <article> is a block of text for an article in a newsletter.'
      },
      {
        language: 'HTML', category: 'UI', curriculum: 'extra',
        question: 'What are the benefits of using semantic tags?',
        answer: 'Better for (SEO) Search Engine Optimization, better code readability, important for accessbility - used by screen readers to help visually impaired audience access content'
      },
      {
        language: 'HTML', category: 'UI', curriculum: 'extra',
        question: 'What is a non-semantic HTML tag?  Give some examples.',
        answer: 'Tags that do not define the content.  Examples: <div> <span>'
      },
      {
        language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
        question: 'What are the data types for JavaScript?',
        answer: 'string, number, boolean, object, bigint, symbol, undefined, null'
      },
      {
        language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
        question: 'Why should you not use var in JavaScript?',
        answer: 'They do not support block-level scope (always a global variable).  It makes scoping confusing and causes a lot of bugs.  You would be able to use the variable before it is declared.'
      },
      {
        language: 'JavaScript', category: 'Loops and Arrays', curriculum: 'module-1-prework',
        question: 'In JavaScript, how do you write a for-loop that iterates i as 0, 1, 2, 3, 4?',
        answer: 'for (let i = 0; i < 5; i++)'    
      },
      {
        language: 'HTML', category: 'UI', curriculum: 'extra',
        question: 'What is an input tag?',
        answer: 'An HTML tag that creates a field for a user to enter information.  It is a building block of a form.'    
      },
      {
        language: 'HTML', category: 'UI', curriculum: 'extra',
        question: 'List 5 types of input tags.',
        answer: 'button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week'    
      },
      {
        language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
        question: 'What is an anonymous function?',
        answer: 'A function without a name.  Typically used to implement a function embedded in other code. ex. (x) => console.log(x)'    
      },
      {
        language: 'CSS', category: 'UI', curriculum: 'extra',
        question: 'In CSS, how do you draw a blue 1-pixel line around an element?',
        answer: 'border: 1px solid blue;'    
      },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'In JavaScript, what is a function?',
          answer: "A separate block of code within a program that your main program will reference and run."
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'What are the benefits of JavaScript functions (or methods in general)?',
          answer: 'Functions are useful because they’re independently verifiable, promote reuse to reduce the complexity of a program, and turn a program into more bite-sized chunks so it’s more manageable to write.'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'What is variable scoping?',
          answer: 'Scope determines where in a program you can access a variable.  When you declare a variable inside a block of code, you can only access that variable within that block of code (or additional blocks of code nested within that block)'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'In JavaScript, what is the difference between `let` and `const`?',
          answer: '`let` declares a variable that can be reassigned.  `const` declares a variable that cannot be reassigned'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'What is the naming convention for a local variable in JavaScript?',
          answer: 'They are written in camelCase.'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'What is the naming convention for a function in JavaScript?',
          answer: 'They are written in camelCase.'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'What is the naming convention for a global variable in JavaScript?',
          answer: 'Global variables are written in UPPERCASE.'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'What is the naming convention for a constant in JavaScript?',
          answer: 'Constants are written in UPPER_SNAKE_CASE.'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'In JavaScript, what is NaN?',
          answer: 'A value that stands for Not a Number.  This value occurs when a program does an illegal mathematical operation or when a numerical expression cannot simplify to a numerical value.'
        },
        {
          language: 'JavaScript', category: 'Variables and Data Types', curriculum: 'module-1-prework',
          question: 'In JavaScript, what is the difference between `null` and `undefined`?',
          answer: '`undefined` represents an empty value and is the default value for a non-initialized variable.  `null` represents an empty value, but must be explicitly assigned to a variable.'
        },
        {
          language: 'Java', category: 'Overview', curriculum: 'module-1-week-1',
          question: 'What does JVM stand for?',
          answer: 'JVM stands for Java Virtual Machine.  It is a program you must download to execute Java bytecode.'
        },
        {
          language: 'Java', category: 'Overview', curriculum: 'module-1-week-1',
          question: 'Why was Java written using the Java Virtual Machine?',
          answer: 'The Java Virtual Machine was written for cross-platform compatibility.  Instead of compiling Java code into processor-specific assembly code, Java code is compiled into Java bytecode.  The JVM was written so that Java bytecode would execute the same on any hardware platform (mobile phones, linux, mac, PC, etc.)'
        },
        {
          language: 'Java', category: 'Overview', curriculum: 'module-1-week-1',
          question: 'What does JRE stand for?',
          answer: 'JRE stands for Java Runtime Environment.  It is what you download to run Java programs.  It is an executable that can runs the JVM.'
        },
        {
          language: 'Java', category: 'Overview', curriculum: 'module-1-week-1',
          question: 'What does JDK stand for?',
          answer: 'JDK stands for Java Development Kit.  Is is the Java libraries and JRE that allows you to develop and execute Java programs.'
        },                      
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is a variable?',
          answer: 'A variable is a storage location paired with an associated symbolic name which contains some value of a specified data type'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is a comment?',
          answer: 'Lines of text that programmers embed in code as documentation.  The compiler ignores comments'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What are the 2 ways to write a comment?',
          answer: 'prepend with: // or surround with: /*  */'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What are the 8 primitive data types supported by the Java language?',
          answer: 'byte, short, int, long, float, double, boolean, char'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'Why are float and double data types considered imprecise?',
          answer: 'There is only a limited number of bits to represent the base of a number in scientific notation.  At a certain point digits are truncated.'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'Define "declaration of a variable?"',
          answer: 'Declaring a variable is when you specify the name and datatype for a new variable to be used in a program. i.e. Defining a new variable so it can be used by a program.'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'Define "declaration of a variable?"',
          answer: 'Declaring a variable is when you specify the name and datatype for a new variable to be used in a program. i.e. Defining a new variable so it can be used by a program.'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'Once a variable is declared in a given scope, can you declare it again?',
          answer: 'No'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is the naming convention of a variable?',
          answer: 'Use camel-case (first word lowercase, and subsequent words have the first letter capitalized), ex. int numberOfStudents;'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is the naming convention for boolean variables?',
          answer: 'Use names that begin with "is", "has", "was".  Avoid using a double negative.  Ex. boolean isHappy = true;'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What does "initialize a variable" mean?',
          answer: 'Assigning a value to a variable for the first time.'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What does "assign a value to variable" mean?',
          answer: 'Setting the value for a variable ex. dog = 4;'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is a constant?',
          answer: 'A constant is like a variable but its value cannot be changed'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'In Java what is the typical naming convention for a constant?',
          answer: 'All capital letters with spaces represented by an underscore'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'In Java, how do you declare a constant',
          answer: 'Typically with a "final" keyword to make it read-only and with a "static" keyword so it does not require instantiation.'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What does the word "immutable" mean?',
          answer: 'It cannot be changed'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is a literal?',
          answer: 'A raw value such as false, 4, "hello world", 6.8'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is an expression?',
          answer: 'An expression is a combination of values, variables, and operators that are evaluated and produce a single result, which can then be used in a statement'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is "type casting"?',
          answer: 'Converting a value from one data type to another data type'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'What is an example of widening type casting?',
          answer: 'Converting a value from a smaller data type to a larger one, such as "short" to "int"'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'Is there risk in data loss with widening type casting?  Explain.',
          answer: 'No.  Widening to a larger data type is safe when all values for the smaller data type are a subset of the larger data type values'
        },
        {
          language: 'Java', category: 'Variables and Data Types', curriculum: 'module-1-week-1',
          question: 'Is there risk in data loss with narrowing type casting?  Explain.',
          answer: 'Yes.  Since the smaller data type uses less bits for data, all leftwise bits get truncated leading to data loss.'
        },
        {
          language: 'Java', category: 'Logical Branching', curriculum: 'module-1-week-1',
          question: 'What is "conditional branching"?',
          answer: 'Switching execution to a different statement sequence based on the result of an expression'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'What is an "array" in Java?',
          answer: 'An array is a collection of similar data elements stored at adjacent memory locations'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'What are the benefits of a Java array?',
          answer: 'Dynamic variable assignment (can be modified with for loops) and high performance due to adjacent memory locations'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'What are the drawbacks of a Java array?',
          answer: 'Once the length of an array is set, you cannot modify it.  This means you cannot add or remove elements.'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'What index does an array begin with?',
          answer: '0.  The first element is at index 0'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'What is the index for the last element of an array?',
          answer: 'array.length - 1'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'What is an "IndexOutOfBoundsException"?',
          answer: 'When you try to reference an element of an array using an index that does not exist.  Example: array[-1] or attempting to access index >= array.length'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'Write the for-loop that displays every element in an array',
          answer: 'for (int i = 0; i < array.length; i++) System.out.println(array[i]);'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'Write the for-loop so i = 2, 4, 6, 8, 10',
          answer: 'for (int i = 0; i <= 10; i += 2)'
        },
        {
          language: 'Java', category: 'Loops and Arrays', curriculum: 'module-1-week-2',
          question: 'Write the for-loop so i = 5, 4, 3, 2, 1',
          answer: 'for (int i = 5; i > 0; i--)'
        },
        {
          language: 'Java', category: 'Intro to Objects: Strings', curriculum: 'module-1-week-2',
          question: 'How do you get the last 2 characters of String str',
          answer: 'str.substring(str.length()-2)'
        },
        {
          language: 'Java', category: 'Intro to Objects: Strings', curriculum: 'module-1-week-2',
          question: 'If str = "Hello World", how do you get substring "llo"?',
          answer: 'str.substring(2, 5)'
        },
        {
          language: 'Java', category: 'Intro to Objects: Strings', curriculum: 'module-1-week-2',
          question: 'What does str.substring(1) return?',
          answer: 'It returns a String where the first character of str is removed'
        },
        {
          language: 'Java', category: 'Command-line programs', curriculum: 'module-1-week-2',
          question: 'What is a Scanner in Java?',
          answer: 'Scanner is a utility class used to read user input'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is special about the `Collections framework`?',
          answer: 'The Collections framework in Java provides an architecture of various data structures.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What is a data structure?',
          answer: 'A data structure is a specialized format for organizing, processing, retrieving and storing data.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What is a Stack?',
          answer: 'A Stack is an ordered collection of elements, Last In First out (LIFO) data structure.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What does the `push` operation in a Stack do?',
          answer: 'The `push` operation adds an element to the top of the Stack'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What does the `pop` operation in a Stack do?',
          answer: 'The `pop` operation removes and returns an element from the top of the Stack'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What is a Queue?',
          answer: 'A Queue is an ordered collection of elements, First In First out (FIFO) data structure.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What does the `add` operation in a Queue do?',
          answer: 'The `add` operation adds an element to the back of the Queue'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What does the `remove` operation in a Queue do?',
          answer: 'The `remove` operation removes and returns an element from the front of the Queue'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what class is commonly used as an implementation for a Queue?',
          answer: 'LinkedList'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is a Set?',
          answer: 'A Set is an unordered collection that contains no duplicate elements.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is a HashSet?',
          answer: 'This class implements the Set interface, backed by a hash table'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'What is the benefit of using a hash-based collection such as HashMap or HashSet?',
          answer: 'Using a hash table to track your elements allows for extremely fast searches.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'True or false: The elements of a Set are guaranteed to be ordered in the same order they were added.',
          answer: 'False'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is the hashCode() method?',
          answer: 'Every object in Java has a hashCode() method that generates a consistent seemingly random string.  It is used to track an object inside of HashMaps, HashSets, and HashTables.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is a List?',
          answer: 'It is an ordered collection of objects in which duplicate values can be stored. Since List preserves the insertion order, it allows positional access and insertion of elements.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is an ArrayList?',
          answer: 'It is an implementation of a List that uses an array under the hood to store elements.'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is a Map?',
          answer: 'A Map is an object that maps keys to values. A map cannot contain duplicate keys and each key can map to at most one value (or object)'
        },
        {
          language: 'Java', category: 'Collections', curriculum: 'module-1-week-3',
          question: 'In Java, what is a HashMap?',
          answer: 'A HashMap is a Hash table based implementation of a Map.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'What is Object-Oriented Programming?',
          answer: 'Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'In Java, what is an object?',
          answer: 'An object is an instance of a Java class.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'In Java, what is an instance?',
          answer: 'An instance is the digital manifestation of a class.  The instance behavior is derived from the class and is allocated in memory.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'In Java, what does instantiation mean?',
          answer: 'Instantiation is when a new instance is allocated in memory.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'In Java, what keyword is associated with instantiation?',
          answer: 'new'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'What two characteristics do real-world object share?',
          answer: '`state` and `behavior`'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'In Object-Oriented Programming, how is `state` represented in a class?',
          answer: 'member variables'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'In Object-Oriented Programming, how is `behavior` represented in a class?',
          answer: 'member methods'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'What is encapsulation?',
          answer: 'Encapsulation is the integration of properties (state) and methods (behavior) into a single unit (a class)'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'True or False: You can instantiate more than one object with a class.',
          answer: 'true'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'What is a `getter`?',
          answer: 'A getter is an instance method that returns the value for its specified property.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'True or False: If a class does not have a constructor defined, Java will provide one',
          answer: 'True, Java provides an empty constructor under the hood'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'True or False: Defining a constructor in a class removes the hidden empty constructor.',
          answer: 'True, Java provides an empty constructor under the hood only when there are no defined constructors.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'What does it mean to overload a method?',
          answer: 'Overloading a method is when you create a new method with matching name, but different number of arguments.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'How is a constructor different than a method?',
          answer: 'A constructor does not have a return type and can only be called once - when the object is being... constructed.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'True or False: A class `DocumentWriter` has a method defined as `public static void write(); You can invoke this method by `DocumentWriter.write()`',
          answer: 'True'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'True or False: A class `DocumentWriter` has a method defined as `public void write(); You can invoke this method by `DocumentWriter.write()`',
          answer: 'False'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'Adding a `static` modifer to an instance variable does what?',
          answer: 'The variable is no longer an instance variable and now belongs to the class.'
        },
        {
          language: 'Java', category: 'Classes and Encapsulation', curriculum: 'module-1-week5',
          question: 'A class has a `public static int` variable named `count`.  There are 2 objects instantiated for this class.  The first object `a` sets `count` to 5.  The second object `b` subsequently sets `count` to 15.  `System.out.println(a.count);` displays what?',
          answer: '15'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'What is `inheritance`?',
          answer: 'Inheritance is the act of having one class adopt the properties and methods of another class.'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'What is the typical metaphor to represent the relationship between an inheriting class and its super class?',
          answer: 'Child-parent relationship'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'If `GrandfatherClock` inherits from `Clock`, which class is considered the subclass?',
          answer: 'GrandfatherClock'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'If `GrandfatherClock` inherits from `Clock`, which class is considered the superclass?',
          answer: 'Clock'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'Which keyword is used to have one class inherit the methods and properties from another class?',
          answer: 'extends - ex. `public ClassA extends ClassB { }`'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'How can a derived class access variables and methods of the parent class?',
          answer: 'Use the `super` keyword.'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'In Java, which class do all classes inherit from?',
          answer: 'java.lang.Object (just saying Object is also good)'
        },
        {
          language: 'Java', category: 'Inheritance', curriculum: 'module-1-week6',
          question: 'What is a good test to determine if a class should utilize inheritance?',
          answer: 'Use the IS-A phrase.  i.e. `Circle` is a `Shape` GOOD.  `Cat` is a `Car` NOT GOOD (unless "Cat" is a type of `Car` - then rename `Cat` to `CatCar`)'
        },
        {
          language: 'Java', category: 'Polymorphism', curriculum: 'module-1-week6',
          question: 'What is polymorphism?',
          answer: 'In object-oriented programming, polymorphism is the idea that something can be assigned a different meaning or usage based on its context. This specifically allows variables and objects to take on more than one form.'
        },
        {
          language: 'Java', category: 'Polymorphism', curriculum: 'module-1-week6',
          question: 'What is the benefit of declaring a variable using its superclass?',
          answer: 'You can easily swap out one object from one derived type with another object of a different derived type. i.e. `List` can be instantiated with `new ArrayList()` or `new LinkedList()`'
        },
        {
          language: 'Java', category: 'Polymorphism', curriculum: 'module-1-week6',
          question: 'Explain the difference between abstract and concrete thinking in Object Orient Programming?',
          answer: 'Abstract thinking defines the functionality, purpose, and intended behavior of an object.  Concrete thinking involves the implementation required to get the desired behavior.'
        },
        {
          language: 'Java', category: 'Polymorphism', curriculum: 'module-1-week6',
          question: 'What is the difference between an abstract class and a concrete class?',
          answer: 'An abstract class cannot be instantiated, a concrete class can be instantiated.'
        },
        {
          language: 'Java', category: 'Polymorphism', curriculum: 'module-1-week6',
          question: 'What is data abstraction?',
          answer: 'Data abstraction is the process of hiding the implementation details and showing only functionality.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What is a unit test?',
          answer: 'Unit testing is a level of software testing where individual components, or units, of an application are tested.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'How do you treat dependencies for unit testing?',
          answer: 'Since a unit test should only test the logic of a component, you want to control external factors by faking them.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What is an integration test?',
          answer: 'An integration test ensures that multiple components interact with each other correctly.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What is an end-to-end test?',
          answer: 'An end-to-end test is an automated test typically with a bot interacting with the UI and ensuring that all subsystems such as the backend and database are working correctly.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What is a mock?',
          answer: 'A mock is a "fake" version of a dependency.  You use it to trick your component into thinking its interacting with a real object.  This allows you to isolate the logic of a component for a unit test.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What are three benefits of unit tests?',
          answer: 'They protect your code from other developers.  They allow for easier refactoring.  They help detect problems early. They are automated saving the developer time.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What are three benefits of unit tests?',
          answer: 'They protect your code from other developers.  They allow for easier refactoring.  They help detect problems early. They are automated saving the developer time.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What does QA stand for?',
          answer: 'Quality Assurance'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'Describe the role of a QA team.',
          answer: 'They are testers (and potentially also developers) who manually test your application and also write automated end-to-end tests.  They provide a fresh perspective and can find bugs a developer misses.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'Why is there potential for clashing between a QA team and a development team?',
          answer: 'Checks and balances. The QA team has the final say on if a story can be completed, as they have to sign off on new stories.  Any rejected stories could potentially be seen as a good job by QA management while a reduced velocity will look bad to development management.  Numerous bugs make a QA team look bad.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What is an acceptance test?',
          answer: 'An acceptance test is the final test done by the customer or user of the system that verifies if a story should be completed.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What are the 3 "As" of testing?',
          answer: 'Arrange, Act, Assert'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'What are the 3 stages of test driven development?',
          answer: 'Red, Green, Refactor - 1. Write a failing test (red) 2. Update your code to make the test pass (green) 3. Refactor your code.'
        },
        {
          language: 'Java', category: 'Unit Testing', curriculum: 'module-1-week7',
          question: 'Name one characteristic of a GOOD unit test.',
          answer: '1. Fast! (ms) 2. Repeatable: Always passes or fails 3. Independent: Can be run independently of other tests. 4. Obvious: Clearly explains scenario and expectations'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'What is an Exception?',
          answer: 'An exception is an event which disrupts the normal flow of the program\'s instructions.'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'What happens when an exception is thrown that is unhandled?',
          answer: 'The program immediately halts with an error message.'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'True or False: Exceptions can be raised and thrown.',
          answer: 'True - An exception is raised when an error is triggered, and thrown when you want to notify other devs of an invalid operation.'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'What branching mechanism is used to catch exceptions?',
          answer: 'try-catch-finally'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'True or False: A try block ALWAYS FULLY executes.',
          answer: 'False - a raised exception would stop the flow in the middle of the block'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'True or False: A catch block ALWAYS executes.',
          answer: 'False - a catch block only executes if it captures an Exception.'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'True or False: A catch block can be defined to only catch specific exceptions.',
          answer: 'True - you can choose to catch specific exceptions ie. NullPointerException, or catch the most generic Exception (catches all exceptions)'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'True or False: A finally block ALWAYS executes.',
          answer: 'Typically true unless you use System.exit()!!!'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'Why would you use try-with-resources?',
          answer: 'This mechanism guarantees that any connections get closed.'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'Why would you use custom exceptions?',
          answer: 'This signifies that this is a logical error and that the exception is intentional.  It is not a random bug'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'What is the difference between an Exception and a Runtime Exception?',
          answer: 'An Exception must be handled either with a `try-catch` block or the `throws` keyword. A Runtime Exception does not have this requirement.'
        },
        {
          language: 'Java', category: 'Exception Handling', curriculum: 'module-1-week7',
          question: 'Why do some methods use the `throws` keyword?',
          answer: 'This tells other developers that the code in the method could throw an exception.  This is useful when another dev is using your API.  It is also required if you do not want to wrap an Exception in a try-catch block.'
        },
        {
          language: 'Java', category: 'File IO', curriculum: 'module-1-week8',
          question: 'List one way you can read a file?',
          answer: 'You can use `Scanner`, `FileInputStream`, `FileReader`, or `Files` to read files.'
        },
        {
          language: 'Java', category: 'File IO', curriculum: 'module-1-week8',
          question: 'List one way you can read a file?',
          answer: 'You can use `Scanner`, `FileInputStream`, `FileReader`, or `Files` to read files.'
        },
        {
          language: 'Java', category: 'File IO', curriculum: 'module-1-week8',
          question: 'List one way you can read a file?',
          answer: 'You can use `Scanner`, `FileInputStream`, `FileReader`, or `Files` to read files.'
        },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
