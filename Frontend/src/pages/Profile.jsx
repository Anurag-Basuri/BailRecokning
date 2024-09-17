import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LawyerProfile, UserProfile } from "../components";

const Profile = () => {
	useEffect(() => {
		const userData = useSelector((state) => state.auth.userData);
	}, []);
	return (
		<div>
			{userData.role === "Lawyer" ? <LawyerProfile /> : ""}
			{userData.role === "User" ? <UserProfile /> : ""}
			{userData.role === "Judge" ? "" : ""}
		</div>
	);
};

export default Profile;
