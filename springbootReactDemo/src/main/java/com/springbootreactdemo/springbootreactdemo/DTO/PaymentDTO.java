package com.springbootreactdemo.springbootreactdemo.DTO;

import com.springbootreactdemo.springbootreactdemo.model.Student;
import lombok.Data;

@Data
public class PaymentDTO {
//    private Long id;
    private String month;
    private String amount;
    private String date;
    private String description;
    private String billNo;
    private Long studentId;
    private Long teacherId;

}
