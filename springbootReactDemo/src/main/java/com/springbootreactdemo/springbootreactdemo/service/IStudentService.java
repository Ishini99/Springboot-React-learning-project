package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.model.Student;

import java.util.List;

public interface IStudentService {
    Student addStudent(Student student);
    List<Student> getStudents();
    Student updateStudent(Student student ,Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}

//
//let's provide a theoretical introduction to each line of the `IStudentService` interface:
//
//        ```java
//        package com.example.sbrdemo.service;
//        ```
//        This line defines the package in which the interface `IStudentService` resides. Packages in Java are used to organize related classes and interfaces into namespaces, promoting modularity and avoiding naming conflicts.
//
//        ```java
//        import com.example.sbrdemo.model.Student;
//        ```
//        This line imports the `Student` class from the `com.example.sbrdemo.model` package. Import statements in Java enable the use of classes or interfaces defined in other packages within the current source file.
//
//        ```java
//        import java.util.List;
//        ```
//        This line imports the `List` interface from the `java.util` package. Java's `List` interface is a part of the Java Collections Framework and represents an ordered collection of elements, allowing duplicates and providing various methods to manipulate the elements.
//
//        ```java
//public interface IStudentService {
//```
//    This line declares the `IStudentService` interface. Interfaces in Java define a contract that classes must adhere to if they implement the interface. Interfaces contain method signatures but do not provide method implementations.
//
//            ```java
//    Student addStudent(Student student);
//```
//    This line declares a method `addStudent`, which expects a `Student` object as an argument and returns a `Student` object. This method is intended to add a new student to the system.
//
//            ```java
//    List<Student> getStudents();
//```
//    This line declares a method `getStudents`, which returns a list of `Student` objects. The method signature indicates that it does not require any parameters and is expected to retrieve all students stored in the system.
//
//            ```java
//    Student updateStudent(Student student, Long id);
//```
//    This line declares a method `updateStudent`, which takes a `Student` object and the `id` of the student to be updated as arguments, and returns a `Student` object. The purpose of this method is to update the information of an existing student in the system.
//
//```java
//    Student getStudentById(Long id);
//```
//    This line declares a method `getStudentById`, which takes the `id` of a student as an argument and returns a `Student` object. The method is designed to retrieve a specific student from the system based on their unique identifier.
//
//```java
//    void deleteStudent(Long id);
//```
//    This line declares a method `deleteStudent`, which accepts the `id` of a student as an argument and does not return any value (`void`). The method is intended to remove a student from the system based on their `id`.