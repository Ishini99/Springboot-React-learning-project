import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox } from "@mui/material";

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

  const [category, setCategory] = useState("");
  const [section, setSection] = useState("");
  // const [subject, setSubject] = useState("");

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
    subject,
  } = student;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "subject") {
      const newSubjects = checked
        ? [...subject, value]
        : subject.filter((subject) => subject !== value);
      setStudent({
        ...student,
        subject: newSubjects,
      });
    } else {
      setStudent({
        ...student,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    if (name === "category") {
      setCategory(value);
      setSection("");
      setStudent({ ...student, section: "", subject: [] });
    } else if (name === "section") {
      setSection(value);
      setStudent({ ...student, subject: [] });
    }
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9192/students", student);
    navigate("/view-students");
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
                value={firstName}
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
                value={lastName}
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
                value={email}
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
                required
                value={homeAddress}
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
                value={telephone}
                onChange={handleInputChange}
              />
            </div>
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
                onChange={handleInputChange}
              />
            </div>
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
                onChange={handleInputChange}
              />
            </div>
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
                onChange={handleInputChange}
              />
            </div>
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
                value={grade}
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
                required
                value={examYear}
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
                required
                value={category}
                onChange={handleInputChange}
              >
                <option value="">Select Exam Type</option>
                <option value="A/L">A/L</option>
                <option value="O/L">O/L</option>
              </select>
            </div>
            {category === "A/L" && (
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
                      checked={section === "Science"}
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
                      checked={section === "Commerce"}
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
                      checked={section === "Arts"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="arts">
                      Arts
                    </label>
                  </div>
                </div>
              </div>
            )}

            {category === "A/L" && section === "Science" && (
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="subject">
                  Subjects
                </label>
                <div className="form-control">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="physics"
                      id="physics"
                      value="physics"
                      checked={subject.includes("physics")}
                      onChange={handleInputChange}
                    />

                    <label className="form-check-label" htmlFor="physics">
                      Physics
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="subject"
                      id="Biology"
                      value="Biology"
                      checked={subject.includes("Biology")}
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
                      checked={subject.includes("Chemistry")}
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
                      checked={subject.includes("Maths")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="maths">
                      Maths
                    </label>
                  </div>
                </div>
              </div>
            )}

            {category === "A/L" && section === "Commerce" && (
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
                      checked={subject.includes("Accounting")}
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
                      checked={subject.includes("Business Studies")}
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
                      checked={subject.includes("Economics")}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="economics">
                      Economics
                    </label>
                  </div>
                </div>
              </div>
            )}

            {category === "A/L" && section === "Arts" && (
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
                      checked={subject.includes("History")}
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
                      checked={subject.includes("Geography")}
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
                      checked={subject.includes("Political Science")}
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

            {category === "O/L" && (
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
                      checked={subject.includes("Science")}
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
                      checked={subject.includes("Commerce")}
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
                      checked={subject.includes("Sinhala")}
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
                      checked={subject.includes("English")}
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
                      checked={subject.includes("Tamil")}
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
                      checked={subject.includes("Maths")}
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
                  checked={regFee}
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
