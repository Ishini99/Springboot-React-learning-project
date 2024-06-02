package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.exception.StudentAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.exception.StudentNotFoundException;
import com.springbootreactdemo.springbootreactdemo.model.Student;
import com.springbootreactdemo.springbootreactdemo.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.logging.Logger;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {
    private final StudentRepository studentRepository;
    private static final Logger logger = Logger.getLogger(StudentService.class.getName());


    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student addStudent(Student student) {

        if (studentAlreadyExists(student.getEmail())) {

            logger.info("Student with email " + student.getEmail() + " already exists.");
            throw new StudentAlreadyExistsException(student.getEmail() + " already exists!");

        }
        logger.info("Student added successfully " + student.getEmail());
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(existingStudent -> {
            existingStudent.setFirstName(student.getFirstName());
            existingStudent.setLastName(student.getLastName());
            existingStudent.setEmail(student.getEmail());
            existingStudent.setHomeAddress(student.getHomeAddress());
            existingStudent.setTelephone(student.getTelephone());
            existingStudent.setGuardianName(student.getGuardianName());
            existingStudent.setGuardianTelephone(student.getGuardianTelephone());
            existingStudent.setGuardianId(student.getGuardianId());
            existingStudent.setGuardianAddress(student.getGuardianAddress());
            existingStudent.setExamYear(student.getExamYear());
            existingStudent.setGrade(student.getGrade());
            existingStudent.setCategory(student.getCategory());
            existingStudent.setSection(student.getSection());
            existingStudent.setSubject(student.getSubject());

            logger.info("Student updated successfully " + student.getEmail());

            return studentRepository.save(existingStudent);
        }).orElseThrow(() -> {
            logger.info("Student updating error " + student.getEmail());
            return new StudentNotFoundException("Student not found with ID: " + id);
        });
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException("Student not found with ID: " + id));
    }

    @Override
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException("Student not found with ID: " + id);
        }
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}

