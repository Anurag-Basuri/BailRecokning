import React, { useEffect, useState } from "react";
import axios from "axios";

function KYLaw() {
	const [charge, setCharge] = useState("");
	const [allCharge, setAllCharge] = useState([]);
	const [lawDetail, setLawDetail] = useState([]);

	const onchangeHandler = (event) => {
		const value = event.target.value;
		setCharge(value);
	};

	const addCharge = () => {
		if (charge) {
			setAllCharge((prev) => [...prev, { id: Date.now(), charge }]);
			setCharge("");
		}
	};

	const removeCharges = (id) => {
		setAllCharge((prev) => prev.filter((ch) => ch.id !== id));
	};

	useEffect(() => {
		const fetchLawDetails = async () => {
			try {
				const response = await axios.post("/api/v1/law/searchs/law", {
					sections: allCharge,
				});
				setLawDetail(response.data.data.laws);
			} catch (error) {
				console.log(error);
			}
		};

		if (allCharge.length > 0) {
			fetchLawDetails();
		}
	}, [allCharge]);

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto p-6 shadow-lg rounded-lg bg-white">
				<h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
					Know Your Law Charges
				</h1>

				{/* Add Charge Section */}
				<div className="w-full flex flex-col items-center mb-10">
					<h2 className="text-lg font-semibold text-gray-700 mb-4">
						Add Charges
					</h2>
					<div className="flex items-center w-full justify-center">
						<input
							type="text"
							value={charge}
							className="px-4 py-2 w-1/2 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
							placeholder="Enter charge"
							onChange={onchangeHandler}
						/>
						<button
							className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-200"
							onClick={addCharge}>
							Add Charge
						</button>
					</div>

					{/* Display All Charges */}
					<div className="mt-8 flex flex-wrap justify-center">
						{allCharge.map((chargeItem) => (
							<div
								key={chargeItem.id}
								className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-lg mr-2 mb-2 shadow-lg transition transform hover:scale-105 cursor-pointer">
								{chargeItem.charge}
								<button
									className="ml-2 px-2 text-sm bg-red-600 rounded-full"
									onClick={() => removeCharges(chargeItem.id)}>
									X
								</button>
							</div>
						))}
					</div>
				</div>

				{/* Law Details Section */}
				<div className="w-full mt-10">
					<h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
						Charges Details
					</h2>

					{lawDetail.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{lawDetail.map((charge, id) => (
								<div
									key={id}
									className="w-full bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{charge.lawName}
									</h3>
									<div className="text-gray-600 space-y-1">
										<p>
											<strong>Section:</strong> {charge.section}
										</p>
										<p>
											<strong>Title:</strong> {charge.sectionTitle}
										</p>
										<p>
											<strong>Description:</strong> {charge.sectionDesc}
										</p>
										<p>
											<strong>Bailable:</strong>{" "}
											{charge.bailable ? "Yes" : "No"}
										</p>
										<p>
											<strong>Compoundable:</strong>{" "}
											{charge.compoundable ? "Yes" : "No"}
										</p>
										<p>
											<strong>Cognisable:</strong>{" "}
											{charge.congnisable ? "Yes" : "No"}
										</p>
										<p>
											<strong>Triable by Court:</strong> {charge.triableByCourt}
										</p>
										<p>
											<strong>Penalty:</strong> {charge.penaltyDescription}
										</p>
										<p>
											<strong>Punishment:</strong> {charge.punishment}
										</p>
										<p>
											<strong>Exception:</strong> {charge.exception}
										</p>
										<p>
											<strong>Fine:</strong> {charge.fineAmount}
										</p>
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="text-center text-gray-600">
							No charges details available. Add some charges to view details.
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default KYLaw;
