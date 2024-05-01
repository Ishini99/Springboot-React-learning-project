package com.springbootreactdemo.springbootreactdemo.exception;

public class StudentAlreadyExistsException extends RuntimeException {
    public StudentAlreadyExistsException(String message) {
        super(message);

    }
}

//
// Let's break down the code and provide a theoretical explanation:
//
//        1. **Package Declaration**:
//        - `package com.example.sbrdemo.exception;`: Declares the package in which the `StudentAlreadyExistsException` class resides. Packages help in organizing classes and avoiding naming conflicts.
//
//        2. **Class Definition**:
//        - `public class StudentAlreadyExistsException extends RuntimeException {`: Defines a class named `StudentAlreadyExistsException` that extends the `RuntimeException` class.
//        - Extending `RuntimeException` makes `StudentAlreadyExistsException` an unchecked exception, meaning it doesn't need to be explicitly caught or declared.
//
//        3. **Constructor**:
//        - `public StudentAlreadyExistsException(String message) {`: Defines a constructor for `StudentAlreadyExistsException` that takes a `String` parameter named `message`.
//    - The constructor initializes the exception with the provided message. - It calls the constructor of the
//    superclass (`RuntimeException`) using `super(message)`, passing the message to the superclass constructor.
//            - This sets the message associated with the exception, which can be retrieved later using `getMessage()` method when the exception is thrown.
//
//    4. **Explanation**:
//    - This class represents an exception that is thrown when attempting to add a student that already exists in the system.
//    - By extending `RuntimeException`, instances of `StudentAlreadyExistsException` are unchecked exceptions, meaning they don't need to be declared in method signatures or caught explicitly by calling code.
//            - Developers can throw this exception when adding a student to indicate that a student with the same email or other unique identifier already exists.
//    - The provided message can be customized to provide additional context about why the addition failed, aiding in debugging and error handling.
//
//            In summary, `StudentAlreadyExistsException` provides a standardized way to handle scenarios where a duplicate student entry is detected during insertion. It encapsulates information about the error condition, making it easier for developers to diagnose and handle such situations in their code.