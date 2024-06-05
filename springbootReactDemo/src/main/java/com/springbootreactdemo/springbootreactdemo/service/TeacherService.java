package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.TeacherDTO;
import com.springbootreactdemo.springbootreactdemo.exception.TeacherAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.model.Class;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;
import com.springbootreactdemo.springbootreactdemo.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

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
    public Teacher addTeacher(TeacherDTO teacherDTO) {
        if (teacherAlreadyExists(teacherDTO.getEmail())) {
            logger.info("Teacher with email " + teacherDTO.getEmail() + " already exists.");
            throw new TeacherAlreadyExistsException("Teacher with email " + teacherDTO.getEmail() + " already exists!");
        }

        Teacher teacher = new Teacher();
        teacher.setFirstName(teacherDTO.getFirstName());
        teacher.setLastName(teacherDTO.getLastName());
        teacher.setEmail(teacherDTO.getEmail());
        teacher.setAddress(teacherDTO.getAddress());
        teacher.setMobileNo(teacherDTO.getMobileNo());
        teacher.setNicNo(teacherDTO.getNicNo());

        Class classDetails = new Class();
        classDetails.setSubject(teacherDTO.getSubject());
        classDetails.setGrade(teacherDTO.getGrade());
        classDetails.setSection(teacherDTO.getSection());
        classDetails.setCategory(teacherDTO.getCategory());

        teacher.setClassDetails(classDetails);

        logger.info("Adding teacher: " + teacher.getEmail());
        return teacherRepository.save(teacher);
    }

    private boolean teacherAlreadyExists(String email) {
        return teacherRepository.findByEmail(email).isPresent();
    }
}
