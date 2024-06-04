package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.model.Teacher;

import java.util.List;

public interface ITeacherService {
    Teacher addTeacher(Teacher teacher);
    List<Teacher> getTeachers();

//    Student updateTeacher(Teacher teacher ,Long id);
//    Student getStudentById(Long id);
//    void deleteStudent(Long id);
}
