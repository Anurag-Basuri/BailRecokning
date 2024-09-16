import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditProfile({ contact, profileId }) {
	const [profile, setProfile] = useState({
		phone: 0,
		experience: 0,
		address: "",
		specialization: "",
		license: "",
		languages: [],
		website: "",
		socialMedia: {
			facebook: "",
			x: "",
		},
		operatingHours: {
			weekdays: "",
			weekends: "",
		},
		accreditation: [],
		publications: [],
		awards: [],
		education: [],
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
			languages: event.target.value.split(",").map((lang) => lang.trim()),
		});
	};

	const handlePublicationsChange = (event) => {
		setProfile({
			...profile,
			publications: event.target.value.split(",").map((lang) => lang.trim()),
		});
	};

	const handleAwardsChange = (event) => {
		setProfile({
			...profile,
			awards: event.target.value.split(",").map((lang) => lang.trim()),
		});
	};

	const handleAccreditationChange = (event) => {
		setProfile({
			...profile,
			accreditation: event.target.value.split(",").map((acc) => acc.trim()),
		});
	};
	const handleEducationChange = (event) => {
		setProfile({
			...profile,
			education: event.target.value.split(",").map((acc) => acc.trim()),
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// Handle form submission, e.g., save profile data
		const response = await axios.post("/api/v1/profile/" + profileId, profile);
		console.log(response);
		console.log("Profile submitted:", profile);
	};

	useEffect(() => {
		try {
			const fun = async () => {
				const response = await axios.get("/api/v1/profile/" + profileId);
				console.log(response.data.data.profile[0]);
				setProfile(response.data.data.profile[0]);
			};
			fun();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<main>
			<header>
				<h1>Setup Your Profile</h1>
			</header>
			<section>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<label>
						Phone:
						<input
							type="text"
							name="phone"
							value={profile.phone}
							onChange={handleChange}
							placeholder="Enter your phone"
						/>
					</label>
					<label>
						Experience:
						<input
							type="text"
							name="experience"
							value={profile.experience}
							onChange={handleChange}
							placeholder="Enter your experience"
						/>
					</label>
					<label>
						Address:
						<input
							type="text"
							name="address"
							value={profile.address}
							onChange={handleChange}
							placeholder="Enter your address"
						/>
					</label>
					<label>
						Specialization:
						<input
							type="text"
							name="specialization"
							value={profile.specialization}
							onChange={handleChange}
							placeholder="Enter your specialization"
						/>
					</label>
					<label>
						License:
						<input
							type="text"
							name="license"
							value={profile.license}
							onChange={handleChange}
							placeholder="Enter your license number"
						/>
					</label>
					<label>
						Languages (comma-separated):
						<input
							type="text"
							name="languages"
							value={profile.languages.join(", ")}
							onChange={handleLanguagesChange}
							placeholder="Enter languages spoken"
						/>
					</label>
					<label>
						Website:
						<input
							type="url"
							name="website"
							value={profile.website}
							onChange={handleChange}
							placeholder="Enter your website"
						/>
					</label>
					<label>
						Facebook:
						<input
							type="url"
							name="facebook"
							value={profile.socialMedia.facebook}
							onChange={(e) =>
								setProfile({
									...profile,
									socialMedia: {
										...profile.socialMedia,
										facebook: e.target.value,
									},
								})
							}
							placeholder="Facebook profile URL"
						/>
					</label>
					<label>
						Twitter:
						<input
							type="url"
							name="x"
							value={profile.socialMedia.x}
							onChange={(e) =>
								setProfile({
									...profile,
									socialMedia: {
										...profile.socialMedia,
										x: e.target.value,
									},
								})
							}
							placeholder="x handle"
						/>
					</label>
					<label>
						Weekdays Operating Hours:
						<input
							type="text"
							name="weekdays"
							value={profile.operatingHours.weekdays}
							onChange={(e) =>
								setProfile({
									...profile,
									operatingHours: {
										...profile.operatingHours,
										weekdays: e.target.value,
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
							name="weekends"
							value={profile.operatingHours.weekends}
							onChange={(e) =>
								setProfile({
									...profile,
									operatingHours: {
										...profile.operatingHours,
										weekends: e.target.value,
									},
								})
							}
							placeholder="Weekends hours"
						/>
					</label>
					<label>
						Education (comma-separated):
						<input
							type="text"
							name="education"
							value={profile.education.join(", ")}
							onChange={handleEducationChange}
							placeholder="Enter educations"
						/>
					</label>
					<label>
						Accreditation (comma-separated):
						<input
							type="text"
							name="accreditation"
							value={profile.accreditation.join(", ")}
							onChange={handleAccreditationChange}
							placeholder="Enter accreditations"
						/>
					</label>
					<label>
						Publications (comma-separated):
						<input
							type="text"
							name="publications"
							value={profile.publications.join(", ")}
							onChange={handlePublicationsChange}
							placeholder="Enter publications"
						/>
					</label>
					<label>
						Awards (comma-separated):
						<input
							type="text"
							name="awards"
							value={profile.awards.join(", ")}
							onChange={handleAwardsChange}
							placeholder="Enter awards"
						/>
					</label>
					<button type="submit">Submit Profile</button>
				</form>
			</section>
		</main>
	);
}
