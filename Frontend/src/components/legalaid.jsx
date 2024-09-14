/* eslint-disable no-unused-vars */
import React from "react";
import RowDataCard from "./RowDataCard";

export default function LegalAid() {
	const lawyer = [
		{
			Name: "N/A",
			Phone: "123-456-7890",
			Email: "N/A",
			Address: "123 Main St, City, Country",
			Specialization: "Criminal Law",
			License: "ABC12345",
			Languages: ["English", "Spanish"],
			Website: "http://www.xyzlegalaid.com",
			SocialMedia: {
				Facebook: "http://facebook.com/xyzlegalaid",
				Twitter: "@xyzlegalaid",
			},
			OperatingHours: {
				Weekdays: "9 AM - 5 PM",
				Weekends: "Closed",
			},
			Accreditation: [
				"State Bar Association",
				"National Legal Aid Association",
			],
			imageUrl: "https://via.placeholder.com/150",
			role: "Criminal Lawyer",	
		},
	];

	return (
		<div>
			<div className="flex flex-row justify-center items-center">
				<h1>Search </h1>
				<input
					className="border w-full p-2 rounded"
					type="text"
					name=""
					id=""
				/>
				<button>submit</button>
			</div>
			<section>
				{lawyer.map((provider, id) => (
					<div key={id}>
						<RowDataCard provider={provider} />
					</div>
				))}
			</section>
		</div>
	);
}
