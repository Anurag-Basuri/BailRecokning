import React, { useState } from "react";

const YourFormComponent = () => {
	const [useBackendAddress, setUseBackendAddress] = useState(false);
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [dependents, setDependents] = useState("");
	const [hasMotherFather, setHasMotherFather] = useState("");
	const [isMarried, setIsMarried] = useState("");
	const [childrenCount, setChildrenCount] = useState("");

	// Event Handlers
	const handleStateChange = (e) => setState(e.target.value);
	const handleCityChange = (e) => setCity(e.target.value);
	const handlePostalCodeChange = (e) => setPostalCode(e.target.value);
	const handleDependentsChange = (e) => setDependents(e.target.value);
	const handleMotherFatherChange = (e) => setHasMotherFather(e.target.value);
	const handleMarriedChange = (e) => setIsMarried(e.target.value);
	const handleChildrenCountChange = (e) => setChildrenCount(e.target.value);

	return (
		<form className="p-10">
			{/* Personal Information */}
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Personal Information (Aadhaar Fetched)
					</h2>

					<div className="mt-3 p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						{/* Full Name */}
						<div className="sm:col-span-4">
							<label
								htmlFor="fullname"
								className="block text-sm font-medium leading-6 text-gray-900">
								Full Name
							</label>
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
								<input
									id="fullname"
									name="fullname"
									type="text"
									placeholder="Salman Khan"
									autoComplete="fullname"
									className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									disabled
								/>
							</div>
						</div>

						{/* Date of Birth */}
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									disabled
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						{/* Gender */}
						<fieldset className="col-span-full mt-4">
							<legend className="text-sm font-semibold leading-6 text-gray-900">
								Gender
							</legend>
							<div className="mt-2">
								<input
									name="gender"
									type="radio"
									checked
									disabled
									className="h-3 w-3 border-gray-300 text-indigo-600"
								/>
								<label className="ml-3 block text-sm font-medium leading-6 text-gray-800">
									Male
								</label>
							</div>
						</fieldset>
					</div>
				</div>

				{/* Address Section */}
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Address
					</h2>

					<div className="mb-4">
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								id="useBackendAddress"
								checked={useBackendAddress}
								onChange={() => setUseBackendAddress(!useBackendAddress)}
								className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
							/>
							<span className="ml-2 text-sm font-medium text-gray-900">
								Use address from Aadhaar
							</span>
						</label>
					</div>

					<div
						className={`grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ${
							useBackendAddress ? "opacity-50" : ""
						}`}>
						{/* State */}
						<div className="col-span-full">
							<label
								htmlFor="state"
								className="block text-sm font-medium leading-6 text-gray-900">
								State
							</label>
							<div className="mt-2">
								<select
									id="state"
									name="state"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={state}
									onChange={handleStateChange}
									disabled={useBackendAddress}>
									<option value="" disabled>
										Select your state
									</option>
								</select>
							</div>
						</div>

						{/* City */}
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={city}
									onChange={handleCityChange}
									disabled={useBackendAddress}
								/>
							</div>
						</div>

						{/* Postal Code */}
						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="postalCode"
								className="block text-sm font-medium leading-6 text-gray-900">
								Postal Code
							</label>
							<div className="mt-2">
								<input
									id="postalCode"
									name="postalCode"
									type="text"
									autoComplete="postal-code"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={postalCode}
									onChange={handlePostalCodeChange}
									disabled={useBackendAddress}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Case Details */}
				<div className="border-b border-gray-900/10 pb-12 mt-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Case Details
					</h2>

					<div className="mt-3 p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						{/* Offense Description */}
						<div className="col-span-full">
							<label
								htmlFor="offense-description"
								className="block text-sm font-medium leading-6 text-gray-900">
								Description of the Offense
							</label>
							<textarea
								id="offense-description"
								name="offense-description"
								rows="3"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						{/* Dependents */}
						<div className="col-span-full">
							<label
								htmlFor="dependents"
								className="block text-sm font-medium leading-6 text-gray-900">
								Number of Dependents
							</label>
							<div className="mt-2">
								<input
									id="dependents"
									name="dependents"
									type="text"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={dependents}
									onChange={handleDependentsChange}
								/>
							</div>
						</div>

						{/* Mother/Father */}
						<div className="col-span-full">
							<label
								htmlFor="hasMotherFather"
								className="block text-sm font-medium leading-6 text-gray-900">
								Do you have any dependents?
							</label>
							<div className="mt-2">
								<select
									id="hasMotherFather"
									name="hasMotherFather"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={hasMotherFather}
									onChange={handleMotherFatherChange}>
									<option value="" disabled>
										Select an option
									</option>
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
						</div>

						{/* Marital Status */}
						<div className="col-span-full">
							<label
								htmlFor="marital-status"
								className="block text-sm font-medium leading-6 text-gray-900">
								Marital Status
							</label>
							<div className="mt-2">
								<select
									id="marital-status"
									name="marital-status"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={isMarried}
									onChange={handleMarriedChange}>
									<option value="" disabled>
										Select an option
									</option>
									<option value="Married">Married</option>
									<option value="Single">Single</option>
									<option value="Divorced">Divorced</option>
								</select>
							</div>
						</div>

						{/* Children Count */}
						<div className="col-span-full">
							<label
								htmlFor="childrenCount"
								className="block text-sm font-medium leading-6 text-gray-900">
								Number of Children
							</label>
							<div className="mt-2">
								<input
									id="childrenCount"
									name="childrenCount"
									type="number"
									min="0"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={childrenCount}
									onChange={handleChildrenCountChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default YourFormComponent;
