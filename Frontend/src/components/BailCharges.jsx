import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BailCharges() {
	const { bailId } = useParams();
	const [charge, setCharge] = useState("");
	const [allCharge, setAllCharge] = useState([]);

	const onchangeHandler = (event) => {
		const value = event.target.value;
		setCharge(value);
	};
	const addCharge = async () => {
		const response = await axios.post("/api/v1/charge/add", {
			bailId,
			charge,
		});
		const response2 = await axios.get("/api/v1/charge/b/l/" + bailId);
		setAllCharge(response2.data.data);
	};
	const removeCharges = async (id) => {
		const response = await axios.post("/api/v1/charge/" + id);
		const response2 = await axios.get("/api/v1/charge/b/l/" + bailId);
		setAllCharge(response2.data.data);
	};

	useEffect(() => {
		const func = async () => {
			// const response = await axios.get("/api/v1/bail/" + bailId);
			const response2 = await axios.get("/api/v1/charge/b/l/" + bailId);
			setAllCharge(response2.data.data);
			console.log(response2.data.data);
		};
		func();
	}, []);

	return (
		<div>
			<div className="mt-16 mx-16 flex flex-row flex-wrap">
				<h1 className="inline">Add Charges</h1>
				<input
					type="text"
					className={`px-3 mx-5 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-1/2 `}
					onChange={onchangeHandler}
				/>

				<div
					className="text-white inline mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={() => addCharge()}>
					add
				</div>
			</div>
			<div className="mt-16 mx-16 flex flex-row flex-wrap">
				<h1 className="inline">ALL Charges:- </h1>
				<br />
				{allCharge.map((charge, id) => {
					return (
						<div className="flex" key={id}>
							<div className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
								{charge.charge}{" "}
								<span
									className="p-2 hover:bg-gradient-to-br"
									onClick={() => removeCharges(charge._id)}>
									X
								</span>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-10 mx-16">all the charges</div>
			{allCharge.map((charge, id) => {
				return (
					<div
						key={id}
						className="h-80v px-6 pt-4 pb-2  mt-16 flex flex-row flex-wrap justify-center mx-auto w-full">
						<div className="block mx-3  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{charge.lawBySection.lawName}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Law name
							</p>
						</div>
						<div className="block  mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{charge.lawBySection.section}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Section
							</p>
						</div>
						<div className="block  mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{charge.lawBySection.sectionTitle}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Section Title
							</p>
						</div>
						<div className="block  mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{charge.lawBySection.sectionDesc}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Section
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default BailCharges;
