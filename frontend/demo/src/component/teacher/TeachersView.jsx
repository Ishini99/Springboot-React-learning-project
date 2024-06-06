import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
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
            <th>Mobile Number</th>
            <th>NIC No</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Category</th>
            <th>Section</th>
            <th>Subject Code</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {teachers
            .filter((t) =>
              t.firstName.toLowerCase().includes(search.toLowerCase())
            )
            .map((teacher, index) => (
              <tr key={teacher.id}>
                <th scope="row">{index + 1}</th>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.email}</td>
                <td>{teacher.address}</td>
                <td>{teacher.mobileNo}</td>
                <td>{teacher.nicNo}</td>
                <td>{teacher.classDetails?.subject}</td>
                <td>{teacher.classDetails?.grade}</td>
                <td>{teacher.classDetails?.category}</td>
                <td>{teacher.classDetails?.section}</td>
                <td>{teacher.classDetails?.subjectCode}</td>
                <td className="mx-2">
                  <Link
                    to={`/teacher/teacher-profile/${teacher.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/teacher/edit-teacher/${teacher.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(teacher.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default TeachersView;
