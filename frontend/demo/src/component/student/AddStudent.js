import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";

const AddStudent = () => {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
    telephone: "",
    guardianName: "",
    guardianTelephone: "",
    guardianId: "",
    guardianAddress: "",
    regDate: new Date().toISOString().slice(0, 10), // Default to today's date
    regFee: false,
    examYear: "",
    grade: "",
    category: "",
    section: "",
    subject: "",
  });

  // const [category, setCategory] = useState("");
  // const [section, setSection] = useState("");
  // const [subject, setSubject] = useState("");

  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   homeAddress,
  //   telephone,
  //  guardianName,
  //  guardianTelephone,
  //  guardianId,
  //  guardianAddress,
  //   regDate,
  //   regFee,
  //   examYear,
  //   grade,
  //   subject: [],
  // } = student;

  useEffect(() => {
    setStudent((prevStudent) => ({
      ...prevStudent,
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "subject") {
      const newSubjects = checked
        ? [...student.subject, value]
        : student.subject.filter((subject) => subject !== value);
      setStudent((prevStudent) => ({
        ...prevStudent,
        subject: newSubjects,
      }));
    } else {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    if (name === "category") {
      setStudent((prevStudent) => ({
        ...prevStudent,
        category: value,
        section: "",
        subject: [],
      }));
    } else if (name === "section") {
      setStudent((prevStudent) => ({
        ...prevStudent,
        section: value,
        subject: [],
      }));
    }
  };

  const saveStudent = async (e) => {
    e.preventDefault();

    // Map form fields to database column names

    try {
      const response = await axios.post(
        "http://localhost:9192/students",
        student,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Student saved:", response.data);
      navigate("/view-students");
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return (
    <div className="col-sm-10 py-2 px-4 offset-2 shadow">
      <h2 className="mt-3 mb-3">Student Details</h2>
      <form onSubmit={saveStudent}>
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
                value={student.firstName}
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
                value={student.lastName}
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
                value={student.email}
                onChange={handleInputChange}
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
                value={student.homeAddress}
                onChange={handleInputChange}
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
                value={student.telephone}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="gardianName">
                Guardian Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="gardianName"
                id="gardianName"
                value={student.guardianName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="guardianId">
                Guardian NIC No
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="guardianId"
                id="guardianId"
                value={student.guardianId}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="guardianTelephone">
                Guardian Telephone
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="guardianTelephone"
                id="guardianTelephone"
                value={student.guardianTelephone}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="guardianAddress">
                Guardian Address
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="guardianAddress"
                id="guardianAddress"
                value={student.guardianAddress}
                onChange={handleInputChange}
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
                name="grade"
                id="grade"
                required
                value={student.grade}
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
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="examYear">
                Exam Year
              </label>
              <select
                className="form-control col-sm-6"
                name="examYear"
                id="examYear"
                value={student.examYear}
                onChange={handleInputChange}
              >
                {" "}
                <option value="">Select Exam Year</option>
                {Array.from({ length: 5 }, (_, index) => {
                  const year = new Date().getFullYear() + index;
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
                name="category"
                id="category"
                value={student.category}
                onChange={handleInputChange}
              >
                <option value="">Select Exam Type</option>
                <option value="A/L">A/L</option>
                <option value="O/L">O/L</option>
              </select>
            </div>
            {student.category === "A/L" && (
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="section">
                  Section
                </label>
                <div className="form-control">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="section"
                      id="science"
                      value="Science"
                      checked={student.section === "Science"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="science">
                      Science
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="section"
                      id="commerce"
                      value="Commerce"
                      checked={student.section === "Commerce"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="commerce">
                      Commerce
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="section"
                      id="arts"
                      value="Arts"
                      checked={student.section === "Arts"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="arts">
                      Arts
                    </label>
                  </div>
                </div>
              </div>
            )}

            {student.category === "A/L" && student.section === "Science" && (
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="subject">
                  Subjects
                </label>
                <div className="form-control">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="Biology"
                      value="Biology"
                      checked={student.subject.includes("Biology")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="Biology">
                      Biology
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="Chemistry"
                      value="Chemistry"
                      checked={student.subject.includes("Chemistry")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="Biology">
                      Chemistry
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="maths"
                      value="Maths"
                      checked={student.subject.includes("Maths")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="maths">
                      Maths
                    </label>
                  </div>
                </div>
              </div>
            )}

            {student.category === "A/L" && student.section === "Commerce" && (
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="subject">
                  Subjects
                </label>
                <div className="form-control">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="accounting"
                      value="Accounting"
                      checked={student.subject.includes("Accounting")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="accounting">
                      Accounting
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="business"
                      value="Business Studies"
                      checked={student.subject.includes("Business Studies")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="business">
                      Business Studies
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="economics"
                      value="Economics"
                      checked={student.subject.includes("Economics")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="economics">
                      Economics
                    </label>
                  </div>
                </div>
              </div>
            )}

            {student.category === "A/L" && student.section === "Arts" && (
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="subject">
                  Subjects
                </label>
                <div className="form-control">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="history"
                      value="History"
                      checked={student.subject.includes("History")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="history">
                      History
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="geography"
                      value="Geography"
                      checked={student.subject.includes("Geography")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="geography">
                      Geography
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="politicalScience"
                      value="Political Science"
                      checked={student.subject.includes("Political Science")}
                      onChange={handleInputChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="politicalScience"
                    >
                      Political Science
                    </label>
                  </div>
                </div>
              </div>
            )}

            {student.category === "O/L" && (
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="subject">
                  Subjects
                </label>
                <div className="form-control">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="Science"
                      value="Science"
                      checked={student.subject.includes("Science")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="Science">
                      Science
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="Commerce"
                      value="Commerce"
                      checked={student.subject.includes("Commerce")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="Commerce">
                      Commerce
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="sinhala"
                      value="Sinhala"
                      checked={student.subject.includes("Sinhala")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="sinhala">
                      Sinhala
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="English"
                      value="English"
                      checked={student.subject.includes("English")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="English">
                      English
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="tamil"
                      value="Tamil"
                      checked={student.subject.includes("Tamil")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="tamil">
                      Tamil
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="maths"
                      value="Maths"
                      checked={student.subject.includes("Maths")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="maths">
                      Maths
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="input-group-text" htmlFor="regFee">
                Registration Fee
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="regFee"
                  id="regFee"
                  checked={student.regFee}
                  onChange={handleInputChange}
                />
              </label>
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

export default AddStudent;
