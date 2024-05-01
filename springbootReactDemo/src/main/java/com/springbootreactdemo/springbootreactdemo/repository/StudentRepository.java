package com.springbootreactdemo.springbootreactdemo.repository;

import com.springbootreactdemo.springbootreactdemo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByEmail(String email);
}


// Let's break down the code and provide a theoretical explanation:
//
//        1. **Package Declaration**:
//        - `package com.example.sbrdemo.repository;`: Declares the package in which the `StudentRepository` interface resides. Packages help in organizing classes and avoiding naming conflicts.
//
//        2. **Imports**:
//        - `import com.example.sbrdemo.model.Student;`: Imports the `Student` class from the `com.example.sbrdemo.model` package. This class represents the entity model for students.
//        - `import org.springframework.data.jpa.repository.JpaRepository;`: Imports the `JpaRepository` interface from the Spring Data JPA framework. This interface provides CRUD (Create, Read, Update, Delete) operations for entities.
//        - `import java.util.Optional;`: Imports the `Optional` class from the Java standard library. This class is used to represent an optional value that may or may not be present.
//
//        3. **Interface Definition**:
//        - `public interface StudentRepository extends JpaRepository<Student, Long> {`: Defines an interface named `StudentRepository` that extends the `JpaRepository` interface.
//        - It specifies two type parameters: `Student` (the entity type managed by this repository) and `Long` (the type of the entity's primary key).
//        - By extending `JpaRepository`, `StudentRepository` inherits methods for CRUD operations on `Student` entities.
//
//4. **Method Declaration**:
//            - `Optional<Student> findByEmail(String email);`: Declares a method named `findByEmail` that takes a `String` parameter `email` and returns an `Optional` of `Student`.
//            - This method is a query method provided by Spring Data JPA. It follows the naming convention for query methods, allowing Spring Data JPA to automatically generate the SQL query based on the method name.
//            - It's used to retrieve a student entity by their email address. The method name indicates that it finds a student by their email.
//            - The return type `Optional<Student>` signifies that the method may return either a `Student` object if a student with the specified email is found, or an empty `Optional` if no such student exists.
//
//            5. **Explanation**:
//            - `StudentRepository` serves as the interface for interacting with the database table/entity representing students.
//   - By extending `JpaRepository`, `StudentRepository` inherits common CRUD methods such as `save`, `findById`, `findAll`, `delete`, etc., for managing student entities.
//   - The `findByEmail` method provides a convenient way to query for a student by their email address without having to write a custom SQL query. It utilizes Spring Data JPA's query method functionality.
//            - The use of `Optional<Student>` as the return type promotes safer coding practices by indicating the potential absence of a result, thereby preventing null pointer exceptions.
//            - Overall, `StudentRepository` abstracts away the complexities of database interactions and provides a clean, type-safe interface for performing CRUD operations on student entities.
//
//    In summary, `StudentRepository` is an integral part of the Spring Data JPA framework, providing a powerful mechanism for working with database entities in a Spring Boot application.