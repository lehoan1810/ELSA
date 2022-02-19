import React from "react";
import Frame from "../../images/Frame.png";
import bgRight from "../../images/image-phone.png";
import item1 from "../../images/image-item1.png";
import item2 from "../../images/image-item2.png";
import SignUp from "../signup/SignUp";
import "./style.css";

const Container = () => {
	const handleClick = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");
		const location = document.querySelector(target).offsetTop;
		window.scrollTo({
			top: location + 140,
		});
	};
	return (
		<div className="container">
			<img className="item1" src={item1} alt="" />
			<div className="content">
				<div className="slide-desc">
					<div className="slide-title">
						<h2>APP LUYỆN NÓI </h2>
						<br />
						<h2> & GIAO TIẾP TIẾNG ANH THỜI 4.0</h2>
					</div>
					<span>Với ELSA Speak - Ai Cũng Có Thể Nói Tiếng Anh Hay!</span>
					<div className="btn-handle">
						<a href="#signUp" onClick={handleClick}>
							Đăng ký ngay
						</a>
					</div>
				</div>
				<div className="img-bgRight">
					<img className="bg-phone" src={Frame} alt="" />
					<img className="center-phone" src={bgRight} alt="" />
				</div>
				<img className="item2" src={item2} alt="" />
			</div>

			<div className="signUp" id="signUp">
				<SignUp />
			</div>
		</div>
	);
};

export default Container;
