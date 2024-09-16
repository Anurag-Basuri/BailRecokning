import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
	DisplayCases,
	InputPreviousCases,
	PreviousCase,
	UploadProfilePic,
	Settings,
	Contact,
	EditProfile,
	UserProfileSection,
} from "../../index";

const UserProfile = () => {
	const userData = useSelector((state) => state.auth.userData);
	const [currentTab, setCurrentTab] = useState("Profile");
	return (
		<div className="mx-auto w-5/6 mt-28 rounded overflow-hidden shadow-lg">
			<div className="md:flex">
				<ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
					<li>
						<div
							className={`inline-flex items-center px-4 py-3 ${
								currentTab === "Profile"
									? "bg-blue-700 text-white "
									: "bg-gray-50"
							}hover:text-gray-900  hover:bg-gray-100  rounded-lg active w-full dark:bg-blue-600`}
							onClick={() => setCurrentTab("Profile")}>
							<svg
								className="w-4 h-4 me-2 "
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
							</svg>
							Profile
						</div>
					</li>
					<li>
						<div
							className={`inline-flex items-center px-4 py-3 rounded-lg ${
								currentTab === "DashBoard"
									? "bg-blue-700 text-white "
									: "bg-gray-50"
							}hover:text-gray-900  hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
							onClick={() => setCurrentTab("DashBoard")}>
							<svg
								className="w-4 h-4 me-2  dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 18 18">
								<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
							</svg>
							Dashboard
						</div>
					</li>
					<li>
						<div
							className={`inline-flex items-center px-4 py-3 rounded-lg ${
								currentTab === "Settings"
									? "bg-blue-700 text-white "
									: "bg-gray-50"
							}hover:text-gray-900  hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
							onClick={() => setCurrentTab("Settings")}>
							<svg
								className="w-4 h-4 me-2  dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
							</svg>
							Settings
						</div>
					</li>
					<li>
						<div
							className={`inline-flex items-center px-4 py-3 rounded-lg ${
								currentTab === "Contact"
									? "bg-blue-700 text-white "
									: "bg-gray-50"
							}hover:text-gray-900  hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
							onClick={() => setCurrentTab("Contact")}>
							<svg
								className="w-4 h-4 me-2  dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
								<path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
							</svg>
							Contact
						</div>
					</li>
					<li>
						<div
							className="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg  bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500"
							onClick={() => setCurrentTab("Disabled")}>
							<svg
								className="w-4 h-4 me-2 text-gray-400 dark:text-gray-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
							</svg>
							edit profile
						</div>
					</li>
				</ul>

				{currentTab === "Profile" ? <UserProfileSection /> : ""}
				{currentTab === "Settings" ? <Settings /> : ""}
				{currentTab === "Contact" ? <Contact /> : ""}
				{currentTab === "DashBoard" ? <PreviousCase /> : ""}
				{currentTab === "Disabled" ? <EditProfile /> : ""}
			</div>
		</div>
	);
};

export default UserProfile;
