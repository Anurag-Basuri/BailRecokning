/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Default = () => {
	const [formData, setFormData] = useState({
		bailApplication: "",
		firCopy: "",
		remandOrder: "",
		custodyCertificate: "",
		nonFilingChargeSheet: "",
		caseDiary: "",
		bailBond: "",
		accusedIdentification: "",
		suretyDocuments: "",
		vakalatnama: "",
		judicialOrders: "",
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
				{/* Bail Application */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Bail Application (under Section 167(2) CrPC)
					</label>
					<input
						type="file"
						name="bailApplication"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
						required
					/>
				</div>

				{/* Copy of FIR */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Copy of FIR
					</label>
					<input
						type="file"
						name="firCopy"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Remand or Custody Order */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Remand or Custody Order
					</label>
					<input
						type="file"
						name="remandOrder"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Custody Certificate */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Custody Certificate
					</label>
					<input
						type="file"
						name="custodyCertificate"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Non-Filing of Charge Sheet (if available) */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Non-Filing of Charge Sheet (if available)
					</label>
					<input
						type="file"
						name="nonFilingChargeSheet"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Case Diary or Police Report */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Case Diary or Police Report
					</label>
					<input
						type="file"
						name="caseDiary"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Bail Bond/Surety Documents */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Bail Bond/Surety Documents
					</label>
					<input
						type="file"
						name="bailBond"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Personal Identification Documents of the Accused */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Personal Identification Documents of the Accused
					</label>
					<input
						type="file"
						name="accusedIdentification"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Surety Documents */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Surety Documents (ID, Address Proof, Financial Capacity)
					</label>
					<input
						type="file"
						name="suretyDocuments"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Vakalatnama */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Vakalatnama (Power of Attorney)
					</label>
					<input
						type="file"
						name="vakalatnama"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Relevant Judicial Orders or Affidavits (if any) */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Relevant Judicial Orders or Affidavits (if any)
					</label>
					<input
						type="file"
						name="judicialOrders"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>
			</form>
		</div>
	);
};

export default Default;
