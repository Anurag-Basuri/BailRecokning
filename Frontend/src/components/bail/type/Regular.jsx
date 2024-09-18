import React, { useState,useEffect } from "react";
import axios from "axios";

const Regular = ({ bailId }) => {
	const [formData, setFormData] = useState({
		firCopy: "",
		chargeSheet: "",
		order: "",
		suretyBond: "",
		affidavit: "",
		identityProof: "",
		addressProof: "",
		backgroundInformation: "",
		passport: "",
		typeBail: "Regular",
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
		if (files.length > 0) {
			setFormData({
				...formData,
				[name]: files[0], // Get the first file
			});
		}
	};
	const [disableButton, setDisableButton] = useState(false);

	const uploadRegularBail = async (e) => {
		setDisableButton(true)
		e.preventDefault();
		const formData1 = new FormData();
		formData1.append("firCopy", formData.firCopy);
		formData1.append("chargeSheet", formData.chargeSheet);
		formData1.append("order", formData.order);
		formData1.append("suretyBond", formData.suretyBond);
		formData1.append("affidavit", formData.affidavit);
		formData1.append("identityProof", formData.identityProof);
		formData1.append("addressProof", formData.addressProof);
		formData1.append("backgroundInformation", formData.backgroundInformation);
		formData1.append("passport", formData.passport);
		formData1.append("typeBail", formData.typeBail);

		console.log(formData);
		console.log(formData1);

		try {
			const response = await axios.post(
				`/api/v1/bail/regularBail/${bailId}`,
				formData1
			);
			console.log(response.data.data.bail);
		} catch (error) {
			console.log("error in upload", error);
		}
	};

	useEffect(() => {
		setDisableButton(false);
	}, []);

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
						name="order"
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
						name="suretyBond"
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
						name="backgroundInformation"
						value={formData.backgroundInformation}
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
							onClick={(e) => uploadRegularBail(e)}
							className={`inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
								disableButton
									? "disabled bg-gray-300 text-gray-500 cursor-not-allowed"
									: ""
							}`}>
							Upload
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Regular;
