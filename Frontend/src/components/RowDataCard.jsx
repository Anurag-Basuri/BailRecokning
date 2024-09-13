import React from "react";

const RowDataCard = ({ card, id, question, description }) => {
	console.log(card);
	return (
		<div
			className="mx-auto w-2/3 bg-red-400 border rounded-2xl m-3  "
			// key={id}
			// onClick={() => updateCard(id, {id,data:{id,option,question,description,answer},multipleChoice,checkBoxes:checkBoxesF})}
		>
			<div className="px-6 pt-4 m-3 flex flex-row  justify-between ">
				<input
					type="text"
					className={`mb-6 bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor  `}
					value={card.fullName}
					disabled
				/>
				{/* <input
					type="text"
					className={`mb-6 bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor  `}
					// value={card.data.question}
					disabled
				/> */}
			</div>
		</div>
	);
};

export default RowDataCard;