// Let's break down the code and provide theoretical explanations for each part:
//
//        1. **Package and Imports**:
//        - The code starts with defining the package name where the class `StudentService` belongs to. Packages help in organizing code into logical groups.
//        - The `import` statements bring in necessary classes from other packages. In this case, it imports classes like `Student`, `StudentRepository`, `List`, and exceptions.
//
//        2. **Annotations**:
//        - `@Service` annotation marks the class `StudentService` as a Spring service, meaning it will be picked up by component scanning during application startup and instantiated as a bean.
//        - `@RequiredArgsConstructor` is from Lombok, which automatically generates a constructor with required fields. In this case, it creates a constructor for the `StudentService` class with the `StudentRepository` as a parameter.
//
//        3. **Class Definition**:
//        - `public class StudentService implements IStudentService`: Defines a class named `StudentService` that implements the `IStudentService` interface.
//
//        4. **Instance Variable**:
//        - `private final StudentRepository studentRepository;`: Declares an instance variable `studentRepository` of type `StudentRepository`. This will be injected via constructor injection.
//
//        5. **Constructor**:
//        - `StudentService(StudentRepository studentRepository)`: Constructor generated by Lombok's `@RequiredArgsConstructor`. It initializes the `studentRepository` field.
//
//        6. **Methods**:
//        - `getStudents()`: Retrieves all students from the repository.
//        - `addStudent(Student student)`: Adds a new student to the repository after checking if the student with the same email already exists.
//        - `updateStudent(Student student, Long id)`: Updates an existing student's information based on the provided ID.
//        - `getStudentById(Long id)`: Retrieves a student by their ID.
//        - `deleteStudent(Long id)`: Deletes a student by their ID.
//
//        7. **Exception Handling**:
//        - The methods throw custom exceptions (`StudentAlreadyExistsException`, `StudentNotFoundException`) when certain conditions are met (e.g., student not found, student already exists).
//
//        8. **Private Method**:
//        - `studentAlreadyExists(String email)`: Checks if a student with the provided email already exists in the repository.
//
//        9. **Repository Interactions**:
//        - All database interactions are done through the injected `studentRepository`. This follows the principle of separation of concerns, where the service layer handles business logic while the repository layer deals with data access.
//
//        Overall, this service class follows best practices in Spring Boot application development, including dependency injection, exception handling, and separation of concerns. It provides a clean and structured way to interact with student data in the application.
//
// Let's break down the code line by line:
//
//        ```java
//        package com.example.sbrdemo.service;
//        ```
//        - This line declares the package where the `StudentService` class belongs.
//
//        ```java
//        import com.example.sbrdemo.exception.StudentAlreadyExistsException;
//        import com.example.sbrdemo.exception.StudentNotFoundException;
//        import com.example.sbrdemo.model.Student;
//        import com.example.sbrdemo.repository.StudentRepository;
//        import lombok.RequiredArgsConstructor;
//        import org.springframework.stereotype.Service;
//        ```
//        - These lines import necessary classes and annotations from other packages.
//        - `StudentAlreadyExistsException` and `StudentNotFoundException` are custom exception classes.
//        - `Student` is the model class representing a student.
//        - `StudentRepository` is the repository interface for CRUD operations on students.
//        - `RequiredArgsConstructor` is from Lombok, used to automatically generate a constructor.
//        - `Service` annotation marks this class as a Spring service.
//
//        ```java
//        import java.util.List;
//        ```
//        - This line imports the `List` interface from the `java.util` package.
//
//        ```java
//@Service
//@RequiredArgsConstructor
//public class StudentService implements IStudentService {
//```
//        - These annotations mark the class as a Spring service and generate a constructor with required fields (like `studentRepository`).
//
//            ```java
//    private final StudentRepository studentRepository;
//```
//        - This line declares an instance variable `studentRepository` of type `StudentRepository`.
//            - It's marked as `final`, meaning it cannot be reassigned after initialization.
//
//            ```java
//    @Override
//    public List<Student> getStudents() {
//        return studentRepository.findAll();
//    }
//```
//        - This method retrieves all students from the repository using the `findAll()` method of `studentRepository`.
//
//            ```java
//    @Override
//    public Student addStudent(Student student) {
//        if (studentAlreadyExists(student.getEmail())){
//            throw new StudentAlreadyExistsException(student.getEmail()+ " already exists!");
//        }
//        return studentRepository.save(student);
//    }
//```
//        - This method adds a new student to the repository.
//            - It first checks if a student with the same email already exists using the `studentAlreadyExists` method.
//- If the student already exists, it throws a `StudentAlreadyExistsException`.
//            - Otherwise, it saves the student using the `save` method of `studentRepository` and returns the saved student.
//
//```java
//    @Override
//    public Student updateStudent(Student student, Long id) {
//        return studentRepository.findById(id).map(st -> {
//            st.setFirstName(student.getFirstName());
//            st.setLastName(student.getLastName());
//            st.setEmail(student.getEmail());
//            st.setDepartment(student.getDepartment());
//            return studentRepository.save(st);
//        }).orElseThrow(() -> new StudentNotFoundException("Student not found with ID:" + id));
//    }
//```
//        - This method updates an existing student's information based on the provided ID.
//            - It finds the student by ID using the `findById` method of `studentRepository`.
//            - If the student is found, it updates the student's information and saves it using the `save` method of `studentRepository`.
//            - If the student is not found, it throws a `StudentNotFoundException`.
//
//            ```java
//    @Override
//    public Student getStudentById(Long id) {
//        return studentRepository.findById(id)
//                .orElseThrow(() -> new StudentNotFoundException("Student not found with ID:" + id));
//    }
//```
//        - This method retrieves a student by their ID using the `findById` method of `studentRepository`.
//            - If the student is found, it returns the student.
//            - If the student is not found, it throws a `StudentNotFoundException`.
//
//            ```java
//    @Override
//    public void deleteStudent(Long id) {
//        if (!studentRepository.existsById(id)){
//            throw new StudentNotFoundException("Student not found with ID:" + id);
//        }
//        studentRepository.deleteById(id);
//    }
//```
//        - This method deletes a student by their ID.
//            - It first checks if the student exists using the `existsById` method of `studentRepository`.
//            - If the student does not exist, it throws a `StudentNotFoundException`.
//            - Otherwise, it deletes the student using the `deleteById` method of `studentRepository`.
//
//            ```java
//    private boolean studentAlreadyExists(String email){
//        return studentRepository.findByEmail(email).isPresent();
//    }
//```
//        - This private method checks if a student with the provided email already exists in the repository.
//- It uses the `findByEmail` method of `studentRepository` to check if a student with the given email exists.
//- It returns `true` if a student is found, otherwise `false`.
//
//    This breakdown covers each line of the `StudentService` class, explaining its purpose and functionality.
