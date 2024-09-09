import React, { useEffect, useState } from "react";
import { Introduction } from "../components/index";
import { HomeCard, RenameCard } from "../components/index.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
	const [allUserBails, setAllUserBails] = useState([{}]);
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

	// // for rename of form
	const [formTitle, setFormTitle] = useState("");
	const [formRenameId, setFormRenameId] = useState("");
	const onChangeHandlerRename = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		// console.log(value,name)
		setFormTitle(value);
	};

	const renameForm = (id, title) => {
		// console.log(title);
		setFormTitle(title.length === 0 ? "Untitled Form" : title);
		setFormRenameId(id);
		// console.log(id);
		setShowRename(true);
	};

	const [totalCases, setTotalCases] = useState(0);
	const [pendingCases, setPendingCases] = useState(0);
	const [acceptedCases, setAcceptedCases] = useState(0);
	const [deniedCases, setDeniedCases] = useState(0);

	// // Calculate the totals when the component mounts or when cases change
	// useEffect(() => {}, [cases]);

	// const renameForm
	useEffect(() => {
		try {
			const func = async () => {
				const response = await axios.get("/api/v1/bail/u/all");
				setAllUserBails(response.data.data.bail);
				// console.log(response.data.data);
			};
			func();
		} catch (error) {
			console.log("while fetching all Bails");
		}
	}, []);

	useEffect(() => {
		try {
			const func = async () => {
				const response2 = await axios.get("/api/v1/bail/a/all");
				const response3 = await axios.get("/api/v1/bail/status/Pending");
				const response4 = await axios.get("/api/v1/bail/status/Approved");
				const response5 = await axios.get("/api/v1/bail/status/Denied");
				setAllBails(response2.data.data.bail);
				// console.log(response3.data.data.bail);

				setTotalCases(response2.data.data.bail.length);
				setPendingCases(response3.data.data.bail.length);
				setAcceptedCases(response4.data.data.bail.length);
				setDeniedCases(response5.data.data.bail.length);
			};
			func();
		} catch (error) {
			console.log("error while getting all over bail data");
		}
	}, []);

	return (
		<>
			{showRename && (
				<div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
					<RenameCard
						cancel={setShowRename}
						cancelState={showRename}
						formTitle={formTitle}
						onChangeHandlerRename={onChangeHandlerRename}
						formRenameId={formRenameId}
						setAllForms={setAllBails}
						className="m-44 border bg-white rounded-lg p-7 shadow-md"
					/>
				</div>
			)}
			<div className="h-80v px-6 pt-4 pb-2  mt-16 flex flex-row flex-wrap justify-center mx-auto w-full">
				{allUserBails.length === 0 ? (
					<h1 className=" text-black text-3xl flex justify-center items-center h-80v ">
						No Bail application Exist -
						<span className="hover:text-blue-400" onClick={() => toCreate()}>
							Create now
						</span>
					</h1>
				) : (
					allUserBails.map((fon, index) => {
						return (
							<div className="text-black text-xl " key={index}>
								<HomeCard
									fon={fon}
									del={deleteBail}
									rename={renameForm}
									id={fon._id}
								/>
							</div>
						);
					})
				)}
			</div>
			<div className="h-80v px-6 pt-4 pb-2  mt-16 flex flex-row flex-wrap justify-center mx-auto w-full">
				<div className="block mx-3  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{totalCases}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Total cases
					</p>
				</div>
				<div className="block  mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{pendingCases}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Pending cases
					</p>
				</div>
				<div className="block  mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{acceptedCases}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Accepted cases
					</p>
				</div>
				<div className="block  mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{deniedCases}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Denied cases
					</p>
				</div>
			</div>
			<div className="h-80v px-6 pt-4 pb-2  mt-16 flex flex-row flex-wrap justify-center mx-auto w-full">
				api support docs
			</div>
		</>
	);
};

export default Home;
