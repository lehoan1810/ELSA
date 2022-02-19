import React, { useEffect, useState } from "react";
import imgSignUp from "../../images/bg-container.png";
import imgAvt from "../../images/avt.png";
import imgPhone from "../../images/phone.png";
import imgMail from "../../images/mail.png";
import bgSignUp from "../../images/bgSignup.png";
import item1 from "../../images/img-content-1.png";
import item2 from "../../images/img-content-2.png";
import item3 from "../../images/img-content-3.png";
import item4 from "../../images/img-content-4.png";
import "./style.css";
const SignUp = () => {
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [vaPhone, setVaPhone] = useState("");
	const [vaName, setVaName] = useState("");
	const [vaEmail, setVaEmail] = useState("");
	const [study, setStudy] = useState("");
	const [course, setCourse] = useState("");
	const [loadSucces, setLoadSucces] = useState("");

	const sendSignUp = () => {
		let a = "Thông tin bắt buộc.";
		let b = "Vui lòng điền đúng định dạng email.";

		if (name !== "") {
			setVaName("");
		}
		if (phone !== "" && phonenumber(phone)) {
			setVaPhone("");
		}
		if (email !== "" && handleOnChange(email)) {
			setVaEmail("");
		}
		if (name === "" && phone === "" && email === "") {
			setVaName(a);
			setVaPhone(a);
			setVaEmail(a);
		} else if (
			handleOnChange(email) &&
			phonenumber(phone) &&
			name !== "" &&
			study !== ""
		) {
			setVaName("");
			setVaPhone("");
			setVaEmail("");
			setLoadSucces("success");
		}
		if (name === "") {
			console.log("chưa nhập name");
			setVaName(a);
		}
		if (phone === "") {
			console.log("chưa nhập phone");
			setVaPhone(a);
		} else if (!phonenumber(phone)) {
			console.log("phone không hợp lệ");
		}
		if (email === "") {
			console.log("chưa nhập email");
			setVaEmail(a);
		} else if (email !== "" && !handleOnChange(email)) {
			console.log("email không hợp lệ");
			setVaEmail(b);
		}
		if (study === "") {
			setCourse(a);
		} else if (study !== "") {
			setCourse("");
		}
	};

	const handleOnChange = (mail) => {
		let re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (re.test(mail)) {
			return true;
		} else {
			return false;
		}
	};

	const phonenumber = (inputtxt) => {
		if (typeof parseInt(inputtxt) == "number") {
			return true;
		} else {
			return false;
		}
	};
	useEffect(() => {
		if (loadSucces === "success") {
			setTimeout(() => {
				alert("Đăng ký thành công");
			}, 1500);
		}
	});

	return (
		<div className="section-signup">
			<div className="form-signup">
				<div className="title-form">
					CÙNG ỨNG DỤNG ELSA NÓI TIẾNG ANH “THẢ GA”
				</div>
				<div className="content-form">
					<div className="form-item">
						<div className="item-title">
							<img src={imgAvt} alt="" />
							<span>Họ tên *</span>
						</div>
						<input onChange={(e) => setName(e.target.value)} type="text" />
						<div className="validate">{vaName}</div>
					</div>
					<div className="form-item">
						<div className="item-title">
							<img src={imgPhone} alt="" />
							<span>Số điện thoại *</span>
						</div>
						<input type="text" onChange={(e) => setPhone(e.target.value)} />
						<div className="validate">{vaPhone}</div>
					</div>
					<div className="form-item">
						<div className="item-title">
							<img src={imgMail} alt="" />
							<span>Email *</span>
						</div>
						<input onChange={(e) => setEmail(e.target.value)} type="email" />
						<div className="validate">{vaEmail}</div>
					</div>
					<div className="package">
						<div className="radio-study">
							<label className="custom-radio-btn">
								<input
									type="radio"
									name="study"
									value="989.000 VND"
									onChange={(e) => setStudy(e.target.value)}
								/>
								<span className="checkmark"></span>
							</label>
							<span className="label">Gói học 1 năm</span>
						</div>
						<div className="radio-study">
							<label className="custom-radio-btn">
								<input
									type="radio"
									name="study"
									value="1.995.000 VND"
									onChange={(e) => setStudy(e.target.value)}
								/>
								<span className="checkmark"></span>
							</label>
							<span className="label">Gói học trọn đời</span>
						</div>
					</div>
					<div className="validate">{course}</div>
					<div className="show-course">{study}</div>
					<button onClick={sendSignUp} className="btn-handle-signUp">
						GỬI ĐĂNG KÝ
					</button>
				</div>
			</div>
			<div className="img-signup">
				<div className="img-main-signup">
					<img src={imgSignUp} alt="" />
				</div>
				<img className="bg-signup" src={bgSignUp} alt="" />
				<div className="bg-item1">
					<img src={item1} alt="" />
				</div>
				<img className="bg-item2" src={item2} alt="" />
				<img className="bg-item3" src={item3} alt="" />
				<img className="bg-item4" src={item4} alt="" />
			</div>
		</div>
	);
};

export default SignUp;
