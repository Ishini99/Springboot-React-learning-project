import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeachersView = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    const result = await axios.get("http://localhost:9192/teachers", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setTeachers(result.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/teachers/delete/${id}`);
    loadTeachers();
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow custom-table">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Home Address</th>
            <th>Telephone</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {teachers.map((teacher, index) => (
            <tr key={teacher.id}>
              <th scope="row">{index + 1}</th>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.email}</td>
              <td>{teacher.homeAddress}</td>
              <td>{teacher.telephone}</td>
              <td className="mx-2">
                <Link
                  to={`/teacher-profile/${teacher.id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-teacher/${teacher.id}`}
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
