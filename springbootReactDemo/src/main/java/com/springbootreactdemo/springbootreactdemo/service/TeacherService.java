package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.exception.TeacherAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;
import com.springbootreactdemo.springbootreactdemo.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class TeacherService implements ITeacherService {
    private final TeacherRepository teacherRepository;
    private static final Logger logger = Logger.getLogger(TeacherService.class.getName());

    @Override
    public List<Teacher> getTeachers() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher addTeacher(Teacher teacher) {
        if (teacherAlreadyExists(teacher.getEmail())) {
            logger.info("Teacher with email " + teacher.getEmail() + " already exists.");
            throw new TeacherAlreadyExistsException("Teacher with email " + teacher.getEmail() + " already exists!");
        }
        logger.info("Adding teacher: " + teacher.getEmail());
        return teacherRepository.save(teacher);
    }

    private boolean teacherAlreadyExists(String email) {
        return teacherRepository.findByEmail(email).isPresent();
    }
}
