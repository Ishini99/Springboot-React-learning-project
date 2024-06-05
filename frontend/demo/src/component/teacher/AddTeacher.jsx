import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTeacher = () => {
  let navigate = useNavigate();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const saveTeacher = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9192/teachers",
        teacher,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Teacher details Saved Successfully");
      console.log("teacher saved", response.data);
      navigate("/teacher/view-teachers");
    } catch (error) {
      toast.error("Failed to Save Teacher Details");
      console.error("Error saving Teacher:", error);
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
      <h2 className="mt-3 mb-3">Teacher Details</h2>
      <form onSubmit={saveTeacher}>
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
                type="email"
                name="email"
                id="email"
                required
                value={teacher.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="firstName">
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
                NIC
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
          </div>
          <div className="col-md-6">
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="category">
                Category
              </label>
              <select
                className="form-control col-sm-6"
                name="category"
                id="category"
                value={teacher.category}
                onChange={handleInputChange}
              >
                <option value="">Select Exam Type</option>
                <option value="A/L">A/L</option>
                <option value="O/L">O/L</option>
              </select>
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="category">
                Section
              </label>
              <select
                className="form-control col-sm-6"
                name="section"
                id="section"
                value={teacher.section}
                onChange={handleInputChange}
              >
                <option value="">Select Section</option>
                <option value="physical">Physical</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
                <option value="na">N/A</option>
              </select>
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
                value={teacher.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="grade">
                Grade
              </label>
              <select
                className="form-control col-sm-6"
                type="text"
                name="grade"
                id="grade"
                required
                value={teacher.grade}
                onChange={handleInputChange}
              >
                <option value="">Select Grade</option>
                {Array.from({ length: 8 }, (_, index) => {
                  const grade = 6 + index;
                  return (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-students"}
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

export default AddTeacher;
