import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logout } from "../app/authSlice";

const SideAccount = () => {
	const status = useSelector((state) => state.auth.status);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutbtn = async () => {
		try {
			const response = await axios.post("/api/v1/user/logout");
			console.log(response);
			localStorage.removeItem("token");
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.log("error on logout", error);
		}
	};
	return (
		<>
			<div className="m-10 max-w-sm top-side-component fixed top-0 right-0 z-50  text-white p-4">
				<div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
					<div className="relative mx-auto w-36 rounded-full">
						<span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
						<img
							className="mx-auto h-auto w-full rounded-full"
							src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
							alt=""
						/>
					</div>
					<h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
						Michael Simbal
					</h1>
					<h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
						Marketing Exec. at Denva Corp
					</h3>
					{/* <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Architecto, placeat!
					</p> */}
					<ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
						<li className="flex items-center py-3 text-sm">
							<span>Status</span>
							<span className="ml-auto">
								<span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
									Open for side gigs
								</span>
							</span>
						</li>
						<li className="flex items-center py-3 text-sm">
							<span>Joined On</span>
							<span className="ml-auto">Apr 08, 2022</span>
						</li>
						<li className="flex items-center py-3 text-sm">
							{status ? (
								<button
									onClick={logoutbtn}
									type="button"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Logout
								</button>
							) : (
								<div className="text-sm font-semibold leading-6">
									<span onClick={() => navigate("/login")}> Log in</span>/{" "}
									<span onClick={() => navigate("/signup")}> Sign up </span>{" "}
									<span aria-hidden="true">&rarr;</span>
								</div>
							)}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default SideAccount;
