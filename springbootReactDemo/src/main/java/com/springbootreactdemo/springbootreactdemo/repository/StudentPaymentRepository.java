package com.springbootreactdemo.springbootreactdemo.repository;

import com.springbootreactdemo.springbootreactdemo.model.Student;
import com.springbootreactdemo.springbootreactdemo.model.StudentPayment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentPaymentRepository extends JpaRepository<StudentPayment ,Long> {
//    Optional<StudentPayment>findByEmail(String email);
}
