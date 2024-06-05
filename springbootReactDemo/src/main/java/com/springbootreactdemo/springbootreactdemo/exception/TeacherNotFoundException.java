package com.springbootreactdemo.springbootreactdemo.exception;

public class TeacherNotFoundException extends RuntimeException {
    public TeacherNotFoundException(String message) {
        super(message);
    }
}
