import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
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
    <section className="scrollable-section">
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow custom-table">
        <thead>
          <tr className="text-center">
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
        <tbody className="text-center">
          {students
            .filter((st) =>
              st.firstName.toLowerCase().includes(search.toLowerCase())
            )
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index + 1}</th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.homeAddress}</td>
                <td>{student.telephone}</td>
                <td>{student.guardianName}</td>
                <td>{student.guardianTelephone}</td>
                <td>{student.guardianId}</td>
                <td>{student.guardianAddress}</td>
                <td>{student.regDate}</td>
                <td>{student.regFee === 1 ? "Paid" : "Not paid"}</td>
                <td>{student.examYear}</td>
                <td>{student.grade}</td>
                <td>{student.category}</td>
                <td>{student.section}</td>
                <td>{student.subject}</td>
                <td className="mx-2">
                  <Link
                    to={`/student/student-profile/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/student/edit-student/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td className="mx-2">
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
    </section>
  );
};

export default StudentsView;
