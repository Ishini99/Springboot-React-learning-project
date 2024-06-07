// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Dashboard";

import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import TeachersView from "./component/teacher/TeachersView";
import Login from "./component/login/Login";
import ResetPassword from "./component/login/ResetPassword";
import NavBarMain from "./component/common/NavBarMain";
import NavBarStudent from "./component/common/NavBarStudent";
import NavBarTeacher from "./component/common/NavBarTeacher";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";
import AddTeacher from "./component/teacher/AddTeacher";
import EditTeacher from "./component/teacher/EditTeacher";
import TeacherProfile from "./component/teacher/TeacherProfile";
import AddStudentPayment from "./component/payment/AddStudentPayment";
import AddTeacherPayment from "./component/payment/AddTeacherPayment";
import SummaryStudentPayment from "./component/payment/SummaryStudentPayment";
import SummaryTeacherPayment from "./component/payment/SummaryTeacherPayment";
import NavBarPayment from "./component/common/NavBarPayment";

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
      {location.pathname.startsWith("/payment") && <NavBarPayment />}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route path="/payment/student/:id" element={<AddStudentPayment />} />

        <Route path="/payment/teacher/:id" element={<AddTeacherPayment />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/payment/*" element={<PaymentRoutes />} />
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
    <Route path="view-teachers" element={<TeachersView />} />
    <Route path="add-teacher" element={<AddTeacher />} />
    <Route path="edit-teacher/:id" element={<EditTeacher />} />
    <Route path="teacher-profile/:id" element={<TeacherProfile />} />
  </Routes>
);
const PaymentRoutes = () => (
  <Routes>
    <Route path="/all-student" element={<SummaryStudentPayment />} />
    <Route path="/all-teacher" element={<SummaryTeacherPayment />} />
  </Routes>
);

export default App;
