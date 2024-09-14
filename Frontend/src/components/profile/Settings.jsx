import React,{useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Settings = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const [error1, setError1] = useState("");
	const [showChangePass, setshowChangePass] = useState(false);
	const [showChangeEmail, setshowChangeEmail] = useState(false);
	const changePassword = async (data) => {
		setError("");
		console.log(data);
		try {
			const newurl = `/api/v1/user/change-password`;
			const response = await axios.post(newurl, data);
			console.log(response.data.data);
			setshowChangePass(false);
		} catch (error) {
			setError(error.message);
		}
	};
	const updateAccount = async (data) => {
		setError1("");
		try {
			const newurl = `/api/v1/user/update-account`;
			const response = await axios.patch(newurl, data);
			console.log(response.data.data);
			setshowChangeEmail(false);
		} catch (error) {
			setError1(error.message);
		}
	};
	return (
		<div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
			<ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
				<li
					className="flex items-center py-3 text-sm"
					onClick={() => setshowChangePass((prev) => !prev)}>
					<span>Change Password </span>
				</li>
				<li className=" py-3 text-sm">
					{showChangePass ? (
						<div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
							<div className="relative mx-auto  rounded-full">
								<form
									onSubmit={handleSubmit(changePassword)}
									className="space-y-4 md:space-y-6"
									action="#">
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Old Password
										</label>
										<input
											type="text"
											name="fullName"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Enter your Old Password"
											{...register("oldPassword", {
												required: true,
											})}
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											New Password
										</label>
										<input
											type="text"
											name="fullName"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Enter your New Password"
											{...register("newPassword", {
												required: true,
											})}
											required=""
										/>
									</div>
									<button
										type="submit"
										className="w-full text-white bg-primary-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
										Change Password
									</button>
								</form>
							</div>
						</div>
					) : (
						""
					)}
				</li>
				<li
					className="flex items-center py-3 text-sm"
					onClick={() => setshowChangeEmail((prev) => !prev)}>
					<span>Change Email and Name</span>
				</li>
				<li className=" flex items-center justify-center py-3 text-sm">
					{showChangeEmail ? (
						<div className="rounded-lg w-2/3 border bg-white px-4 pt-8 pb-10 shadow-lg">
							<div className="relative mx-auto  rounded-full">
								<form
									onSubmit={handleSubmit(updateAccount)}
									className="space-y-4 md:space-y-6"
									action="#">
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											New Name
										</label>
										<input
											type="text"
											name="fullName"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Enter your New Name"
											{...register("fullName", {
												required: true,
											})}
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											New Email
										</label>
										<input
											type="text"
											name="fullName"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Enter your New Password"
											{...register("NewPassword", {
												required: true,
											})}
											required=""
										/>
									</div>
									<button
										type="submit"
										className="w-full text-white bg-primary-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
										Update Account Details
									</button>
								</form>
							</div>
						</div>
					) : (
						""
					)}
				</li>
			</ul>
			{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
			{error1 && <p className="text-red-600 mt-8 text-center">{error1}</p>}
			<div className="flex flex-row items-center justify-center space-x-11"></div>
			{/* </div> */}
		</div>
	);
};

export default Settings;
