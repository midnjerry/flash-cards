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
      'Khalil Walker',
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
        category: 'module-1-prework',
        question: 'What is a semantic HTML tag?',
        answer: 'A tag that describes the purposes of its contents. example: <article> is a block of text for an article in a newsletter.'
      },
      {
        category: 'module-1-prework',
        question: 'What are the benefits of using semantic tags?',
        answer: 'Better for (SEO) Search Engine Optimization, better code readability, important for accessbility - used by screen readers to help visually impaired audience access content'
      },
      {
        category: 'module-1-prework',
        question: 'What is a non-semantic HTML tag?  Give some examples.',
        answer: 'Tags that do not define the content.  Examples: <div> <span>'
      },
      {
        category: 'module-1-prework',
        question: 'What are the data types for JavaScript?',
        answer: 'string, number, boolean, object, bigint, symbol, undefined, null'
      },
      {
        category: 'module-1-prework',
        question: 'Why should you not use var in JavaScript?',
        answer: 'They do not support block-level scope (always a global variable).  It makes scoping confusing and causes a lot of bugs.  You would be able to use the variable before it is declared.'
      },
      {
        category: 'module-1-prework',
        question: 'In JavaScript, how do you write a for-loop that iterates i as 0, 1, 2, 3, 4?',
        answer: 'for (let i = 0; i < 5; i++)'    
      },
      {
        category: 'module-1-prework',
        question: 'What is an input tag?',
        answer: 'An HTML tag that creates a field for a user to enter information.  It is a building block of a form.'    
      },
      {
        category: 'module-1-prework',
        question: 'List 5 types of input tags.',
        answer: 'button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week'    
      },
      {
        category: 'module-1-prework',
        question: 'What is an anonymous function?',
        answer: 'A function without a name.  Typically used to implement a function embedded in other code. ex. (x) => console.log(x)'    
      },
      {
        category: 'module-1-prework',
        question: 'In CSS, how do you draw a blue 1-pixel line around an element?',
        answer: 'border: 1px solid blue;'    
      },
        {
          category: 'module-1-prework',
          question: 'In JavaScript, what is a function?',
          answer: "A separate block of code within a program that your main program will reference and run."
        },
        {
          category: 'module-1-prework',
          question: 'What are the benefits of JavaScript functions (or methods in general)?',
          answer: 'Functions are useful because they’re independently verifiable, promote reuse to reduce the complexity of a program, and turn a program into more bite-sized chunks so it’s more manageable to write.'
        },
        {
          category: 'module-1-prework',
          question: 'What is variable scoping?',
          answer: 'Scope determines where in a program you can access a variable.  When you declare a variable inside a block of code, you can only access that variable within that block of code (or additional blocks of code nested within that block)'
        },
        {
          category: 'module-1-prework',
          question: 'In JavaScript, what is the difference between `let` and `const`?',
          answer: '`let` declares a variable that can be reassigned.  `const` declares a variable that cannot be reassigned'
        },
        {
          category: 'module-1-prework',
          question: 'What is the naming convention for a local variable in JavaScript?',
          answer: 'They are written in camelCase.'
        },
        {
          category: 'module-1-prework',
          question: 'What is the naming convention for a function in JavaScript?',
          answer: 'They are written in camelCase.'
        },
        {
          category: 'module-1-prework',
          question: 'What is the naming convention for a global variable in JavaScript?',
          answer: 'Global variables are written in UPPERCASE.'
        },
        {
          category: 'module-1-prework',
          question: 'What is the naming convention for a constant in JavaScript?',
          answer: 'Constants are written in UPPER_SNAKE_CASE.'
        },
        {
          category: 'module-1-prework',
          question: 'In JavaScript, what is NaN?',
          answer: 'A value that stands for Not a Number.  This value occurs when a program does an illegal mathematical operation or when a numerical expression cannot simplify to a numerical value.'
        },
        {
          category: 'module-1-prework',
          question: 'In JavaScript, what is the difference between `null` and `undefined`?',
          answer: '`undefined` represents an empty value and is the default value for a non-initialized variable.  `null` represents an empty value, but must be explicitly assigned to a variable.'
        },
        {
          category: 'module-1-week-1',
          question: 'What does JVM stand for?',
          answer: 'JVM stands for Java Virtual Machine.  It is a program you must download to execute Java bytecode.'
        },
        {
          category: 'module-1-week-1',
          question: 'Why was Java written using the Java Virtual Machine?',
          answer: 'The Java Virtual Machine was written for cross-platform compatibility.  Instead of compiling Java code into processor-specific assembly code, Java code is compiled into Java bytecode.  The JVM was written so that Java bytecode would execute the same on any hardware platform (mobile phones, linux, mac, PC, etc.)'
        },
        {
          category: 'module-1-week-1',
          question: 'What does JRE stand for?',
          answer: 'JRE stands for Java Runtime Environment.  It is what you download to run Java programs.  It is an executable that can runs the JVM.'
        },
        {
          category: 'module-1-week-1',
          question: 'What does JDK stand for?',
          answer: 'JDK stands for Java Development Kit.  Is is the Java libraries and JRE that allows you to develop and execute Java programs.'
        },                      
        {
          category: 'module-1-week-1',
          question: 'What is a variable?',
          answer: 'A variable is a storage location paired with an associated symbolic name which contains some value of a specified data type'
        },
        {
          category: 'module-1-week-1',
          question: 'What is a comment?',
          answer: 'Lines of text that programmers embed in code as documentation.  The compiler ignores comments'
        },
        {
          category: 'module-1-week-1',
          question: 'What are the 2 ways to write a comment?',
          answer: 'prepend with: // or surround with: /*  */'
        },
        {
          category: 'module-1-week-1',
          question: 'What are the 8 primitive data types supported by the Java language?',
          answer: 'byte, short, int, long, float, double, boolean, char'
        },
        {
          category: 'module-1-week-1',
          question: 'Why are float and double data types considered imprecise?',
          answer: 'There is only a limited number of bits to represent the base of a number in scientific notation.  At a certain point digits are truncated.'
        },
        {
          category: 'module-1-week-1',
          question: 'Define "declaration of a variable?"',
          answer: 'Declaring a variable is when you specify the name and datatype for a new variable to be used in a program. i.e. Defining a new variable so it can be used by a program.'
        },
        {
          category: 'module-1-week-1',
          question: 'Define "declaration of a variable?"',
          answer: 'Declaring a variable is when you specify the name and datatype for a new variable to be used in a program. i.e. Defining a new variable so it can be used by a program.'
        },
        {
          category: 'module-1-week-1',
          question: 'Once a variable is declared in a given scope, can you declare it again?',
          answer: 'No'
        },
        {
          category: 'module-1-week-1',
          question: 'What is the naming convention of a variable?',
          answer: 'Use camel-case (first word lowercase, and subsequent words have the first letter capitalized), ex. int numberOfStudents;'
        },
        {
          category: 'module-1-week-1',
          question: 'What is the naming convention for boolean variables?',
          answer: 'Use names that begin with "is", "has", "was".  Avoid using a double negative.  Ex. boolean isHappy = true;'
        },
        {
          category: 'module-1-week-1',
          question: 'What does "initialize a variable" mean?',
          answer: 'Assigning a value to a variable for the first time.'
        },
        {
          category: 'module-1-week-1',
          question: 'What does "assign a value to variable" mean?',
          answer: 'Setting the value for a variable ex. dog = 4;'
        },
        {
          category: 'module-1-week-1',
          question: 'What is a constant?',
          answer: 'A constant is like a variable but its value cannot be changed'
        },
        {
          category: 'module-1-week-1',
          question: 'In Java what is the typical naming convention for a constant?',
          answer: 'All capital letters with spaces represented by an underscore'
        },
        {
          category: 'module-1-week-1',
          question: 'In Java, how do you declare a constant',
          answer: 'Typically with a "final" keyword to make it read-only and with a "static" keyword so it does not require instantiation.'
        },
        {
          category: 'module-1-week-1',
          question: 'What does the word "immutable" mean?',
          answer: 'It cannot be changed'
        },
        {
          category: 'module-1-week-1',
          question: 'What is a literal?',
          answer: 'A raw value such as false, 4, "hello world", 6.8'
        },
        {
          category: 'module-1-week-1',
          question: 'What is an expression?',
          answer: 'An expression is a combination of values, variables, and operators that are evaluated and produce a single result, which can then be used in a statement'
        },
        {
          category: 'module-1-week-1',
          question: 'What is "type casting"?',
          answer: 'Converting a value from one data type to another data type'
        },
        {
          category: 'module-1-week-1',
          question: 'What is an example of widening type casting?',
          answer: 'Converting a value from a smaller data type to a larger one, such as "short" to "int"'
        },
        {
          category: 'module-1-week-1',
          question: 'Is there risk in data loss with widening type casting?  Explain.',
          answer: 'No.  Widening to a larger data type is safe when all values for the smaller data type are a subset of the larger data type values'
        },
        {
          category: 'module-1-week-1',
          question: 'Is there risk in data loss with narrowing type casting?  Explain.',
          answer: 'Yes.  Since the smaller data type uses less bits for data, all leftwise bits get truncated leading to data loss.'
        },
        {
          category: 'module-1-week-1',
          question: 'What is "conditional branching"?',
          answer: 'Switching execution to a different statement sequence based on the result of an expression'
        },
        {
          category: 'module-1-week-2',
          question: 'What is an "array" in Java?',
          answer: 'An array is a collection of similar data elements stored at adjacent memory locations'
        },
        {
          category: 'module-1-week-2',
          question: 'What are the benefits of a Java array?',
          answer: 'Dynamic variable assignment (can be modified with for loops) and high performance due to adjacent memory locations'
        },
        {
          category: 'module-1-week-2',
          question: 'What are the drawbacks of a Java array?',
          answer: 'Once the length of an array is set, you cannot modify it.  This means you cannot add or remove elements.'
        },
        {
          category: 'module-1-week-2',
          question: 'What index does an array begin with?',
          answer: '0.  The first element is at index 0'
        },
        {
          category: 'module-1-week-2',
          question: 'What is the index for the last element of an array?',
          answer: 'array.length - 1'
        },
        {
          category: 'module-1-week-2',
          question: 'What is an "IndexOutOfBoundsException"?',
          answer: 'When you try to reference an element of an array using an index that does not exist.  Example: array[-1] or attempting to access index >= array.length'
        },
        {
          category: 'module-1-week-2',
          question: 'Write the for-loop that displays every element in an array',
          answer: 'for (int i = 0; i < array.length; i++) System.out.println(array[i]);'
        },
        {
          category: 'module-1-week-2',
          question: 'Write the for-loop so i = 2, 4, 6, 8, 10',
          answer: 'for (int i = 0; i <= 10; i += 2)'
        },
        {
          category: 'module-1-week-2',
          question: 'Write the for-loop so i = 5, 4, 3, 2, 1',
          answer: 'for (int i = 5; i > 0; i--)'
        },
        {
          category: 'module-1-week-2',
          question: 'How do you get the last 2 characters of String str',
          answer: 'str.substring(str.length()-2)'
        },
        {
          category: 'module-1-week-2',
          question: 'If str = "Hello World", how do you get substring "llo"?',
          answer: 'str.substring(2, 5)'
        },
        {
          category: 'module-1-week-2',
          question: 'What does str.substring(1) return?',
          answer: 'It returns a String where the first character of str is removed'
        },
        {
          category: 'module-1-week-2',
          question: 'What is a Scanner in Java?',
          answer: 'Scanner is a utility class used to read user input'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is special about the `Collections framework`?',
          answer: 'The Collections framework in Java provides an architecture of various data structures.'
        },
        {
          category: 'module-1-week-3',
          question: 'What is a data structure?',
          answer: 'A data structure is a specialized format for organizing, processing, retrieving and storing data.'
        },
        {
          category: 'module-1-week-3',
          question: 'What is a Stack?',
          answer: 'A Stack is an ordered collection of elements, Last In First out (LIFO) data structure.'
        },
        {
          category: 'module-1-week-3',
          question: 'What does the `push` operation in a Stack do?',
          answer: 'The `push` operation adds an element to the top of the Stack'
        },
        {
          category: 'module-1-week-3',
          question: 'What does the `pop` operation in a Stack do?',
          answer: 'The `pop` operation removes and returns an element from the top of the Stack'
        },
        {
          category: 'module-1-week-3',
          question: 'What is a Queue?',
          answer: 'A Queue is an ordered collection of elements, First In First out (FIFO) data structure.'
        },
        {
          category: 'module-1-week-3',
          question: 'What does the `add` operation in a Queue do?',
          answer: 'The `add` operation adds an element to the back of the Queue'
        },
        {
          category: 'module-1-week-3',
          question: 'What does the `remove` operation in a Queue do?',
          answer: 'The `remove` operation removes and returns an element from the front of the Queue'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what class is commonly used as an implementation for a Queue?',
          answer: 'LinkedList'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is a Set?',
          answer: 'A Set is an unordered collection that contains no duplicate elements.'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is a HashSet?',
          answer: 'This class implements the Set interface, backed by a hash table'
        },
        {
          category: 'module-1-week-3',
          question: 'What is the benefit of using a hash-based collection such as HashMap or HashSet?',
          answer: 'Using a hash table to track your elements allows for extremely fast searches.'
        },
        {
          category: 'module-1-week-3',
          question: 'True or false: The elements of a Set are guaranteed to be ordered in the same order they were added.',
          answer: 'False'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is the hashCode() method?',
          answer: 'Every object in Java has a hashCode() method that generates a consistent seemingly random string.  It is used to track an object inside of HashMaps, HashSets, and HashTables.'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is a List?',
          answer: 'It is an ordered collection of objects in which duplicate values can be stored. Since List preserves the insertion order, it allows positional access and insertion of elements.'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is an ArrayList?',
          answer: 'It is an implementation of a List that uses an array under the hood to store elements.'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is a Map?',
          answer: 'A Map is an object that maps keys to values. A map cannot contain duplicate keys and each key can map to at most one value (or object)'
        },
        {
          category: 'module-1-week-3',
          question: 'In Java, what is a HashMap?',
          answer: 'A HashMap is a Hash table based implementation of a Map.'
        },
        {
          category: 'module-1-week5',
          question: 'In Java, what is an object?',
          answer: 'An object is an instance of a Java class.'
        },
        {
          category: 'module-1-week5',
          question: 'In Java, what is an instance?',
          answer: 'An instance is the digital manifestation of a class.  The instance behavior is derived from the class and is allocated in memory.'
        },
        {
          category: 'module-1-week5',
          question: 'In Java, what does instantiation mean?',
          answer: 'Instantiation is when a new instance is allocated in memory.'
        },
        {
          category: 'module-1-week5',
          question: 'In Java, what keyword is associated with instantiation?',
          answer: 'new'
        },
        {
          category: 'module-1-week5',
          question: 'What two characteristics do real-world object share?',
          answer: '`state` and `behavior`'
        },
        {
          category: 'module-1-week5',
          question: 'In Object-Oriented Programming, how is `state` represented in a class?',
          answer: 'member variables'
        },
        {
          category: 'module-1-week5',
          question: 'In Object-Oriented Programming, how is `behavior` represented in a class?',
          answer: 'member methods'
        },
        {
          category: 'module-1-week5',
          question: 'What is encapsulation?',
          answer: 'Encapsulation is the integration of properties (state) and methods (behavior) into a single unit (a class)'
        },
        {
          category: 'module-1-week5',
          question: 'True or False: You can instantiate more than one object with a class.',
          answer: 'true'
        },
        {
          category: 'module-1-week5',
          question: 'What is a `getter`?',
          answer: 'A getter is an instance method that returns the value for its specified property.'
        },
        {
          category: 'module-1-week5',
          question: 'True or False: If a class does not have a constructor defined, Java will provide one',
          answer: 'True, Java provides an empty constructor under the hood'
        },
        {
          category: 'module-1-week5',
          question: 'True or False: Defining a constructor in a class removes the hidden empty constructor.',
          answer: 'True, Java provides an empty constructor under the hood only when there are no defined constructors.'
        },
        {
          category: 'module-1-week5',
          question: 'What does it mean to overload a method?',
          answer: 'Overloading a method is when you create a new method with matching name, but different number of arguments.'
        },
        {
          category: 'module-1-week5',
          question: 'How is a constructor different than a method?',
          answer: 'A constructor does not have a return type and can only be called once - when the object is being... constructed.'
        }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
