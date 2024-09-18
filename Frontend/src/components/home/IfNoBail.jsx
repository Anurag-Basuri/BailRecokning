import React from "react";
import { useSelector, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const IfNoBail = ({ darkMode }) => {
	const status = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const toCreate = async () => {
		const response = await axios.get("/api/v1/bail/add");

		console.log(response.data.data);
		navigate("/bail/" + response.data.data._id);
	};

	return (
		<h1 className=" text-black mt-20 text-3xl flex justify-center items-center h-80v ">
			{status ? (
				<div>
					No Bail application Exist -
					<span className="hover:text-blue-400" onClick={() => toCreate()}>
						Create now
					</span>
				</div>
			) : (
				"Please Login to access bail application"
			)}
		</h1>
	);
};
export default connect((state) => ({ darkMode: state.mode.darkMode }))(
	IfNoBail
);
