import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentPofile = () => {
	const { id } = useParams();

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
    regDate:"",
	regFee: "",
    examYear: "",
    grade: "",
    category: "",
    section: "",
    subject: "",
	});

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		const result = await axios.get(
			`http://localhost:9192/students/student/${id}`
		);
		setStudent(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
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
									{`${student.firstName} ${student.lastName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
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
										<h7 className="mb-0">
											First Name
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
											Last Name
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.lastName}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
											Email
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Home Address
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.homeAddress}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Telephone
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.telephone}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Guardian Name
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.guardianName}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Guardian Telephone
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.guardianTelephone}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Gardian Id
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.guardianId}
										</p>
									</div>
								</div>


								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Guardian Address
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.guardianAddress}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Registered Date
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.regDate}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Registration Fee
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
										{student.regFee == 1 ? "Paid" : student.regFee == 0 || student.regFee == null ? "Not paid" : "Not paid"}

										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Exam Year
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.examYear}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Grade
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.grade}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Category
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.category}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Section
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.section}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h7 className="mb-0">
										Subject
										</h7>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.subject}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentPofile;
