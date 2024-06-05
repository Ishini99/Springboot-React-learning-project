package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.TeacherDTO;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;

import java.util.List;

public interface ITeacherService {
    List<Teacher> getTeachers();

    Teacher getTeacherById(Long Id);

    Teacher addTeacher(TeacherDTO teacherDTO);
    void deleteTeacher (Long id);

//    Teacher updateTeacher(Teacher teacher, Long id);

    Teacher updateTeacher(TeacherDTO teacherDTO, Long id);
}
