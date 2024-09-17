import React from "react";
import { useNavigate } from "react-router-dom";

const RowDataCard = ({ provider }) => {
	const navigate = useNavigate();
	console.log(provider);
	return (
		<div
			className="mx-auto w-2/3 bg-red-100 border rounded-2xl m-3  "
			onClick={() => navigate("/p/profile/" + provider.profile._id)}>
			<div className="flex p-3 justify-between gap-x-6 py-5">
				<div className="flex min-w-0 gap-x-4">
					<img
						alt={provider.fullName}
						src={provider.avatar}
						className="h-12 w-12 flex-none rounded-full bg-gray-50"
					/>
					<div className="min-w-0 flex-auto">
						<p className="text-sm font-semibold leading-6 text-gray-900">
							{provider.fullName}
						</p>
						<p className="mt-1 truncate text-xs leading-5 text-gray-500">
							{provider.email}
						</p>
						<p className="mt-1 truncate text-xs leading-5 text-gray-500">
							{provider.profile.phone}
						</p>
						{/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">
							{provider.Specialization}
						</p> */}
					</div>
				</div>
				<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
					<p className="text-sm leading-6 text-gray-900">{provider.role}</p>
					{provider.OperatingHours ? (
						<p className="mt-1 text-xs leading-5 text-gray-500">
							Weekdays: {provider.profile.operatingHours.weekdays} <br />
							Weekends: {provider.profile.operatingHours.weekends}
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
			</div>
		</div>
	);
};

export default RowDataCard;
