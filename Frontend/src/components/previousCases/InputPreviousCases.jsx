import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const InputPreviousCases = () => {
	const [error, setError] = useState("");
	const { register, handleSubmit } = useForm();
	const addFunc = async (data) => {
		// event.preventDefault()
		setError("");
		try {
			const newurl = `/api/v1/previous/add`;
			const response = await axios.post(newurl, data);
			// console.log(response);
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<div>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Add Previous case
			</h1>
			{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
			<form className="max-w-md mx-auto" onSubmit={handleSubmit(addFunc)}>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						id="caseId"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						{...register("caseId", {
							required: true,
						})}
						required=""
					/>
					<label
						htmlfor="caseId"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Case ID
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						id="caseSummary"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						{...register("caseSummary", {
							required: true,
						})}
						required=""
					/>
					<label
						htmlfor="caseSummary"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Case Summary
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						id="caseDetail"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						{...register("caseDetail", {
							required: true,
						})}
						required=""
					/>
					<label
						htmlfor="caseDetail"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Case Detail
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						id="outcome"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						{...register("outcome", {
							required: true,
						})}
						required=""
					/>
					<label
						htmlfor="outcome"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Outcome
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						id="penaltyAmount"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						{...register("penaltyAmount", {
							required: true,
						})}
						required=""
					/>
					<label
						htmlfor="penaltyAmount"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Penalty Amount
					</label>
				</div>

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Submit
				</button>
			</form>
		</div>
	);
};

export default InputPreviousCases;
