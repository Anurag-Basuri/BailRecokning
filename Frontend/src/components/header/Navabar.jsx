/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/authSlice";
import axios from "axios";
import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import DarkMode from "./DarkMode";

const Navabar = ({ darkMode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.auth.status);
	const darkmode = useSelector((state) => state.mode.darkMode);
	const [showDrop, setShowDrop] = useState(false);

	// useCallback for functions that shouldn't re-create on each render
	const logoutbtn = useCallback(async () => {
		try {
			await axios.post("/api/v1/user/logout");
			localStorage.removeItem("token");
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.error("Error on logout", error);
		}
	}, [dispatch, navigate]);

	const addBail = useCallback(async () => {
		const response = await axios.get("/api/v1/bail/add");
		navigate("/bail/" + response.data.data._id);
	}, [navigate]);

	return (
		<nav
			className={`fixed w-full top-0 left-0 right-0 z-50 h-22 ${
				darkMode ? "border-gray-600 bg-gray-900" : "border-gray-200"
			}`}>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse">
					<span
						className={`self-center text-2xl font-semibold whitespace-nowrap ${
							darkMode ? "text-white" : ""
						}`}>
						Bail Reckoner
					</span>
				</Link>

				<div className="flex flex-row p-4 order-2 md:order-2 space-x-3 rtl:space-x-reverse">
					{status && <DarkMode className={"hidden sm:block"} />}

					{status && (
						<button
							onClick={() => navigate("/profile")}
							className={`hidden sm:block text-white font-medium rounded-lg text-sm px-4 py-2 text-center ${
								darkMode
									? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
									: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-500"
							} transition duration-200 ease-in-out`}>
							Profile
						</button>
					)}

					{status ? (
						<button
							onClick={logoutbtn}
							className={`hidden sm:block text-white font-medium rounded-lg text-sm px-4 py-2 text-center ${
								darkMode
									? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
									: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-500"
							} transition duration-200 ease-in-out`}>
							Logout
						</button>
					) : (
						<div className="text-sm font-semibold leading-6">
							<button
								onClick={() => navigate("/login")}
								className={`text-white font-medium rounded-lg text-sm px-4 py-2 text-center ${
									darkMode
										? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
										: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-500"
								} transition duration-200 ease-in-out`}>
								Log in
							</button>
							<button
								onClick={() => navigate("/signup")}
								className={`ml-2 text-white font-medium rounded-lg text-sm px-4 py-2 text-center ${
									darkMode
										? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
										: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-500"
								} transition duration-200 ease-in-out`}>
								Sign up
							</button>
						</div>
					)}

					{status && (
						<button
							onClick={() => setShowDrop(!showDrop)}
							type="button"
							className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none ${
								darkMode
									? "text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
									: "hover:bg-gray-100 text-gray-500 focus:ring-gray-300"
							} transition duration-200 ease-in-out`}
							aria-label="Toggle navigation">
							<svg
								className="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14">
								<path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
					)}
				</div>

				<div
					className={`items-center justify-between ${
						showDrop ? "" : "hidden"
					} w-full md:flex md:w-auto md:order-1`}
					id="navbar-sticky">
					<ul
						className={`flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
							darkMode
								? "bg-gray-800 md:bg-gray-900 border-gray-700"
								: "border-gray-100 md:bg-white bg-gray-50"
						}`}>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									`block py-2 px-3 rounded md:bg-transparent bg-gray-200 ${
										isActive
											? "text-blue-700"
											: "text-blue-500 hover:text-blue-600"
									} transition duration-200 ease-in-out hover:bg-gray-400`
								}>
								Home
							</NavLink>
						</li>
						<li>
							<button
								onClick={addBail}
								className="block py-2 px-3 rounded md:bg-transparent bg-gray-200 text-blue-500 md:hover:hover:bg-gray-400 md:p-2 hover:bg-gray-300 hover:text-blue-600 transition duration-200 ease-in-out">
								Create Bail Application
							</button>
						</li>
						<li>
							<NavLink
								to="/About"
								className={({ isActive }) =>
									`block py-2 px-3 rounded md:bg-transparent bg-gray-200 ${
										isActive
											? "text-blue-700"
											: "text-blue-500 hover:text-blue-600"
									} transition duration-200 ease-in-out hover:bg-gray-400`
								}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/hireLawyer"
								className={({ isActive }) =>
									`block py-2 px-3 rounded md:bg-transparent bg-gray-200 ${
										isActive
											? "text-blue-700"
											: "text-blue-500 hover:text-blue-600"
									} transition duration-200 ease-in-out hover:bg-gray-400`
								}>
								Hire Lawyer
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/knowYourLaw"
								className={({ isActive }) =>
									`block py-2 px-3 rounded md:bg-transparent bg-gray-200 ${
										isActive
											? "text-blue-700"
											: "text-blue-500 hover:text-blue-600"
									} transition duration-200 ease-in-out hover:bg-gray-400`
								}>
								Know Your Law
							</NavLink>
						</li>
						{status && <DarkMode className={"md:hidden"} />}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default connect((state) => ({ darkMode: state.mode.darkMode }))(Navabar);
