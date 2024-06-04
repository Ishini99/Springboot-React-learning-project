package com.springbootreactdemo.springbootreactdemo.exception;

public class TeacherAlreadyExistsException extends RuntimeException {
    public TeacherAlreadyExistsException (String message){
        super(message);
    }
}

