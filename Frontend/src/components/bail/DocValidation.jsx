/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { React, useState } from "react";
import Regular from "./type/Regular";

export default function DocValidation() {
	const [currentTab, setCurrentTab] = useState("RegularBail");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Selected Bail Type:", currentTab);
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-blue-50 px-4 sm:px-6 lg:px-8">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
				<h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
					Bail Application Form
				</h2>
				<form onSubmit={handleFormSubmit}>
					<div className="border-b border-gray-200 pb-8 md:pb-12">
						<fieldset>
							<legend className="text-xl font-semibold text-gray-900 mb-4">
								Select Bail Type
							</legend>
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{/* Regular Bail */}
								<div className="flex items-center">
									<input
										id="regular-bail"
										name="bail-type"
										type="radio"
										value="RegularBail"
										className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										onChange={() => setCurrentTab("RegularBail")}
										checked={currentTab === "RegularBail"}
									/>
									<label
										htmlFor="regular-bail"
										className="ml-3 block text-sm font-medium text-gray-700">
										Regular Bail
									</label>
								</div>

								{/* Anticipatory Bail */}
								<div className="flex items-center">
									<input
										id="anticipatory-bail"
										name="bail-type"
										type="radio"
										value="AnticipatoryBail"
										className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										onChange={() => setCurrentTab("AnticipatoryBail")}
										checked={currentTab === "AnticipatoryBail"}
									/>
									<label
										htmlFor="anticipatory-bail"
										className="ml-3 block text-sm font-medium text-gray-700">
										Anticipatory Bail
									</label>
								</div>

								{/* Interim Bail */}
								<div className="flex items-center">
									<input
										id="interim-bail"
										name="bail-type"
										type="radio"
										value="InterimBail"
										className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										onChange={() => setCurrentTab("InterimBail")}
										checked={currentTab === "InterimBail"}
									/>
									<label
										htmlFor="interim-bail"
										className="ml-3 block text-sm font-medium text-gray-700">
										Interim Bail
									</label>
								</div>

								{/* Default Bail */}
								<div className="flex items-center">
									<input
										id="default-bail"
										name="bail-type"
										type="radio"
										value="DefaultBail"
										className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										onChange={() => setCurrentTab("DefaultBail")}
										checked={currentTab === "DefaultBail"}
									/>
									<label
										htmlFor="default-bail"
										className="ml-3 block text-sm font-medium text-gray-700">
										Default Bail (Statutory Bail)
									</label>
								</div>
							</div>
						</fieldset>
					</div>

					{currentTab === "RegularBail" ? <Regular /> : ""}
					{currentTab === "Settings" ? <Settings /> : ""}
					{currentTab === "Contact" ? <Contact /> : ""}
					{currentTab === "DashBoard" ? <PreviousCase /> : ""}

					{/* Submit and Cancel Buttons */}
					<div className="border-t border-gray-200 pt-8">
						<div className="flex gap-x-4 justify-end">
							<button
								type="submit"
								className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
								Save
							</button>
							<button
								type="button"
								className="inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
