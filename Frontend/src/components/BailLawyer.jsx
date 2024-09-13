import React, { useEffect, useState } from "react";
import { RowDataCard, LegalAid } from ".";
import axios from "axios";

const BailLawyer = () => {
	const [allLawyer, setAllLawyer] = useState([]);
	useEffect(() => {
		const func = async () => {
			const response = await axios.get("/api/v1/user/allLawyers");
			console.log(response.data.data);
			setAllLawyer(response.data.data);
		};
		func();
	}, []);
	return (
		<div>
			<input
				type="text"
				className={`mb-6 bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor  `}
				// value={card.data.question}
			/>
			{allLawyer.map((card, id) => {
				return (
					<div key={id}>
						<RowDataCard card={card} />
					</div>
				);
			})}
		</div>
	);
};

export default BailLawyer;
