import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const TeachersView = () => {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    try {
      const result = await axios.get("http://localhost:9192/teachers", {
        validateStatus: () => {
          return true;
        },
      });
      if (result.status === 200) {
        setTeachers(result.data);
      } else {
        console.error(
          "Error fetching teacher data",
          result.status,
          result.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9192/teachers/delete/${id}`);
      loadTeachers();
    } catch (error) {
      console.log("Error deleting teacher", error);
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
              <th>Mobile Number</th>
              <th>NIC No</th>
              <th>Subject</th>
              <th>Grade</th>
              <th>Category</th>
              <th>Section</th>
              <th>Subject Code</th>
              <th colSpan="4">Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {teachers
              .filter((t) =>
                t.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((teacher, index) => (
                <tr key={teacher.id}>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {index + 1}
                  </th>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.firstName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.lastName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.email}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.address}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.mobileNo}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.nicNo}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.classDetails?.subject}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.classDetails?.grade}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.classDetails?.category}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.classDetails?.section}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {teacher.classDetails?.subjectCode}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link
                      to={`/teacher/teacher-profile/${teacher.id}`}
                      className="btn btn-info"
                    >
                      <FaEye />
                    </Link>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link
                      to={`/teacher/edit-teacher/${teacher.id}`}
                      className="btn btn-warning"
                    >
                      <FaEdit />
                    </Link>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(teacher.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link
                      to={`/payment/teacher/${teacher.id}`}
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

export default TeachersView;
