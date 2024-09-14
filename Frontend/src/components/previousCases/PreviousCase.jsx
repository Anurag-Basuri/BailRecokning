import React, { useEffect, useState } from "react";
import { InputPreviousCases, DisplayCases } from "../index";
import axios from "axios";

const PreviousCase = () => {
	const [previousCases, setPreviousCases] = useState([]);
	useEffect(() => {
		try {
			const func = async () => {
				const response = await axios.get("/api/v1/previous/allbyuser");
				console.log(response.data.data.previous);
				setPreviousCases(response.data.data.previous);
			};
			func();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				All Previous case
			</h1>
			<div className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
				{previousCases.map((pr, id) => {
					return (
						<div key={id}>
							<DisplayCases pr={pr} />;
						</div>
					);
				})}
			</div>
			<div className="mt-6">
				<InputPreviousCases />
			</div>
		</div>
	);
};

export default PreviousCase;
