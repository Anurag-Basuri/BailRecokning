/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import RowDataCard from "./RowDataCard";
import axios from "axios";

export default function LegalAid() {
	const [lawyers, setLawyers] = useState([]);
	useEffect(() => {
		try {
			const func = async () => {
				const response = await axios.get("/api/v1/profile/l/all/active");
				console.log(response.data.data.profile);
				setLawyers(response.data.data.profile);
			};
			func();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div>
			<div className="flex flex-row justify-center p-3 space-x-5 items-center mx-auto w-2/3 bg-red-100 border rounded-2xl m-3 ">
				<h1 className="hidden md:block lg:block">Search </h1>
				<input
					className="border w-full p-2 rounded"
					type="text"
					name=""
					id=""
				/>
				<button
					type="button"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
					Submit
				</button>
			</div>
			<section>
				{lawyers.map((provider, id) => (
					<div key={id}>
						<RowDataCard provider={provider} />
					</div>
				))}
			</section>
		</div>
	);
}
