import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ fon, del, rename, id }) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="m-11 max-w-sm rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4" onClick={() => navigate("/bail/" + id)}>
					<div className="font-bold text-xl mb-2">
						{fon.bailApplicationName}
					</div>
				</div>
				<div className="px-6 pt-4 pb-2 flex flex-row space-x-3 flex-wrap mx-auto w-full ">
					<div
						onClick={() => del(fon._id)}
						className="bg-red-100 border rounded p-2 ">
						{/* <svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="#e8eaed">
							<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
						</svg> */}
						Delete
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
