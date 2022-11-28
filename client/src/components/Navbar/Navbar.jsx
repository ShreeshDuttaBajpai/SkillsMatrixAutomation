import React, { useState } from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/auth.context";
import jwt_Decode from "jwt-decode";

const Navbar = () => {
	const { authSuccess, userToken, logout } = useAuth();
	let user_name = "";
	let user_id = "";

	if (userToken) {
		const decoded_token = jwt_Decode(userToken);
		user_name = decoded_token.User_first_Name;
		user_id = decoded_token.User_id;
	}

	const navigate = useNavigate();

	function DropdownItem(props) {
		return (
			<li onClick={props.handleClick} className="dropdownItem">
				<p>{props.text}</p>
			</li>
		);
	}

	const [open, setOpen] = useState(false);
	return (
		<div className="header">
			<nav className="flex space-between">
				<div className="left flex items-center">
					<NavLink to="/">
						<img
							src="https://cdn-icons-png.flaticon.com/512/748/748481.png?w=740&t=st=1666000669~exp=1666001269~hmac=c1a70a67ef3824596ce3f4c76b7536dc630bb5ca01d24102561a56d626d92372"
							className="logo-img"
							alt="logo"
						></img>
					</NavLink>

					<h3 className="navbar-brand">
						<NavLink to="/">Know Your Bus</NavLink>
					</h3>

					<div className="mx-2">
						<NavLink to="/">Home</NavLink>
					</div>
					<div className="mx-2">
						<NavLink to="/aboutus">About</NavLink>
					</div>
					<div className="mx-2">
						<NavLink to="/offers">Offers</NavLink>
					</div>
				</div>
				<div className="right flex items-center">
					<div className="mx-2">
						<NavLink to="/contact">Contact Us</NavLink>
					</div>
					{authSuccess === true ? (
						<div className="login-navlink">
							<div
								className="mx-2 username"
								onClick={() => setOpen(!open)}
							>
								<AccountCircleIcon />
								<span>Hi, {user_name}</span>
							</div>
							<div
								className={`dropdown-menu ${
									open ? "active" : "inactive"
								}`}
							>
								<ul>
									<DropdownItem
										text={"My Profile"}
										handleClick={() =>
											navigate(`/users/${user_id}`)
										}
									/>
									<DropdownItem
										text={"Logout"}
										handleClick={() => {
											logout();
											navigate("/");
											window.location.reload();
										}}
									/>
								</ul>
							</div>
						</div>
					) : (
						<div
							className="mx-2"
							onClick={() => navigate("/login")}
						>
							Sign In/Sign Up
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
