import React from "react";
import { useSelector, connect } from "react-redux";

const IfNoBail = ({ darkMode }) => {
	const status = useSelector((state) => state.auth.status);
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
