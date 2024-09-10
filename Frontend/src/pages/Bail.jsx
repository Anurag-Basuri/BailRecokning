import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BailEligiblity } from "../components/index";

const Bail = () => {
	const { bailId } = useParams();
	const [charge, setCharge] = useState("");
	const [allCharge, setAllCharge] = useState([]);

	const onchangeHandler = (event) => {
		const value = event.target.value;
		setCharge(value);
	};
	const addCharge = async () => {
		const response = await axios.post("/api/v1/charge/add", { bailId, charge });
		const response2 = await axios.get("/api/v1/charge/b/" + bailId);
		// console.log(response.data.data);
		// console.log(response2.data.data);
		setAllCharge(response2.data.data);
	};
	const removeCharges = async (id) => {
		const response = await axios.post("/api/v1/charge/" + id);
		const response2 = await axios.get("/api/v1/charge/b/" + bailId);
		setAllCharge(response2.data.data);
	};
	const getLaws = async () => {
		const newArray = allCharge.map((all) => `${all.charge}`);
		// const newCharges2 = newCharges.map((charge) => charge.replace(/"/g, ""));
		console.log(newArray);
		// console.log(newCharges2);
		const response3 = await axios.get("/api/v1/law/searchs/law", {
			sections: newArray,
		});
		console.log(response3.data.data);
	};
	const newArray = allCharge.map((all) => `"${all.charge}"`);
	useEffect(() => {
		const func = async () => {
			const response = await axios.get("/api/v1/bail/" + bailId);
			const response2 = await axios.get("/api/v1/charge/b/" + bailId);
			setAllCharge(response2.data.data);
		};
		func();
	}, []);

	return (
		<>
			<div className="mx-auto w-1/2 mt-28 rounded overflow-hidden shadow-lg">
				<div className="border-b border-gray-200 dark:border-gray-700">
					<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
						<li className="me-2">
							<a
								href="#"
								className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
								<svg
									className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
								</svg>
								Profile
							</a>
						</li>
						<li className="me-2">
							<a
								href="#"
								className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
								aria-current="page">
								<svg
									className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 18">
									<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
								</svg>
								Dashboard
							</a>
						</li>
						<li className="me-2">
							<a
								href="#"
								className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
								<svg
									className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
								</svg>
								Settings
							</a>
						</li>
						<li className="me-2">
							<a
								href="#"
								className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
								<svg
									className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 20">
									<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
								</svg>
								Contacts
							</a>
						</li>
						<li>
							<a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
								Disabled
							</a>
						</li>
					</ul>
				</div>
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
				<div
					className="text-white inline mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={() => getLaws()}>
					get laws
				</div>
				<div className="mt-10 mx-16">all the charges</div>
				<BailEligiblity />
			</div>
		</>
	);
};

export default Bail;
