import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SummaryTeacherPayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    try {
      const result = await axios.get("http://localhost:9192/payment/teacher", {
        validateStatus: () => {
          return true;
        },
      });
      if (result.status === 200) {
        const filteredPayments = result.data.filter(
          (payment) => payment.teacherDetails != null
        );
        setPayments(filteredPayments);
      } else {
        console.error(
          "Error fetching students:",
          result.status,
          result.statusText
        );
      }
    } catch (error) {
      toast.error("Failed to fetch teacher payment details");
      console.error("Error fetching Teacher payments:", error);
    }
  };

  const formatValue = (value) => (value != null ? value : "-");

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Summary of Teacher Payments</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Teacher Name</th>
            <th style={thStyle}>Mobile No</th>
            <th style={thStyle}>Subject Code</th>
            <th style={thStyle}>Bill No</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Month</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td style={tdStyle}>{payment.id}</td>
              <td style={tdStyle}>
                {formatValue(
                  payment.teacherDetails
                    ? payment.teacherDetails.firstName +
                        " " +
                        payment.teacherDetails.lastName
                    : "-"
                )}
              </td>
              <td style={tdStyle}>
                {formatValue(payment.teacherDetails?.mobileNo)}
              </td>
              <td style={tdStyle}>
                {formatValue(payment.teacherDetails?.classDetails?.subjectCode)}
              </td>
              <td style={tdStyle}>{payment.billNo}</td>
              <td style={tdStyle}>{payment.amount}</td>
              <td style={tdStyle}>{payment.month}</td>
              <td style={tdStyle}>{payment.description}</td>
              <td style={tdStyle}>{payment.status}</td>
              <td style={tdStyle}>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default SummaryTeacherPayment;
