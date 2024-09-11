import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ fon, del, rename, id }) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="m-11 max-w-sm rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4" onClick={() => navigate("/bail/" + id)}>
					{/* <div className="font-bold text-xl mb-2">{id}</div>
					<div className="font-bold text-xl mb-2">{fon.charges}</div>
					<div className="font-bold text-xl mb-2">{fon.bailStatus}</div> */}
					<div className="font-bold text-xl mb-2">
						{fon.bailApplicationName}
					</div>
					{/* <div className="font-bold text-xl mb-2">
						{fon.riskAssessmentScore}
					</div> */}
					{/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
						<div className="bg-blue-600 h-2.5 rounded-full"></div>
					</div> */}
				</div>
				<div className="px-6 pt-4 pb-2 flex flex-row space-x-3 flex-wrap mx-auto w-full ">
					<div
						onClick={() => del(fon._id)}
						className="bg-red-100 border rounded p-2 ">
						delete
					</div>
					<div
						onClick={() =>
							rename(
								fon._id,
								!fon.bailApplicationName
									? "Untitled Bail Application"
									: fon.bailApplicationName
							)
						}
						className="bg-red-100 border rounded p-2 ">
						Rename
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeCard;
