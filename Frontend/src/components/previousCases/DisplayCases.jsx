import React from "react";

export default function DisplayCases({ pr }) {
	return (
		<div className="flex  flex-col items-center py-3 text-sm">
			<div className="z-0 w-full mb-5 group">
				<p>Case ID</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					{pr.caseId}
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Case Summary</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					{pr.caseSummary}
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Case Detail</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					{pr.caseDetail}
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Outcome</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					{pr.outcome}
				</p>
			</div>
			<div className="z-0 w-full mb-5 group">
				<p>Penalty</p>
				<p className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-600">
					{pr.penaltyAmount}
				</p>
			</div>
		</div>
	);
}
