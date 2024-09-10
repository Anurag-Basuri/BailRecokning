import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/authSlice";
import axios from "axios";

const SignUp = () => {
	const status = useSelector((state) => state.auth.status);
	const dispatch = useDispatch();
	const [error, setError] = useState("");
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const [role, setRole] = useState("User");

	const create = async (data) => {
		setError("");
		try {
			const newurl = `/api/v1/user/register`;
			const newData = {
				email: data.email,
				password: data.password,
				fullName: data.fullName,
				role,
			};
			const response = await axios.post(newurl, newData);
			// setUser(response.data.data)
			dispatch(login(newData));
			console.log(response.data.data);

			navigate("/");
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		if (status) {
			navigate("/");
		}
	}, []);

	return (
		<>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col mt-6 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a
						href="#"
						className="flex items-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
						{/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
						Bail Reckoner
					</a>
					<div className="mb-4">
						<button
							type="button"
							className={`inline-flex items-center mx-2 px-10 py-2.5 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
								role === "User" ? "bg-blue-800" : "bg-blue-600"
							}`}
							onClick={() => setRole("User")}>
							User
						</button>
						<button
							type="button"
							className={`inline-flex items-center mx-2 px-10 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${
								role === "Lawyer" ? "bg-blue-800" : "bg-blue-600"
							}`}
							onClick={() => setRole("Lawyer")}>
							Legal aid Provider
						</button>
						<button
							type="button"
							className={`inline-flex items-center mx-2 px-10 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${
								role === "Judge" ? "bg-blue-800" : "bg-blue-600"
							}`}
							onClick={() => setRole("Judge")}>
							Judge
						</button>
					</div>
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create an account
							</h1>
							{error && (
								<p className="text-red-600 mt-8 text-center">{error}</p>
							)}
							<form
								onSubmit={handleSubmit(create)}
								className="space-y-4 md:space-y-6"
								action="#">
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Full Name
									</label>
									<input
										type="text"
										name="fullName"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Enter your full name"
										{...register("fullName", {
											required: true,
										})}
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Enter your email"
										{...register("email", {
											required: true,
											validate: {
												matchPatern: (value) =>
													/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
														value
													) || "Email address must be a valid address",
											},
										})}
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Password
									</label>
									<input
										type="password"
										name="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										{...register("password", {
											required: true,
										})}
										required=""
									/>
								</div>
								{/* 
                <div>
                  <label
                    htmlFor="avatar"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("file")}
                    required=""
                  />
                 
                </div> */}

								{/* <ProfilePicture/> */}

								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="terms"
											aria-describedby="terms"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											htmlFor="terms"
											className="font-light text-gray-500 dark:text-gray-300">
											I accept the{" "}
											<a
												className="font-medium text-primary-600 hover:underline dark:text-primary-500"
												href="#">
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-primary-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
									Create an account
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										to="/login"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500">
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;
