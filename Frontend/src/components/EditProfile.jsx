/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function EditProfile({ contact }) {
	const [profile, setProfile] = useState({
		Name: "",
		Phone: contact,
		Email: contact,
		Address: "",
		Specialization: "",
		License: "",
		Languages: [],
		Website: "",
		SocialMedia: {
			Facebook: "",
			Twitter: "",
		},
		OperatingHours: {
			Weekdays: "",
			Weekends: "",
		},
		Accreditation: [],
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setProfile({
			...profile,
			[name]: value,
		});
	};

	const handleLanguagesChange = (event) => {
		setProfile({
			...profile,
			Languages: event.target.value.split(",").map((lang) => lang.trim()),
		});
	};

	const handleAccreditationChange = (event) => {
		setProfile({
			...profile,
			Accreditation: event.target.value.split(",").map((acc) => acc.trim()),
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission, e.g., save profile data
		console.log("Profile submitted:", profile);
	};

	return (
		<main>
			<header>
				<h1>Setup Your Profile</h1>
			</header>
			<section>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<label>
						Name:
						<input
							type="text"
							name="Name"
							value={profile.Name}
							onChange={handleChange}
							placeholder="Enter your name"
							required
						/>
					</label>
					<label>
						Address:
						<input
							type="text"
							name="Address"
							value={profile.Address}
							onChange={handleChange}
							placeholder="Enter your address"
						/>
					</label>
					<label>
						Specialization:
						<input
							type="text"
							name="Specialization"
							value={profile.Specialization}
							onChange={handleChange}
							placeholder="Enter your specialization"
						/>
					</label>
					<label>
						License:
						<input
							type="text"
							name="License"
							value={profile.License}
							onChange={handleChange}
							placeholder="Enter your license number"
						/>
					</label>
					<label>
						Languages (comma-separated):
						<input
							type="text"
							name="Languages"
							value={profile.Languages.join(", ")}
							onChange={handleLanguagesChange}
							placeholder="Enter languages spoken"
						/>
					</label>
					<label>
						Website:
						<input
							type="url"
							name="Website"
							value={profile.Website}
							onChange={handleChange}
							placeholder="Enter your website"
						/>
					</label>
					<label>
						Facebook:
						<input
							type="url"
							name="Facebook"
							value={profile.SocialMedia.Facebook}
							onChange={(e) =>
								setProfile({
									...profile,
									SocialMedia: {
										...profile.SocialMedia,
										Facebook: e.target.value,
									},
								})
							}
							placeholder="Facebook profile URL"
						/>
					</label>
					<label>
						Twitter:
						<input
							type="text"
							name="Twitter"
							value={profile.SocialMedia.Twitter}
							onChange={(e) =>
								setProfile({
									...profile,
									SocialMedia: {
										...profile.SocialMedia,
										Twitter: e.target.value,
									},
								})
							}
							placeholder="Twitter handle"
						/>
					</label>
					<label>
						Weekdays Operating Hours:
						<input
							type="text"
							name="Weekdays"
							value={profile.OperatingHours.Weekdays}
							onChange={(e) =>
								setProfile({
									...profile,
									OperatingHours: {
										...profile.OperatingHours,
										Weekdays: e.target.value,
									},
								})
							}
							placeholder="Weekdays hours"
						/>
					</label>
					<label>
						Weekends Operating Hours:
						<input
							type="text"
							name="Weekends"
							value={profile.OperatingHours.Weekends}
							onChange={(e) =>
								setProfile({
									...profile,
									OperatingHours: {
										...profile.OperatingHours,
										Weekends: e.target.value,
									},
								})
							}
							placeholder="Weekends hours"
						/>
					</label>
					<label>
						Accreditation (comma-separated):
						<input
							type="text"
							name="Accreditation"
							value={profile.Accreditation.join(", ")}
							onChange={handleAccreditationChange}
							placeholder="Enter accreditations"
						/>
					</label>
					<button type="submit">Submit Profile</button>
				</form>
			</section>
		</main>
	);
}
