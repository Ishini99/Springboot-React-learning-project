import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TeacherProfile = () => {
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

  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {`${teacher.firstName} ${teacher.lastName}`}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-primary">
                    Call
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning ms-1"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">First Name</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{teacher.firstName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Last Name</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{teacher.lastName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Email</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{teacher.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Home Address</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{teacher.address}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Mobile No</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{teacher.mobileNo}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">NIC No</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{teacher.nicNo}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Subject</h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {teacher.classDetails?.subject}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Grade </h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {teacher.classDetails?.grade}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Category </h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {teacher.classDetails?.category}
                    </p>
                  </div>
                  <hr />
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Section </h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {teacher.classDetails?.section}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h7 className="mb-0">Subject Code </h7>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {teacher.classDetails?.subjectCode}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeacherProfile;
