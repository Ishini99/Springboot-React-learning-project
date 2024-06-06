package com.springbootreactdemo.springbootreactdemo.repository;

import com.springbootreactdemo.springbootreactdemo.model.TeacherPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherPaymentRepository extends JpaRepository<TeacherPayment,Long> {
}
