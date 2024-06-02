import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:9192/students", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setStudents(result.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/students/delete/${id}`);
    loadStudents();
  };

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow custom-table">
        {" "}
      
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Home Address</th>
            <th>Telephone</th>
            <th>guardianName</th> 
            <th>guardianTelephone</th>
            <th>guardianId</th>
            <th>guardianAddress</th>
            <th>regDate</th>
            <th>regFee</th>
            <th>examYear</th>
            <th>grade</th>
            <th>category</th>
            <th>section</th>
            <th>subject</th>




            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter((st) => st.firstName.toLowerCase().includes(search))
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
                <td>{student.regFee}</td>
                <td>{student.examYear}</td>
                <td>{student.grade}</td>
                <td>{student.category}</td>
                <td>{student.section}</td>
                <td>{student.subject}</td>
                <td className="mx-2">
                  <Link
                    to={`/student-profile/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-student/${student.id}`}
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
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
