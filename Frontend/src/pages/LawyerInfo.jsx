import React, { useEffect, useState } from "react";
import { ShowProfile } from "../components";
import axios from "axios";
import { useParams } from "react-router-dom";

const LawyerInfo = () => {
	const { profileId } = useParams();
	const [lawyer, setLawyer] = useState([]);
    
	useEffect(() => {
		const getInfo = async (req, res) => {
			try {
				const response = await axios.get("/api/v1/profile/" + profileId);
				console.log(response.data.data.profile);
				setLawyer(response.data.data.profile);
			} catch (error) {
				console.log("error while fetching profile", error);
			}
		};
		getInfo();
	}, []);
	return (
		<div>
			{lawyer.map((provider, id) => {
				return (
					<div key={id}>
						<ShowProfile provider={provider} />
					</div>
				);
			})}
		</div>
	);
};

export default LawyerInfo;
