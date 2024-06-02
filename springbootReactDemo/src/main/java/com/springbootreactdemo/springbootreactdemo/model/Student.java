package com.springbootreactdemo.springbootreactdemo.model;

// Packages are used in Java to organize classes into namespaces, helping avoid naming conflicts and making the code more manageable.

import jakarta.persistence.*; // Imports annotations and classes from the Jakarta Persistence API.
import lombok.Data; // Imports the @Data annotation from the Lombok library. Lombok helps reduce boilerplate code by generating methods like getters, setters, equals(), hashCode(), and toString().
import org.aspectj.weaver.ast.Var;

import java.time.LocalDate;


@Entity
@Data

// The @Entity annotation marks this class as an entity in the context of JPA (Java Persistence API). The @Data annotation from Lombok generates getter and setter methods, toString(), equals(), and hashCode() methods for the class.
public class Student { // This class represents a student entity in the application.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // The @Id annotation marks the field as the primary key of the Student entity. The @GeneratedValue annotation specifies that the value of the primary key will be automatically generated by the database when a new Student entity is persisted. GenerationType.IDENTITY indicates that the database will automatically assign an ID to the entity.
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = true)
    private String category;

    @Column(nullable = false)
    private String lastName;
    // The @Column annotation allows you to customize the properties of the column. Here, nullable = false means that these fields cannot be null in the database.

    @Column(nullable = false, unique = true)
    private String email;
    // Additionally, unique = true indicates that each email value must be unique in the database.

    @Column(nullable = true)
    private String homeAddress;

    @Column(nullable = true)
    private String telephone;

    @Column(nullable = true)
    private String guardianName; // Corrected spelling of guardian

    @Column(nullable = true)
    private String guardianTelephone; // Corrected spelling of guardian

    @Column(nullable = true)
    private String guardianId; // Corrected spelling of guardian

    @Column(nullable = true)
    private String guardianAddress; // Corrected spelling of guardian
    @Column(nullable = true)
    private String section;
    @Column(nullable = false)
    private LocalDate regDate;

    @Column(nullable = false)
    private Boolean regFee;

    @Column(nullable = true)
    private String examYear;

    @Column(nullable = false)
    private String grade;

    @Column(nullable = true)
    private String  subject;



}

//, this one specifies that the department field is a column in the Student table, and it cannot be null in the database.



// Let's delve into the theoretical explanation of each line of code:
//
//        1. `package com.example.sbrdemo.model;`: This line is a package declaration. In Java, packages are used to organize classes into namespaces, helping to avoid naming conflicts and making the code more manageable. Here, the classes related to the `Student` model are organized under the `com.example.sbrdemo.model` package.
//
//        2. `import jakarta.persistence.*;`: Java's `import` statement is used to bring in classes or packages from external libraries. In this case, it imports annotations and classes from the Jakarta Persistence API. Jakarta Persistence is a Java API for managing persistence and object-relational mapping in Java applications.
//
//        3. `import lombok.Data;`: This line imports the `@Data` annotation from the Lombok library. Lombok is a library that reduces boilerplate code in Java by automatically generating methods such as getters, setters, `toString()`, `equals()`, and `hashCode()`.
//
//        4. `@Entity`: This annotation marks the `Student` class as an entity in the context of the Java Persistence API (JPA). In JPA, an entity represents a table in a relational database, and each instance of the entity corresponds to a row in that table.
//
//        5. `@Data`: The `@Data` annotation is from Lombok and is used to automatically generate boilerplate code for getter and setter methods, `toString()`, `equals()`, and `hashCode()`.
//
//        6. `public class Student {`: This line declares the `Student` class, which represents a student entity in the application.
//
//        7. `@Id`: This annotation marks the `id` field as the primary key of the `Student` entity. In a relational database, the primary key uniquely identifies each record in a table.
//
//8. `@GeneratedValue(strategy = GenerationType.IDENTITY)`: This annotation specifies the strategy for generating values for the `id` field. `GenerationType.IDENTITY` indicates that the database will automatically assign a unique identifier when a new `Student` entity is persisted.
//
//9. `private Long id;`: This line declares the `id` field of type `Long`. This field serves as the primary key for the `Student` entity.
//
//10. `@Column(nullable = false) private String firstName;`: These annotations mark the `firstName` field as a column in the `Student` table with the constraint that it cannot be null.
//
//            11. `@Column(nullable = false) private String lastName;`: Similar to the previous line, this marks the `lastName` field as a column with the constraint that it cannot be null.
//
//            12. `@Column(nullable = false, unique = true) private String email;`: This annotation specifies that the `email` field is a column in the `Student` table, and each email value must be unique in the database.
//
//            13. `@Column(nullable = false) private String department;`: Like the previous annotations, this marks the `department` field as a column in the `Student` table with the constraint that it cannot be null.