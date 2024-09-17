/* eslint-disable no-unused-vars */
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/authSlice";
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import DarkMode from "./DarkMode";

const Navabar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.auth.status);
	const darkmode = useSelector((state) => state.mode.darkMode);
	const [showDrop, setShowDrop] = useState(false);

	const [showAccount, setShowAccount] = useState(false);
	const logoutbtn = async () => {
		try {
			const response = await axios.post("/api/v1/user/logout");
			// console.log(response);
			localStorage.removeItem("token");
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.log("error on logout", error);
		}
	};
	const addBail = async () => {
		const response = await axios.get("/api/v1/bail/add");

		console.log(response.data.data);
		navigate("/bail/" + response.data.data._id);
	};

	return (
		<>
			<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link
						to="/"
						className="flex items-center space-x-3 rtl:space-x-reverse">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Bail Reckoner
						</span>
					</Link>
					<div className=" flex flex-row p-4 order-2  md:order-2 space-x-3  rtl:space-x-reverse">
						{status ? <DarkMode className={"hidden sm:block"} /> : ""}
						{status ? (
							<div
								className="hidden sm:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
								className="hidden sm:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Logout
							</div>
						) : (
							<div className="text-sm font-semibold leading-6">
								<span
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									onClick={() => navigate("/login")}>
									{" "}
									Log in
								</span>{" "}
								<span
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									onClick={() => navigate("/signup")}>
									{" "}
									Sign up{" "}
								</span>{" "}
							</div>
						)}
						{status ? (
							<button
								onClick={() => setShowDrop(!showDrop)}
								type="button"
								className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
								<span className="sr-only">Open main menu</span>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 14">
									<path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
								</svg>
							</button>
						) : (
							""
						)}
					</div>

					<div
						className={`items-center justify-between ${
							showDrop ? "" : "hidden"
						} w-full md:flex md:w-auto md:order-1`}
						id="navbar-sticky">
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										` ${
											isActive ? "text-blue-700" : "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => addBail()}
									className={({ isActive }) =>
										` ${
											isActive ? "text-blue-700" : "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									Bail Eligiblity
								</NavLink>
							</li>
							<li>
								<NavLink to = "/About"
									className={({ isActive }) =>
										` ${
											isActive ? "text-blue-700" : "text-blue-500"
										} block py-2 px-3 rounded md:bg-transparent bg-gray-200  md:hover:bg-gray-800 md:p-2`
									}>
									About
								</NavLink>
							</li>
							<li>
								{status ? <DarkMode className={" md:hidden lg:hidden"} /> : ""}
								{status ? (
									<div
										className=" md:hidden  lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
										className=" md:hidden  lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Logout
									</div>
								) : (
									""
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navabar;
