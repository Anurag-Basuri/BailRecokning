/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function BailEligiblity() {
	const [dob, setDob] = useState("");
	const [age, setAge] = useState("");

	const calculateAge = (dateOfBirth) => {
		if (!dateOfBirth) return "";
		const dobDate = new Date(dateOfBirth);
		const today = new Date();
		let age = today.getFullYear() - dobDate.getFullYear();
		const monthDifference = today.getMonth() - dobDate.getMonth();

		if (
			monthDifference < 0 ||
			(monthDifference === 0 && today.getDate() < dobDate.getDate())
		) {
			age--;
		}

		return age > 0 ? age : "";
	};

	const handleDobChange = (event) => {
		const selectedDob = event.target.value;
		setDob(selectedDob);
		setAge(calculateAge(selectedDob));
	};

	/*For showing States of India*/
	const statesOfIndia = [
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chhattisgarh",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana",
		"Tripura",
		"Uttar Pradesh",
		"Uttarakhand",
		"West Bengal",
	];

	// const stateSelect = document.getElementById("State");
	// statesOfIndia.forEach((state) => {
	// 	const option = document.createElement("option");
	// 	option.value = state;
	// 	option.textContent = state;
	// 	stateSelect.appendChild(option);
	// });

	return (
		<form className="p-10">
			<div className="space-y-12">
				{/*Personal Information*/}
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Personal Information
					</h2>

					<div className="mt-3 p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						{/*For Full Name of the accused*/}
						<div className="sm:col-span-4">
							<label
								htmlFor="fullname"
								className="block text-sm font-medium leading-6 text-gray-900">
								Full Name
							</label>
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
								<input
									id="fullrname"
									name="fullname"
									type="text"
									placeholder="Salman Khan"
									autoComplete="fullname"
									className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						{/*Date of Birth*/}
						<div className="col-span-full">
							<label
								htmlFor="dob"
								className="block text-sm font-medium leading-6 text-gray-900">
								Date of Birth
							</label>
							<div>
								<input
									type="date"
									id="dob"
									name="dob"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={dob}
									onChange={handleDobChange}
								/>
							</div>
							<label
								htmlFor="age"
								className="mt-2 block text-sm font-medium leading-6 text-gray-900">
								Age
							</label>
							<div>
								<input
									type="text"
									id="age"
									name="age"
									readOnly
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
									value={age}
								/>
							</div>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								Your age will be calculated based on the selected date of birth.
							</p>
						</div>

						{/*Gender Selection*/}
						<fieldset className="col-span-full mt-4">
							<legend className="text-sm font-semibold leading-6 text-gray-900">
								Gender
							</legend>

							<div className="mt-2">
								<div className="flex items-center gap-x-3">
									<input
										id="Gender"
										name="Gender"
										type="radio"
										className="h-3 w-3 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-everything"
										className="block text-sm font-small leading-6 text-gray-800">
										Male
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="Gender"
										name="Gender"
										type="radio"
										className="h-3 w-3 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-everything"
										className="block text-sm font-small leading-6 text-gray-800">
										Female
									</label>
								</div>
							</div>
						</fieldset>

						{/*Address*/}

						{/*State*/}
						<div className="col-span-full">
							<label
								htmlFor="State"
								className="block text-sm font-medium leading-6 text-gray-900">
								State
							</label>
							<div className="mt-2">
								<select
									id="State"
									name="State"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
									<option value="" disabled selected>
										Select your state
									</option>
								</select>
							</div>
						</div>

						{/*City*/}
						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="city"
								className="block text-sm font-medium leading-6 text-gray-900">
								City
							</label>
							<div className="mt-2">
								<input
									id="city"
									name="city"
									type="text"
									autoComplete="address-level2"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						{/*Postal Code*/}
						<div className="sm:col-span-2">
							<label
								htmlFor="postal-code"
								className="block text-sm font-medium leading-6 text-gray-900">
								ZIP / Postal code
							</label>
							<div className="mt-2">
								<input
									id="postal-code"
									name="postal-code"
									type="text"
									autoComplete="postal-code"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>
				{/*Personal Information End*/}

				<div></div>
			</div>
		</form>
	);
}
