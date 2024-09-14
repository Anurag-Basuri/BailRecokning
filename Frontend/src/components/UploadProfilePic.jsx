import React, { useState } from "react";
import axios from "axios";

const UploadProfilePic = () => {
	const [avatar, setAvatar] = useState(null);
	const [error, setError] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setAvatar(file);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Create a FormData object to send the image data
		const formData = new FormData();
		formData.append("avatar", avatar);

		try {
			const response = await axios.post(
				"api/v1/user/upload-profile-photo",
				formData
			);

			console.log("Avatar uploaded successfully:", response);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{error && <p>{error}</p>}

			<input type="file" onChange={handleFileChange} />
			<button type="submit">Upload</button>
		</form>
	);
};

export default UploadProfilePic;
