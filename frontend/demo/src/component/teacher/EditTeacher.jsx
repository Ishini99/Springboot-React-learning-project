import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTeacher = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobileNo: "",
    nicNo: "",
    subject: "",
    grade: "",
    category: "",
    section: "",
  });

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    const result = await axios.get(
      `http://localhost:9192/teachers/teacher/${id}`
    );
    setTeacher(result.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const updateTeacher = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9192/teachers/update/${id}`, teacher);
      toast.success("Teacher Details Updated Successfully");
      navigate("/teacher/view-teachers");
    } catch (error) {
      console.error("Error saving teacher:", error);
      toast.error("Failed to Update Teacher Details");
    }
  };

  return (
    <div className="col-sm-10 py-2 px-4 offset-0 width 100% shadow">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="mt-5">Edit Teacher</h2>
      <form onSubmit={updateTeacher}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="firstName"
                id="firstName"
                required
                value={teacher.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="lastName"
                id="lastName"
                required
                value={teacher.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="email">
                Email
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="email"
                id="email"
                required
                value={teacher.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="address">
                Address
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="address"
                id="address"
                required
                value={teacher.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="mobileNo">
                Mobile No
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="mobileNo"
                id="mobileNo"
                required
                value={teacher.mobileNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="nicNo">
                NIC No
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="nicNo"
                id="nicNo"
                required
                value={teacher.nicNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="subject">
                Subject
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="subject"
                id="subject"
                required
                value={teacher.classDetails?.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="grade">
                Grade
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="grade"
                id="grade"
                required
                value={teacher.classDetails?.grade}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="category">
                Category
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="category"
                id="category"
                required
                value={teacher.classDetails?.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="section">
                Section
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="section"
                id="section"
                required
                value={teacher.classDetails?.section}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Update
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to="/view-teachers"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditTeacher;
