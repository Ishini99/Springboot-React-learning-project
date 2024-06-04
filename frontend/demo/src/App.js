// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "./App.css";
// import Home from "./Home";
// import StudentsView from "./component/student/StudentsView";
// import TeachersView from "./component/teacher/TeachersView";

// import NavBarMain from "./component/common/NavBarMain";
// import NavBarStudent from "./component/common/NavBarStudent";
// import NavBarTeacher from "./component/common/NavBarTeacher";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddStudent from "./component/student/AddStudent";
// import EditStudent from "./component/student/EditStudent";
// import StudentProfile from "./component/student/StudentProfile";
// import AddTeacher from "./component/teacher/AddTeacher";
// import EditTeacher from "./component/teacher/EditTeacher";
// import TeacherProfile from "./component/teacher/TeacherProfile";

// function App() {
//   return (
//     <main className="container mt-5">
//       <Router>
//         <NavBarMain />
//         <Routes>
//           <Route exact path="/" element={<Home />}></Route>
//           <Route path="/student/*" element={<StudentRoutes />} />
//           <Route path="/teacher/*" element={<TeacherRoutes />} />
//         </Routes>
//       </Router>
//     </main>
//   );
// }

// const StudentRoutes = () => (
//   <Routes>
//     <Route path="/view-students" element={<StudentsView />} />
//     <Route path="/add-student" element={<AddStudent />} />
//     <Route path="/edit-student/:id" element={<EditStudent />} />
//     <Route path="/student-profile/:id" element={<StudentProfile />} />
//   </Routes>
// );

// const TeacherRoutes = () => (
//   <Routes>
//     <Route path="/" element={<TeachersView />} />
//     <Route path="add-teacher" element={<AddTeacher />} />
//     <Route path="edit-teacher/:id" element={<EditTeacher />} />
//     <Route path="/teacher-profile/:id" element={<TeacherProfile />} />
//   </Routes>
// );

// export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import TeachersView from "./component/teacher/TeachersView";

import NavBarMain from "./component/common/NavBarMain";
import NavBarStudent from "./component/common/NavBarStudent";
import NavBarTeacher from "./component/common/NavBarTeacher";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";
import AddTeacher from "./component/teacher/AddTeacher";
import EditTeacher from "./component/teacher/EditTeacher";
import TeacherProfile from "./component/teacher/TeacherProfile";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <MainRouter />
      </Router>
    </main>
  );
}

const MainRouter = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <NavBarMain />}
      {location.pathname.startsWith("/student") && <NavBarStudent />}
      {location.pathname.startsWith("/teacher") && <NavBarTeacher />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
      </Routes>
    </>
  );
};

const StudentRoutes = () => (
  <Routes>
    <Route path="view-students" element={<StudentsView />} />
    <Route path="add-student" element={<AddStudent />} />
    <Route path="edit-student/:id" element={<EditStudent />} />
    <Route path="student-profile/:id" element={<StudentProfile />} />
  </Routes>
);

const TeacherRoutes = () => (
  <Routes>
    <Route path="/" element={<TeachersView />} />
    <Route path="add-teacher" element={<AddTeacher />} />
    <Route path="edit-teacher/:id" element={<EditTeacher />} />
    <Route path="teacher-profile/:id" element={<TeacherProfile />} />
  </Routes>
);

export default App;
