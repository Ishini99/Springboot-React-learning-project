package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.TeacherDTO;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;

import java.util.List;

public interface ITeacherService {
    List<Teacher> getTeachers();
    Teacher addTeacher(TeacherDTO teacherDTO);
}
