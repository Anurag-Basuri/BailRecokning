import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interim = ({ bailId }) => {
	const [formData, setFormData] = useState({
		interimApp: "",
		firCopy: "",
		chargeSheet: "",
		affidavit: "",
		suretyBond: "",
		identityProof: "",
		addressProof: "",
		medicalRecords: "",
		order: "",
		typeBail: "Interim",
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
	const [disableButton, setDisableButton] = useState(false);

	const uploadRegularBail = async (e) => {
		toast("Uploading interim bail");
		setDisableButton(true);
		e.preventDefault();
		const formData1 = new FormData();
		formData1.append("interimApp", formData.interimApp);
		formData1.append("firCopy", formData.firCopy);
		formData1.append("chargeSheet", formData.chargeSheet);
		formData1.append("suretyBond", formData.suretyBond);
		formData1.append("affidavit", formData.affidavit);
		formData1.append("identityProof", formData.identityProof);
		formData1.append("addressProof", formData.addressProof);
		formData1.append("order", formData.order);
		formData1.append("medicalRecords", formData.medicalRecords);
		formData1.append("typeBail", formData.typeBail);

		console.log(formData);
		console.log(formData1);

		try {
			const response = await axios.post(
				`/api/v1/bail/interimBail/${bailId}`,
				formData1
			);
			console.log(response.data.data.bail);
			toast("Successfully submited interim bail");
		} catch (error) {
			console.log("error in upload", error);
		}
	};

	useEffect(() => {
		setDisableButton(false);
	}, []);

	return (
		<div className="min-h-screen bg-white p-10 h-full w-full">
			<ToastContainer />
			<form className="space-y-10">
				{/* Interim Bail Application */}
				<div>
					<label className="block text-blue-700 font-medium mb-2">
						Interim Bail Application
					</label>
					<input
						type="file"
						name="interimApp"
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
						name="suretyBond"
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
						name="order"
						onChange={handleFileChange}
						className="w-full border border-blue-300 rounded-md focus:outline-none"
					/>
				</div>

				{/* Legal Representation Details */}
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

export default Interim;
