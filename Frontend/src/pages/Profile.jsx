/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";

import { JudgeProfile, LawyerProfile, UserProfile } from "../components";
import { connect } from "react-redux";

const Profile = ({ darkMode, userData }) => {
	return (
		<div>
			{userData.role === "Lawyer" ? <LawyerProfile /> : ""}
			{userData.role === "User" ? <UserProfile /> : ""}
			{userData.role === "Judge" ? <JudgeProfile /> : ""}
		</div>
	);
};

export default connect((state) => ({
	darkMode: state.mode.darkMode,
	userData: state.auth.userData,
}))(Profile);
