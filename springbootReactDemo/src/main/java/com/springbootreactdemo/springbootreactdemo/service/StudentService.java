package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.exception.StudentAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.exception.StudentNotFoundException;
import com.springbootreactdemo.springbootreactdemo.model.Student;
import com.springbootreactdemo.springbootreactdemo.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

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
            throw new StudentAlreadyExistsException("Student with email " + student.getEmail() + " already exists!");
        }
        logger.info("Adding student: " + student.getEmail());
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

            logger.info("Updating student: " + student.getEmail());
            return studentRepository.save(existingStudent);
        }).orElseThrow(() -> new StudentNotFoundException("Student not found with ID: " + id));
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
        logger.info("Deleting student with ID: " + id);
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}
