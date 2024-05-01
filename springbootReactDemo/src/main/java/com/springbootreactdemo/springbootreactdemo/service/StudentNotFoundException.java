package com.springbootreactdemo.springbootreactdemo.service;

public class StudentNotFoundException extends RuntimeException {
    public StudentNotFoundException(String message) {
        super(message);
    }
}


//   Let's delve into the code and provide a theoretical explanation:
//
//        1. **Package Declaration**:
//        - `package com.example.sbrdemo.service;`: This line declares the package where the `StudentNotFoundException` class resides. Packages help in organizing classes and avoiding naming conflicts.
//
//        2. **Class Definition**:
//        - `public class StudentNotFoundException extends RuntimeException {`: This line defines a class named `StudentNotFoundException` that extends the `RuntimeException` class.
//        - By extending `RuntimeException`, instances of `StudentNotFoundException` are unchecked exceptions, meaning they do not need to be declared in method signatures or caught explicitly by calling code.
//
//        3. **Constructor**:
//        - `public StudentNotFoundException(String message) {`: This line declares a constructor for `StudentNotFoundException` that takes a `String` parameter named `message`.
//    - The constructor initializes the exception with the provided message.
//    - It calls the constructor of the superclass (`RuntimeException`) using `super(message)`, passing the message to the superclass constructor.
//            - This sets the message associated with the exception, which can be retrieved later using the `getMessage()` method when the exception is thrown.
//
//    4. **Explanation**:
//    - This class represents an exception that is thrown when a student is not found.
//    - By extending `RuntimeException`, instances of `StudentNotFoundException` are unchecked exceptions, meaning they do not need to be declared in method signatures or caught explicitly by calling code.
//    - Developers can throw this exception in situations where a student entity is expected to exist but is not found in the system.
//    - The provided message can be customized to provide additional context about why the student was not found, aiding in debugging and error handling.
//
//            In summary, `StudentNotFoundException` provides a standardized way to handle scenarios where a student is not found in the application. It encapsulates information about the error condition, making it easier for developers to diagnose and handle such situations in their code.