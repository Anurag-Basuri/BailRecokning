import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateNewBail = ({ allUserBails }) => {
	const navigate = useNavigate();
	const addBail = async () => {
		const response = await axios.get("/api/v1/bail/add");

		console.log(response.data.data);
		navigate("/bail/" + response.data.data._id);
	};
	return (
		<div className="text-black mt-14 block text-3xl h-80v">
			<div
				className="inline p-1  rounded bg-blue-600 w-30 text-white"
				onClick={() => addBail()}>
				Create
			</div>
			<div className="inline">
				{" "}
				to start an another bail application Process
			</div>
		</div>
	);
};

export default connect((state) => ({ darkMode: state.mode.darkMode }))(
	CreateNewBail
);
