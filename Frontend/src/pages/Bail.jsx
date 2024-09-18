/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	BailCharges,
	BailEligiblity,
	DocValidation,
	LegalAid,
	Timeline,
} from "../components/index";

const Bail = () => {
	const { bailId } = useParams();
	const navigate = useNavigate();
	const [currentTab, setCurrentTab] = useState("Charges");

	return (
		<div className="mx-auto w-full max-w-7xl mt-28 rounded overflow-hidden shadow-lg">
			<div className="border-b border-gray-200 dark:border-gray-700">
				<ul className="flex justify-center flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
					{[
						"Timeline",
						"Charges",
						"DashBoard",
						"Documents",
						"Lawyers",
					].map((tab) => (
						<li className="w-full sm:w-auto mb-2 sm:mb-0" key={tab}>
							<div
								className={`inline-flex items-center justify-center p-4
          ${
						currentTab === tab
							? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
							: "hover:text-gray-600 border-transparent hover:border-gray-300 dark:hover:text-gray-300"
					} border-b-2 rounded-t-lg group`}
								onClick={() => setCurrentTab(tab)}>
								<svg
									className={`w-4 h-4 me-2 ${
										currentTab === tab
											? "text-blue-600 dark:text-blue-500"
											: "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
									}`}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20">
									{/* Icon path */}
									<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
								</svg>
								{tab}
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className="p-4">
				{currentTab === "Charges" && <BailCharges />}
				{currentTab === "DashBoard" && <BailEligiblity />}
				{currentTab === "Documents" && <DocValidation />}
				{currentTab === "Lawyers" && <LegalAid />}
				{currentTab === "Timeline" && <Timeline />}
			</div>
		</div>
	);
};

export default Bail;
