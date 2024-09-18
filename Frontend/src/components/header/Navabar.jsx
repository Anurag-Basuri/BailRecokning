/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../app/authSlice";
import DarkMode from "./DarkMode";

const Navbar = ({ darkMode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.auth.status);
	const [showDrop, setShowDrop] = useState(false);

	const logoutbtn = async () => {
		try {
			await axios.post("/api/v1/user/logout");
			localStorage.removeItem("token");
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.error("Error on logout", error);
		}
	};

	const addBail = async () => {
		const response = await axios.get("/api/v1/bail/add");
		navigate(`/bail/${response.data.data._id}`);
	};

	const navLinkStyles = (isActive) =>
		`block py-2 px-4 rounded-md transition-all duration-200 ${
			isActive
				? "text-indigo-500 font-semibold"
				: "text-gray-600 hover:text-indigo-500"
		}`;

	return (
		<div className="p-10">
			<nav
				className={`fixed w-full top-0 left-0 z-50 h-20 transition-all duration-300 ease-in-out backdrop-blur-lg ${
					darkMode
						? "bg-gray-900 bg-opacity-80"
						: "bg-white bg-opacity-80 shadow-lg"
				}`}>
				<div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-3">
						<span
							className={`self-center text-3xl font-bold tracking-wide transition-colors ${
								darkMode ? "text-white" : "text-gray-900"
							}`}>
							Bail Reckoner
						</span>
					</Link>

					{/* Dropdown Menu */}
					<div
						className={`w-full md:flex md:w-auto ${showDrop ? "" : "hidden"}`}>
						<ul
							className={`flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
								darkMode
									? "bg-gray-900 border-gray-700"
									: "bg-white border-gray-200"
							}`}>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) => navLinkStyles(isActive)}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="#"
									onClick={addBail}
									className={navLinkStyles(false)}>
									Create Bail Application
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/About"
									className={({ isActive }) => navLinkStyles(isActive)}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/hireLawyer"
									className={({ isActive }) => navLinkStyles(isActive)}>
									Hire Lawyer
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/knowYourLaw"
									className={({ isActive }) => navLinkStyles(isActive)}>
									Know Your Law
								</NavLink>
							</li>

							{/* Profile & Logout for Mobile */}
							{status && <DarkMode className="md:hidden" />}
							{status && (
								<div
									className={`md:hidden text-sm font-semibold cursor-pointer px-5 py-2 rounded-full transition-all duration-200 transform hover:scale-105 ${
										darkMode
											? "bg-indigo-600 hover:bg-indigo-700"
											: "bg-blue-500 hover:bg-blue-600 text-white"
									}`}
									onClick={() => navigate("/profile")}>
									Profile
								</div>
							)}
							{status && (
								<div
									className={`md:hidden text-sm font-semibold cursor-pointer px-5 py-2 rounded-full transition-all duration-200 transform hover:scale-105 ${
										darkMode
											? "bg-red-600 hover:bg-red-700"
											: "bg-red-500 hover:bg-red-600 text-white"
									}`}
									onClick={logoutbtn}>
									Logout
								</div>
							)}
						</ul>
					</div>

					{/* Menu and Actions */}
					<div className="flex items-center space-x-4">
						{status && <DarkMode className="hidden sm:block" />}

						{/* Profile & Logout Buttons */}
						{status ? (
							<>
								<div
									className={`hidden sm:inline-block text-sm font-semibold cursor-pointer px-5 py-2 rounded-full shadow-md transition duration-200 transform hover:scale-105 ${
										darkMode
											? "bg-indigo-600 text-white hover:bg-indigo-700"
											: "bg-blue-600 text-white hover:bg-blue-700"
									}`}
									onClick={() => navigate("/profile")}>
									Profile
								</div>
								<div
									className={`hidden sm:inline-block text-sm font-semibold cursor-pointer px-5 py-2 rounded-full shadow-md transition duration-200 transform hover:scale-105 ${
										darkMode
											? "bg-red-600 text-white hover:bg-red-700"
											: "bg-red-500 text-white hover:bg-red-600"
									}`}
									onClick={logoutbtn}>
									Logout
								</div>
							</>
						) : (
							<div className="text-sm font-semibold space-x-3">
								<span
									className={`cursor-pointer px-5 py-2 rounded-full shadow-md transition duration-200 transform hover:scale-105 ${
										darkMode
											? "bg-blue-600 text-white hover:bg-blue-700"
											: "bg-blue-500 text-white hover:bg-blue-600"
									}`}
									onClick={() => navigate("/login")}>
									Log in
								</span>
								<span
									className={`cursor-pointer px-5 py-2 rounded-full shadow-md transition duration-200 transform hover:scale-105 ${
										darkMode
											? "bg-green-600 text-white hover:bg-green-700"
											: "bg-green-500 text-white hover:bg-green-600"
									}`}
									onClick={() => navigate("/signup")}>
									Sign up
								</span>
							</div>
						)}

						{/* Hamburger for Mobile */}
						{status && (
							<button
								onClick={() => setShowDrop(!showDrop)}
								type="button"
								className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg transition-all duration-200 ${
									darkMode
										? "text-gray-400 hover:bg-gray-800 focus:ring-gray-600"
										: "text-gray-500 hover:bg-gray-100 focus:ring-gray-200"
								}`}>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 14">
									<path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
								</svg>
							</button>
						)}
					</div>
<<<<<<< Updated upstream

					<div
						className={`items-center justify-between ${
							showDrop ? "" : "hidden"
						} w-full md:flex md:w-auto md:order-1`}
						id="navbar-sticky">
						<ul
							className={`flex flex-col p-4 md:p-0 mt-4 rounded-lg font-medium border  md:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ${
								darkMode
									? "bg-gray-800 md:bg-gray-900 border-gray-700"
									: "border-gray-100 md:bg-white bg-gray-50"
							} `}>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										` ${
											isActive
												? "text-blue-700 hover:text-white"
												: "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200 
									 md:hover:bg-gray-800 md:p-2`
									}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => addBail()}
									className={({ isActive }) =>
										` ${
											isActive
												? "text-blue-700 hover:text-white"
												: "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									Create Bail Application
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/About"
									className={({ isActive }) =>
										` ${
											isActive ? "text-blue-700" : "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/hireLawyer"
									className={({ isActive }) =>
										` ${
											isActive ? "text-blue-700" : "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									Hire Lawyer
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/knowYourLaw"
									className={({ isActive }) =>
										` ${
											isActive ? "text-blue-700" : "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									Know Your Law
								</NavLink>
							</li>
							<li>
								{status ? <DarkMode className={" md:hidden lg:hidden"} /> : ""}
								{status ? (
									<div
										className={` md:hidden  lg:hidden  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center ${
											darkmode
												? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
												: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
										} `}
										// onClick={() => setShowAccount((prev) => !prev)}>
										onClick={() => navigate("/profile")}>
										Profile
									</div>
								) : (
									""
								)}

								{status ? (
									<div
										onClick={logoutbtn}
										className={` md:hidden  lg:hidden  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center ${
											darkmode
												? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
												: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
										} `}>
										Logout
									</div>
								) : (
									""
								)}
							</li>
						</ul>
					</div>
=======
>>>>>>> Stashed changes
				</div>
			</nav>
		</div>
	);
};

export default connect((state) => ({ darkMode: state.mode.darkMode }))(Navbar);
