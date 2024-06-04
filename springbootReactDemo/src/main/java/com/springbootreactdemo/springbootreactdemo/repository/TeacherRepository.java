package com.springbootreactdemo.springbootreactdemo.repository;

import com.springbootreactdemo.springbootreactdemo.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Optional<Teacher> findByEmail(String email);
}





