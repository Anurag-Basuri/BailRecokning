import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function KYLaw() {
	const [charge, setCharge] = useState("");
	const [allCharge, setAllCharge] = useState([]);
	const [lawDetail, setLawDetail] = useState([]);

	const onchangeHandler = (event) => {
		const value = event.target.value;
		setCharge(value);
	};

	const addCharge = async () => {
		console.log("Add", allCharge);
		setAllCharge((prev) => [...prev, { id: Date.now(), charge }]);
		setCharge("");
	};

	const removeCharges = async (id) => {
		console.log("remove ", id);
		setAllCharge((prev) => prev.filter((ch) => ch.id != id));
	};
	console.log(allCharge);

	useEffect(() => {
		try {
			const func = async () => {
				const response = await axios.post("/api/v1/law/searchs/law", {
					sections: allCharge,
				});
				console.log(response.data.data.laws);
				setLawDetail(response.data.data.laws);
			};
			func();
		} catch (error) {
			console.log(error);
		}
	}, [allCharge, addCharge, removeCharges]);

	return (
		<div className="mt-16 w-full flex flex-col flex-wrap h-80v px-6 pt-4 pb-2 justify-center mx-auto">
			<div className="w-full flex flex-row flex-wrap justify-center mx-auto ">
				<h1 className="hidden md:block lg:block">Add Charges</h1>
				<input
					type="text"
					value={charge}
					className={`px-3 mx-5 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-1/2 `}
					onChange={onchangeHandler}
				/>

				<div
					className="text-white inline mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={() => addCharge()}>
					add
				</div>
			</div>
			<div className="mt-12 mx-auto w-2/3 flex flex-row flex-wrap">
				<div className="inline ">ALL Charges:- </div>
				{allCharge.map((charge, id) => {
					return (
						<div className="flex mx-2" key={id}>
							<div className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
								{charge.charge}{" "}
								<span
									className="p-2 hover:bg-gradient-to-br"
									onClick={() => removeCharges(charge.id)}>
									X
								</span>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-10 mx-auto w-2/3 flex flex-row flex-wrap">
				Charges Details
			</div>
			{lawDetail.map((charge, id) => {
				return (
					<div
						key={id}
						className="w-full h-80v px-0 pt-4 pb-2 flex flex-row flex-wrap justify-center mx-auto md:w-2/3 lg:w-2/3 md:px-6 lg:px-6">
						<div className="mt-3 w-full flex flex-col divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
							<div className="flex items-center py-3 text-sm">
								<span>lawName</span>
								<span className="ml-auto">{charge.lawName}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>Section</span>
								<span className="ml-auto">{charge.section}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>sectionTitle</span>
								<span className="ml-auto">{charge.sectionTitle}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>sectionDesc</span>
								<span className="ml-auto">{charge.sectionDesc}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>bailable</span>
								<span className="ml-auto">{charge.bailable}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>compoundable</span>
								<span className="ml-auto">{charge.compoundable}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>congnisable</span>
								<span className="ml-auto">{charge.congnisable}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>triableByCourt</span>
								<span className="ml-auto">{charge.triableByCourt}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>penaltyDescription</span>
								<span className="ml-auto">{charge.penaltyDescription}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span> punishment</span>
								<span className="ml-auto">{charge.punishment}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>exception</span>
								<span className="ml-auto">{charge.exception}</span>
							</div>
							<div className="flex items-center py-3 text-sm">
								<span>fineAmount</span>
								<span className="ml-auto">{charge.fineAmount}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default KYLaw;
