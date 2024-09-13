import React, { useState } from "react";

// Reusable Input Component
const InputField = ({
	id,
	name,
	type,
	placeholder,
	value,
	onChange,
	disabled,
	readOnly,
	...props
}) => (
	<div className="sm:col-span-4">
		<label
			htmlFor={id}
			className="block text-sm font-medium leading-6 text-gray-900">
			{props.label}
		</label>
		<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				autoComplete={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
				readOnly={readOnly}
				className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
				{...props}
			/>
		</div>
	</div>
);

// Reusable Select Component
const SelectField = ({
	id,
	name,
	options,
	value,
	onChange,
	disabled,
	...props
}) => (
	<div className="col-span-full">
		<label
			htmlFor={id}
			className="block text-sm font-medium leading-6 text-gray-900">
			{props.label}
		</label>
		<select
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			disabled={disabled}
			className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text-sm sm:leading-6">
			<option value="" disabled>
				Select an option
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</div>
);

// Main Form Component
const UserForm = () => {
	const [formState, setFormState] = useState({
		fullname: "",
		dob: "",
		age: "",
		gender: "Male",
		state: "",
		city: "",
		postalCode: "",
		useBackendAddress: false,
		offenseDescription: "",
		ipcSection: "",
		healthIssues: "",
		healthIssuesDetails: "",
		otherLegalCases: "",
		legalCasesDetails: "",
		violenceThreat: "",
		dependents: "",
		hasMotherFather: "",
		isMarried: "",
		childrenCount: 0,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formState);
		// Example: You could send formState to an API here
	};

	const {
		useBackendAddress,
		dependents,
		isMarried,
		healthIssues,
		otherLegalCases,
		violenceThreat,
	} = formState;

	return (
		<form className="p-10" onSubmit={handleSubmit}>
			{/* Personal Information */}
			<div className="border-b border-gray-900/10 pb-12">
				<h2 className="text-base font-semibold leading-7 text-gray-900">
					Personal Information (Aadhaar Fetched)
				</h2>
				<div className="mt-3 p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<InputField
						id="fullname"
						name="fullname"
						type="text"
						placeholder="Salman Khan"
						value={formState.fullname}
						disabled
						label="Full Name"
					/>
					<InputField
						id="dob"
						name="dob"
						type="date"
						value={formState.dob}
						disabled
						label="Date of Birth"
					/>
					<InputField
						id="age"
						name="age"
						type="text"
						value={formState.age}
						readOnly
						label="Age"
					/>
					<fieldset className="col-span-full mt-4">
						<legend className="text-sm font-semibold leading-6 text-gray-900">
							Gender
						</legend>
						<div className="mt-2">
							<input
								name="gender"
								type="radio"
								checked={formState.gender === "Male"}
								onChange={handleChange}
								value="Male"
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
							name="useBackendAddress"
							checked={formState.useBackendAddress}
							onChange={handleChange}
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
					<SelectField
						id="state"
						name="state"
						value={formState.state}
						onChange={handleChange}
						disabled={useBackendAddress}
						options={[
							{ value: "", label: "Select your state" },
							// Add states options here
						]}
						label="State"
					/>
					<InputField
						id="city"
						name="city"
						type="text"
						placeholder="City"
						value={formState.city}
						onChange={handleChange}
						disabled={useBackendAddress}
						label="City"
					/>
					<InputField
						id="postalCode"
						name="postalCode"
						type="text"
						placeholder="Postal Code"
						value={formState.postalCode}
						onChange={handleChange}
						disabled={useBackendAddress}
						label="Postal Code"
					/>
				</div>
			</div>

			{/* Case Details */}
			<div className="border-b border-gray-900/10 pb-12 mt-12">
				<h2 className="text-base font-semibold leading-7 text-gray-900">
					Case Details
				</h2>
				<div className="mt-3 p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<div className="col-span-full">
						<label
							htmlFor="offense-description"
							className="block text-sm font-medium leading-6 text-gray-900">
							Description of the Offense
						</label>
						<textarea
							id="offense-description"
							name="offenseDescription"
							rows="4"
							placeholder="Describe the charges or offense"
							value={formState.offenseDescription}
							onChange={handleChange}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
					</div>
					<InputField
						id="ipc-section"
						name="ipcSection"
						type="text"
						placeholder="e.g., IPC Section 420"
						value={formState.ipcSection}
						onChange={handleChange}
						label="Section (if known)"
					/>
					<SelectField
						id="health-issues"
						name="healthIssues"
						value={formState.healthIssues}
						onChange={handleChange}
						options={[
							{ value: "Yes", label: "Yes" },
							{ value: "No", label: "No" },
						]}
						label="Serious Health Issues"
					/>
					{formState.healthIssues === "Yes" && (
						<div className="col-span-full mt-2">
							<label
								htmlFor="health-issues-details"
								className="block text-sm font-medium leading-6 text-gray-900">
								Details of Health Issues
							</label>
							<textarea
								id="health-issues-details"
								name="healthIssuesDetails"
								rows="2"
								placeholder="Describe the health issues"
								value={formState.healthIssuesDetails}
								onChange={handleChange}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
						</div>
					)}
					<SelectField
						id="other-legal-cases"
						name="otherLegalCases"
						value={formState.otherLegalCases}
						onChange={handleChange}
						options={[
							{ value: "Yes", label: "Yes" },
							{ value: "No", label: "No" },
						]}
						label="Other Legal Cases"
					/>
					{formState.otherLegalCases === "Yes" && (
						<div className="col-span-full mt-2">
							<label
								htmlFor="legal-cases-details"
								className="block text-sm font-medium leading-6 text-gray-900">
								Details of Other Legal Cases
							</label>
							<textarea
								id="legal-cases-details"
								name="legalCasesDetails"
								rows="2"
								placeholder="Describe other legal cases"
								value={formState.legalCasesDetails}
								onChange={handleChange}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
						</div>
					)}
					<SelectField
						id="violence-threat"
						name="violenceThreat"
						value={formState.violenceThreat}
						onChange={handleChange}
						options={[
							{ value: "Yes", label: "Yes" },
							{ value: "No", label: "No" },
						]}
						label="Violence or Threat to Victims"
					/>
				</div>
			</div>

			{/* Family Dependents */}
			<div className="border-b border-gray-900/10 pb-12 mt-12">
				<h2 className="text-base font-semibold leading-7 text-gray-900">
					Family Dependents
				</h2>
				<div className="mt-3 p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<SelectField
						id="dependents"
						name="dependents"
						value={formState.dependents}
						onChange={handleChange}
						options={[
							{ value: "Yes", label: "Yes" },
							{ value: "No", label: "No" },
						]}
						label="Do you have dependents?"
					/>
					{formState.dependents === "Yes" && (
						<>
							<SelectField
								id="hasMotherFather"
								name="hasMotherFather"
								value={formState.hasMotherFather}
								onChange={handleChange}
								options={[
									{ value: "Yes", label: "Yes" },
									{ value: "No", label: "No" },
								]}
								label="Do you have parents?"
							/>
							<SelectField
								id="isMarried"
								name="isMarried"
								value={formState.isMarried}
								onChange={handleChange}
								options={[
									{ value: "Yes", label: "Yes" },
									{ value: "No", label: "No" },
								]}
								label="Are you married?"
							/>
							{formState.isMarried === "Yes" && (
								<InputField
									id="childrenCount"
									name="childrenCount"
									type="number"
									placeholder="Number of children"
									value={formState.childrenCount}
									onChange={handleChange}
									label="Number of Children"
								/>
							)}
						</>
					)}
				</div>
			</div>

			{/* Submit Button */}
			<div className="mt-6 flex justify-end">
				<button
					type="submit"
					className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					Submit
				</button>
			</div>
		</form>
	);
};

export default UserForm;
