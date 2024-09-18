import React, { useState } from "react";
import axios from "axios"

const Regular = () => {
	const [formData, setFormData] = useState({
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

	const uploadRegularBail = async () => {
		const response = await axios.post("/api/v1/bail/regularBail/"+ bailId);
		console.log(response.data.data)
	};

	console.log(formData);
	return (
		<div className="min-h-screen bg-white p-10 h-full w-full">
			<form className="space-y-10">
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
				<div className="border-t border-gray-200 pt-8">
					<div className="flex gap-x-4 justify-end">
						<button
							type="submit"
							onClick={() => uploadRegularBail()}
							className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							Upload
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Regular;
