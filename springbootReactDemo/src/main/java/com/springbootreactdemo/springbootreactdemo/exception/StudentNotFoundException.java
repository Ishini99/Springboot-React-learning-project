package com.springbootreactdemo.springbootreactdemo.exception;

public class StudentNotFoundException extends RuntimeException {
    public StudentNotFoundException(String message) {
        super(message);

    }
}

//    This code defines a custom exception class named `StudentNotFoundException`. Let's break it down:
//
//        ```java
//        package com.example.sbrdemo.exception;
//        ```
//        - This line declares the package where the `StudentNotFoundException` class belongs.
//
//        ```java
//public class StudentNotFoundException extends RuntimeException {
//```
//        - This line defines the `StudentNotFoundException` class which extends the `RuntimeException` class.
//            - By extending `RuntimeException`, instances of `StudentNotFoundException` are unchecked exceptions, meaning they do not need to be declared in method signatures or caught explicitly by calling code.
//
//            ```java
//    public StudentNotFoundException(String message) {
//        super(message);
//    }
//```
//        - This is the constructor of the `StudentNotFoundException` class.
//            - It takes a `String` parameter `message`, which represents the message associated with the exception.
//            - The `super(message)` statement calls the constructor of the superclass (`RuntimeException`) with the provided message.
//            - This sets the message of the exception, which can be accessed via the `getMessage()` method when an instance of `StudentNotFoundException` is thrown.
//
//    In summary, this class provides a custom exception for situations where a student is not found. It allows developers to throw and catch this exception to handle such scenarios in a structured way within their application.
//
//Let's break down the code and provide a theoretical explanation:
//
//        1. **Package Declaration**:
//        - `package com.example.sbrdemo.exception;`: Declares the package in which the `StudentNotFoundException` class resides. Packages help in organizing classes and avoiding naming conflicts.
//
//        2. **Class Definition**:
//        - `public class StudentNotFoundException extends RuntimeException {`: Defines a class named `StudentNotFoundException` that extends the `RuntimeException` class.
//        - Extending `RuntimeException` makes `StudentNotFoundException` an unchecked exception, meaning it doesn't need to be explicitly caught or declared.
//
//        3. **Constructor**:
//        - `public StudentNotFoundException(String message) {`: Defines a constructor for `StudentNotFoundException` that takes a `String` parameter named `message`.
//    - The constructor initializes the exception with the provided message.
//    - It calls the constructor of the superclass (`RuntimeException`) using `super(message)`, passing the message to the superclass constructor.
//            - This sets the message associated with the exception, which can be retrieved later using `getMessage()` method when the exception is thrown.
//
//    4. **Explanation**:
//    - This class represents an exception that is thrown when a student is not found.
//    - By extending `RuntimeException`, instances of `StudentNotFoundException` are unchecked exceptions, meaning they don't need to be declared in method signatures or caught explicitly by calling code.
//            - Developers can throw this exception in situations where a student entity is expected to exist but is not found in the system.
//    - The provided message can be customized to provide additional context about why the student was not found, aiding in debugging and error handling.
//
//            In summary, `StudentNotFoundException` provides a standardized way to handle scenarios where a student is not found in the application. It encapsulates information about the error condition, making it easier for developers to diagnose and handle such situations in their code.
//
