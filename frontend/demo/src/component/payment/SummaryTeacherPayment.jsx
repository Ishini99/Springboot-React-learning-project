import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SummaryTeacherPayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9192/payment/teacher"
        );
        setPayments(response.data);
      } catch (error) {
        toast.error("Failed to fetch teacher payment details");
        console.error("Error fetching teacher payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
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
            <th style={thStyle}>Teacher ID</th>
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
              <td style={tdStyle}>{payment.teacherId}</td>
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
