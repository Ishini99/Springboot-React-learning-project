import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddStudentPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the student id from the route parameter

  const [payment, setPayment] = useState({
    studentId: id,
    billNo: "",
    amount: "",
    month: "",
    description: "",
    status: "",
    date: new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    setPayment((prevPayment) => ({
      ...prevPayment,
      studentId: id,
    }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const savePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:9192/payment/student/${id}`,
        payment,
        {}
      );
      toast.success("Student payment details saved successfully");
      console.log("Student payment saved:", response.data);
      navigate("/payment/all-student");
    } catch (error) {
      toast.error("Failed to save student payment details");
      console.error("Error saving student payment:", error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form
        onSubmit={savePayment}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1>Student Payment Details</h1>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="billNo"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Bill No
          </label>
          <input
            type="text"
            name="billNo"
            id="billNo"
            value={payment.billNo}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="amount"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={payment.amount}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="month"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Month
          </label>
          <select
            name="month"
            id="month"
            value={payment.month}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="description"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={payment.description}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="status"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Status
          </label>
          <select
            name="month"
            id="month"
            value={payment.month}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select</option>
            <option value="January">Completed</option>
            <option value="February">Not Completed</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Save Payment
        </button>
      </form>
    </div>
  );
};

export default AddStudentPayment;
