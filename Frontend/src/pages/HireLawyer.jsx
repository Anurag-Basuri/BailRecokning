import React from "react";
import { LegalAid } from "../components/index";

const HireLawyer = () => {
	return (
		<div className="mt-32 min-h-screen">
			<div className="flex flex-row justify-center p-3 space-x-5 items-center mx-auto w-2/3 bg-red-100 border rounded-2xl m-3 ">
				<div>HireLawyer</div>
				{/* <div></div> */}
			</div>
			<LegalAid />
		</div>
	);
};

export default HireLawyer;
