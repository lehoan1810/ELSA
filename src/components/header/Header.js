import React from "react";
import imgLogo from "../../images/Group.png";
import "./style.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={imgLogo} alt="" />
			</div>
		</div>
	);
};

export default Header;
