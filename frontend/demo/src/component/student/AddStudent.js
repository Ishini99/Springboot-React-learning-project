import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const [ctgry, setCategory] = useState("");
const [sction, setSection] = useState("");

const AddStudent = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
    telephone: "",
    gardianName: "",
    gardianTelephone: "",
    gardianId: "",
    gardianAddress: "",
    regDate: "",
    regFee: "",
    examYear: "",
    grade: "",
    category: "",
    section: "",
    subject: "",
  });

  const {
    firstName,
    lastName,
    email,
    homeAddress,
    telephone,
    gardianName,
    gardianTelephone,
    gardianId,
    gardianAddress,
    regDate,
    regFee,
    examYear,
    grade,
    category,
    section,
    subject,
  } = student;

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9192/students", student);
    navigate("/view-students");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Student Details</h2>
      <form onSubmit={(e) => saveStudent(e)}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="fristName">
                First Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="firstName"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => handleInputChange(e)}
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
                value={lastName}
                onChange={(e) => handleInputChange(e)}
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
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="homeAddress">
                Address
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="homeAddress"
                id="homeAddress"
                required
                value={homeAddress}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="telephone">
                Telephone No
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="telephone"
                id="telephone"
                required
                value={telephone}
                onChange={(e) => handleInputChange(e)}
              />
            </div>{" "}
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="gardianName">
                Gardian Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="gardianName"
                id="gardianName"
                required
                value={gardianName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>{" "}
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="gardianId">
                Gardian NIC No
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="gardianId"
                id="gardianId"
                required
                value={gardianId}
                onChange={(e) => handleInputChange(e)}
              />
            </div>{" "}
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="gardianTelephone">
                Gardian Telephone
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="gardianTelephone"
                id="gardianTelephone"
                required
                value={gardianTelephone}
                onChange={(e) => handleInputChange(e)}
              />
            </div>{" "}
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="gardianAddress">
                Gardian Address
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="gardianAddress"
                id="gardianAddress"
                required
                value={gardianAddress}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="col-md-6">
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
                value={grade}
                onChange={(e) => handleInputChange(e)}
              >
                {Array.from({ length: 13 }, (_, index) => {
                  const grade = index + 1;
                  return (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="examYear">
                Exam Year
              </label>
              <select
                className="form-control col-sm-6"
                name="examYear"
                id="examYear"
                required
                value={examYear}
                onChange={(e) => handleInputChange(e)}
              >
                {Array.from({ length: 5 }, (_, index) => {
                  const year = new Date().getFullYear() - index;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="category">
                Category
              </label>
              <select
                className="form-control col-sm-6"
                type="text"
                name="category"
                id="category"
                required
                value={category}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="">Select Exam Type</option>
                <option value="A/L">A/L</option>
                <option value="O/L">O/L</option>
                <option value="Scholarship">Scholarship</option>
              </select>
            </div>{" "}
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
                value={section}
                onChange={(e) => handleInputChange(e)}
              />
            </div>{" "}
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
                value={subject}
                onChange={(e) => handleInputChange(e)}
              />
            </div>{" "}
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="gardianAddress">
                Registration Fee
              </label>
              <input
                className="form-control col-sm-6"
                type="checkbox"
                name="regFee"
                id="regFee"
                required
                value={regFee}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>{" "}
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
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

export default AddStudent;
