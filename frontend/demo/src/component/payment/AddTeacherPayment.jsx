import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const AddTeacherPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the teacher id from the route parameter
  const [payment, setPayment] = useState({
    teacherId: id,
    billNo: "",
    amount: "",
    month: "",
    description: "",
    status: "",
    date: new Date().toISOString().slice(0, 10),
  });

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
        `http://localhost:9192/payment/teacher/${id}`,
        payment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Teacher payment Details Saved Successfully");
      console.log("Teacher payment saved:", response.data);
      navigate("/teacher/view-teachers");
    } catch (error) {
      toast.error("Failed to Save Teacher payment Details");
      console.error("Error saving teacher payment:", error);
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
        <h1>Teacher Payment Details</h1>
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
          <input
            type="text"
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
          />
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
          <input
            type="text"
            name="status"
            id="status"
            value={payment.status}
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
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#007bff",
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

export default AddTeacherPayment;
