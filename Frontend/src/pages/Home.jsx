/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
	HomeCard,
	RenameCard,
	Introduction,
	DisplayBox,
	AllBailHome,
} from "../components/index.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const Home = ({ darkMode }) => {
	return (
		<>
			<AllBailHome />
			<div className="h-80v px-6 pt-4 pb-2  mt-16 flex flex-row flex-wrap justify-center mx-auto w-full">
				api support docs
			</div>
		</>
	);
};

export default connect((state) => ({ darkMode: state.mode.darkMode }))(Home);
