import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

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
    setStudent(result.data);
  };

  return <div></div>;
};
export default TeacherProfile;
