/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Regular = () => {
	const [formData, setFormData] = useState({
		name: "",
		caseDetails: "",
		firCopy: "",
		chargeSheet: "",
		courtSummons: "",
		personalBond: "",
		affidavit: "",
		identityProof: "",
		addressProof: "",
		backgroundInfo: "",
		passport: "",
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
		<div className="min-h-screen flex justify-center items-center bg-blue-50">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
				<h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
					Bail Application Form
				</h2>
				<form className="space-y-4">
					{/* Name */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Name of the Accused
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter name"
							required
						/>
					</div>

					{/* Case Details */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Case Details
						</label>
						<textarea
							name="caseDetails"
							value={formData.caseDetails}
							onChange={handleInputChange}
							className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter case details"
							required></textarea>
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
							required
						/>
					</div>

					{/* Charge Sheet */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Charge Sheet
						</label>
						<input
							type="file"
							name="chargeSheet"
							onChange={handleFileChange}
							className="w-full border border-blue-300 rounded-md focus:outline-none"
							required
						/>
					</div>

					{/* Court Summons */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Court Summons/Order
						</label>
						<input
							type="file"
							name="courtSummons"
							onChange={handleFileChange}
							className="w-full border border-blue-300 rounded-md focus:outline-none"
						/>
					</div>

					{/* Personal Bond */}
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

					{/* Identity Proof */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Identity Proof
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

					{/* Background Information */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Background Information (if applicable)
						</label>
						<textarea
							name="backgroundInfo"
							value={formData.backgroundInfo}
							onChange={handleInputChange}
							className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter background details (if applicable)"></textarea>
					</div>

					{/* Passport */}
					<div>
						<label className="block text-blue-700 font-medium mb-2">
							Passport (if required)
						</label>
						<input
							type="file"
							name="passport"
							onChange={handleFileChange}
							className="w-full border border-blue-300 rounded-md focus:outline-none"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Regular;
