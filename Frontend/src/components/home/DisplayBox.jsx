import React from "react";

const DisplayBox = ({ darkMode, textSmall, textBig }) => {
	return (
		<div
			className={`block mx-3  max-w-sm p-6  rounded-lg shadow hover:bg-gray-100 ${
				darkMode
					? "bg-gray-800 border-gray-700 hover:bg-gray-700"
					: "bg-white border border-gray-200"
			} `}>
			<h5
				className={`mb-2  text-2xl font-bold tracking-tight text-gray-900 ${
					darkMode ? "text-white" : ""
				}`}>
				{" "}
				{textBig}
			</h5>
			<p
				className={`font-normal ${
					darkMode ? "text-gray-400" : "text-gray-700"
				} `}>
				{textSmall}
			</p>
		</div>
	);
};

    export default DisplayBox;
