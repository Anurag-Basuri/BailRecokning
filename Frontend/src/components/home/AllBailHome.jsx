/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { HomeCard, RenameCard, DisplayBox, IfNoBail } from "../index.js";
import axios from "axios";

const AllBailHome = ({ darkMode }) => {
	const [allUserBails, setAllUserBails] = useState([]);
	const [allBails, setAllBails] = useState([{}]);
	const navigate = useNavigate();

	const [showRename, setShowRename] = useState(false);
	const status = useSelector((state) => state.auth.status);

	const deleteBail = async (id) => {
		try {
			const response = await axios.delete("/api/v1/bail/" + id);
			const func = async () => {
				const response = await axios.get("/api/v1/bail/u/all");
				setAllUserBails(response.data.data.bail);
			};
			func();
		} catch (error) {
			console.log(error);
		}
	};

	const [BailTitle, setBailTitle] = useState("");
	const [bailRenameId, setbailRenameId] = useState("");
	const onChangeHandlerRename = (event) => {
		const value = event.target.value;
		setBailTitle(value);
	};

	const [totalCases, setTotalCases] = useState(0);
	const [pendingCases, setPendingCases] = useState(0);
	const [acceptedCases, setAcceptedCases] = useState(0);
	const [deniedCases, setDeniedCases] = useState(0);

	const renameBail = (id, title) => {
		setBailTitle(title.length === 0 ? "Untitled Bail" : title);
		setbailRenameId(id);
		setShowRename(true);
	};
	const toCreate = async () => {
		const response = await axios.get("/api/v1/bail/add");
		navigate("/bail/" + response.data.data._id);
	};

	useEffect(() => {
		try {
			const func = async () => {
				const response = await axios.get("/api/v1/bail/u/all");
				setAllUserBails(response.data.data.bail);
			};
			func();
		} catch (error) {
			console.log("while fetching all Bails");
		}
	}, [showRename]);

	useEffect(() => {
		try {
			const func = async () => {
				const response2 = await axios.get("/api/v1/bail/a/all");
				const response3 = await axios.get("/api/v1/bail/status/Pending");
				const response4 = await axios.get("/api/v1/bail/status/Approved");
				const response5 = await axios.get("/api/v1/bail/status/Denied");
				setAllBails(response2.data.data.bail);

				setTotalCases(response2.data.data.bail.length);
				setPendingCases(response3.data.data.bail.length);
				setAcceptedCases(response4.data.data.bail.length);
				setDeniedCases(response5.data.data.bail.length);
			};
			func();
		} catch (error) {
			console.log("error while getting all over bail data");
		}
	}, [allUserBails]);

	return (
		<div
			className={`min-h-screen ${
				darkMode ? "bg-gray-900" : "bg-white"
			} transition-all duration-300`}>
			{/* Rename Modal */}
			{showRename && (
				<div
					className={`fixed inset-0 flex justify-center items-center z-50 ${
						darkMode ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80"
					}`}>
					<RenameCard
						cancel={setShowRename}
						cancelState={showRename}
						BailTitle={BailTitle}
						onChangeHandlerRename={onChangeHandlerRename}
						bailId={bailRenameId}
						setAllBails={setAllBails}
						className={`border rounded-lg p-7 shadow-2xl ${
							darkMode
								? "bg-gray-700 text-gray-200 border-gray-600"
								: "bg-white text-black"
						}`}
					/>
				</div>
			)}

			{/* Main Content */}
			<div
				className={`px-6 pt-4 pb-2 mt-16 mx-auto flex flex-wrap justify-center w-full gap-6 transition-all duration-300 ${
					darkMode
						? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-300"
						: "bg-white text-black"
				}`}>
				{allUserBails.length === 0 ? (
					<IfNoBail />
				) : (
					allUserBails.map((fon, index) => {
						return (
							<div
								className="m-4 text-xl transition-transform duration-200 hover:scale-105 shadow-lg"
								key={index}>
								<HomeCard
									fon={fon}
									del={deleteBail}
									rename={renameBail}
									id={fon._id}
									className={`rounded-lg transition-colors duration-200 ${
										darkMode
											? "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-600 shadow-lg"
											: "bg-white text-black hover:bg-gray-100 border border-gray-200"
									}`}
								/>
							</div>
						);
					})
				)}
			</div>

			{/* DisplayBox Section */}
			<div
				className={`w-full flex justify-center gap-6 py-6 border-t-2 ${
					darkMode
						? "bg-gray-800 text-gray-300 border-gray-700"
						: "bg-white text-black border-gray-300"
				}`}>
				<DisplayBox
					textSmall={"Total cases"}
					darkMode={darkMode}
					textBig={totalCases}
					className={`rounded-lg p-5 shadow-lg ${
						darkMode
							? "bg-gray-900 text-gray-100 hover:bg-gray-700 border border-gray-600"
							: "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300"
					}`}
				/>
				<DisplayBox
					textSmall={"Pending cases"}
					darkMode={darkMode}
					textBig={pendingCases}
					className={`rounded-lg p-5 shadow-lg ${
						darkMode
							? "bg-gray-900 text-gray-100 hover:bg-gray-700 border border-gray-600"
							: "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300"
					}`}
				/>
				<DisplayBox
					textSmall={"Accepted cases"}
					darkMode={darkMode}
					textBig={acceptedCases}
					className={`rounded-lg p-5 shadow-lg ${
						darkMode
							? "bg-gray-700 text-gray-100 hover:bg-gray-800 border border-gray-600"
							: "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300"
					}`}
				/>
				<DisplayBox
					textSmall={"Denied cases"}
					darkMode={darkMode}
					textBig={deniedCases}
					className={`rounded-lg p-5 shadow-lg ${
						darkMode
							? "bg-gray-900 text-gray-100 hover:bg-gray-700 border border-gray-600"
							: "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300"
					}`}
				/>
			</div>
		</div>
	);
};

export default connect((state) => ({ darkMode: state.mode.darkMode }))(
	AllBailHome
);
