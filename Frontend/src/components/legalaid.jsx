/* eslint-disable no-unused-vars */
import React from "react";

export default function LegalAid( ) {
	const lawyer = [
		{
			Name: "N/A",
			Phone: "123-456-7890",
			Email:"N/A",
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
		<main>
			<header>
				<h1>Legal Aid Providers</h1>
			</header>
			<section>
				{lawyer.map((provider) => (
					<li
						key={provider.Email}
						className="flex justify-between gap-x-6 py-5">
						<div className="flex min-w-0 gap-x-4">
							<img
								alt={provider.Name}
								src={provider.imageUrl}
								className="h-12 w-12 flex-none rounded-full bg-gray-50"
							/>
							<div className="min-w-0 flex-auto">
								<p className="text-sm font-semibold leading-6 text-gray-900">
									{provider.Name}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{provider.Email}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{provider.Phone}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{provider.Specialization}
								</p>
							</div>
						</div>
						<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
							<p className="text-sm leading-6 text-gray-900">{provider.role}</p>
							{provider.OperatingHours ? (
								<p className="mt-1 text-xs leading-5 text-gray-500">
									Weekdays: {provider.OperatingHours.Weekdays} <br />
									Weekends: {provider.OperatingHours.Weekends}
								</p>
							) : (
								<div className="mt-1 flex items-center gap-x-1.5">
									<div className="flex-none rounded-full bg-emerald-500/20 p-1">
										<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
									</div>
									<p className="text-xs leading-5 text-gray-500">Online</p>
								</div>
							)}
						</div>
					</li>
				))}
			</section>
		</main>
	);
}
