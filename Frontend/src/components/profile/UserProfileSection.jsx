import React from "react";
import { useSelector } from "react-redux";
import  UploadProfilePic from "./UploadProfilePic";

const UserProfileSection = () => {
	const userData = useSelector((state) => state.auth.userData);
	return (
		<div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
			<div className="relative mx-auto w-36 rounded-full">
				<img
					className="mx-auto h-auto w-full rounded-full"
					src={userData.avatar}
					alt=""
				/>
				<UploadProfilePic />
			</div>

			<ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
				<li className="flex items-center py-3 text-sm">
					<span>Joined On</span>
					<span className="ml-auto">{userData.createdAt}</span>
				</li>
				<li className="flex items-center py-3 text-sm">
					<span>Name </span>
					<span className="ml-auto">{userData.fullName}</span>
				</li>
				<li className="flex items-center py-3 text-sm">
					<span>Email </span>
					<span className="ml-auto">{userData.email}</span>
				</li>
				<li className="flex items-center py-3 text-sm">
					<span>Role </span>
					<span className="ml-auto">{userData.role}</span>
				</li>
			</ul>
		</div>
	);
};
export default UserProfileSection;
