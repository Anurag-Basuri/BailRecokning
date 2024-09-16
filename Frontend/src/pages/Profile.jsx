import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LawyerProfile, UserProfile } from "../components";

const Profile = () => {
	const userData = useSelector((state) => state.auth.userData);
	const [currentTab, setCurrentTab] = useState("Profile");
	return (
		<div>
			{userData.role === "Lawyer" ? <LawyerProfile /> : ""}
			{userData.role === "User" ? <UserProfile /> : ""}
			{userData.role === "Judge" ? "" : ""}
		</div>
	);
};

export default Profile;
