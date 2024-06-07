import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt, FaMoneyBillWave } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const result = await axios.get("http://localhost:9192/students", {
        validateStatus: () => {
          return true;
        },
      });
      if (result.status === 200) {
        setStudents(result.data);
      } else {
        console.error(
          "Error fetching students:",
          result.status,
          result.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  // const handlePayment = async (studentId) => {
  //   const navigate = navigate();
  //   // navigate(`/payment/student/${studentId}`);
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9192/students/delete/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <section style={{ overflowX: "auto" }}>
      <Search search={search} setSearch={setSearch} />
      <div style={{ width: "100%" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #ddd",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Home Address</th>
              <th>Telephone</th>
              <th>Guardian Name</th>
              <th>Guardian Telephone</th>
              <th>Guardian ID</th>
              <th>Guardian Address</th>
              <th>Registration Date</th>
              <th>Registration Fee</th>
              <th>Exam Year</th>
              <th>Grade</th>
              <th>Category</th>
              <th>Section</th>
              <th>Subject</th>
              <th colSpan="4">Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {students
              .filter((st) =>
                st.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((student, index) => (
                <tr key={student.id}>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {index + 1}
                  </th>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.firstName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.lastName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.email}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.homeAddress}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.telephone}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.guardianName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.guardianTelephone}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.guardianId}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.guardianAddress}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.regDate}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.regFee === 1 ? "Paid" : "Not paid"}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.examYear}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.grade}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.category}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.section}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {student.subject}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link
                      to={`/student/student-profile/${student.id}`}
                      className="btn btn-info"
                    >
                      <FaEye />
                    </Link>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link
                      to={`/student/edit-student/${student.id}`}
                      className="btn btn-warning"
                    >
                      <FaEdit />
                    </Link>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(student.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link
                      to={`/payment/student/${student.id}`}
                      className="btn btn-success"
                    >
                      <FaMoneyBillWave />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentsView;
