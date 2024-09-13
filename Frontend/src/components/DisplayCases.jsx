/* eslint-disable no-unused-vars */
import React from "react";

export default function DisplayCases() {
	return (
		<div>
			<div className="z-0 w-full mb-5 group">
				<p>Case ID</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					Case ID: 12345
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Case Summary</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					Case Summary: This is a summary of the case.
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Case Detail</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					Case Detail: Detailed information about the case.
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Outcome</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					Outcome: The case outcome goes here.
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Penalty</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					Penalty Amount: $5000
				</p>
			</div>
		</div>
	);
}
