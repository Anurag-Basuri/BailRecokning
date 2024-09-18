/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Interim = () => {
	const [formData, setFormData] = useState({
		bailApplication: "",
		firCopy: "",
		chargeSheet: "",
		affidavit: "",
		personalBond: "",
		identityProof: "",
		addressProof: "",
		medicalRecords: "",
		courtOrders: "",
		legalRepresentation: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		const { name, files } = e.target;
		setFormData({
			...formData,
			[name]: files[0],
		});
	};

	return (
		<div className="min-h-screen bg-white p-10 h-full w-full">
			<form className="space-y-10">
				{/* Interim Bail Application */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Interim Bail Application
					</label>
					<input
						type="file"
						name="bailApplication"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
						required
					/>
				</div>

				{/* FIR Copy */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						FIR Copy
					</label>
					<input
						type="file"
						name="firCopy"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Charge Sheet or Complaint Details */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Charge Sheet or Complaint Details
					</label>
					<input
						type="file"
						name="chargeSheet"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Affidavit */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Affidavit
					</label>
					<input
						type="file"
						name="affidavit"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
						required
					/>
				</div>

				{/* Personal Bond/Surety Bond */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Personal Bond/Surety Bond
					</label>
					<input
						type="file"
						name="personalBond"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
						required
					/>
				</div>

				{/* Identity Proof */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Identity Proof (Aadhaar, PAN, Passport, etc.)
					</label>
					<input
						type="file"
						name="identityProof"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
						required
					/>
				</div>

				{/* Address Proof */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Address Proof
					</label>
					<input
						type="file"
						name="addressProof"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
						required
					/>
				</div>

				{/* Medical Records (if applicable) */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Medical Records (if applicable)
					</label>
					<input
						type="file"
						name="medicalRecords"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Court Orders (if applicable) */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Court Orders (if applicable)
					</label>
					<input
						type="file"
						name="courtOrders"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Legal Representation Details */}
				{/* <div>
					<label className="block text-blue-700 font-medium mb-2">
						Legal Representation Details
					</label>
					<textarea
						name="legalRepresentation"
						value={formData.legalRepresentation}
						onChange={handleInputChange}
						className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
						placeholder="Enter lawyer's or legal representative's details"></textarea>
				</div> */}
			</form>
		</div>
	);
};

export default Interim;
