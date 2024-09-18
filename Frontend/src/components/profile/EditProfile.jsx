/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditProfile({ contact, profileId }) {
    const [profile, setProfile] = useState({
        phone: "",
        experience: "",
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

    const [darkMode, setDarkMode] = useState(false);

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
            publications: event.target.value.split(",").map((pub) => pub.trim()),
        });
    };

    const handleAwardsChange = (event) => {
        setProfile({
            ...profile,
            awards: event.target.value.split(",").map((award) => award.trim()),
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
            education: event.target.value.split(",").map((edu) => edu.trim()),
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/v1/profile/" + profileId, profile);
            console.log(response);
            console.log("Profile submitted:", profile);
        } catch (error) {
            console.error("Error submitting profile:", error);
        }
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("/api/v1/profile/" + profileId);
                setProfile(response.data.data.profile[0]);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };
        fetchProfile();
    }, [profileId]);

    return (
			<div className={`w-full min-h-screen`}>
				<main className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-8">
					<div className="absolute top-4 right-4">
						<button
							onClick={() => setDarkMode(!darkMode)}
							className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
							{darkMode ? (
								<span className="text-gray-900 dark:text-white">
									🌞 Light Mode
								</span>
							) : (
								<span className="text-gray-900 dark:text-white">
									🌙 Dark Mode
								</span>
							)}
						</button>
					</div>
					<section className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6">
						<header className="text-center mb-6">
							<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
								Setup Your Profile
							</h1>
						</header>
						<form onSubmit={handleSubmit} className="space-y-6">
							{[
								{ name: "phone", label: "Phone", type: "text" },
								{ name: "experience", label: "Experience", type: "text" },
								{ name: "address", label: "Address", type: "text" },
								{
									name: "specialization",
									label: "Specialization",
									type: "text",
								},
								{ name: "license", label: "License", type: "text" },
								{ name: "website", label: "Website", type: "url" },
							].map(({ name, label, type }) => (
								<label
									key={name}
									className="block text-gray-700 dark:text-gray-300">
									{label}:
									<input
										type={type}
										name={name}
										value={profile[name] || ""}
										onChange={handleChange}
										className="mt-1 block w-full p-3 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
										placeholder={`Enter your ${label.toLowerCase()}`}
									/>
								</label>
							))}

							{[
								{ name: "languages", label: "Languages (comma-separated)" },
								{ name: "education", label: "Education (comma-separated)" },
								{
									name: "accreditation",
									label: "Accreditation (comma-separated)",
								},
								{
									name: "publications",
									label: "Publications (comma-separated)",
								},
								{ name: "awards", label: "Awards (comma-separated)" },
							].map(({ name, label }) => (
								<label
									key={name}
									className="block text-gray-700 dark:text-gray-300">
									{label}:
									<input
										type="text"
										name={name}
										value={profile[name].join(", ")}
										onChange={
											name === "languages"
												? handleLanguagesChange
												: name === "education"
												? handleEducationChange
												: name === "accreditation"
												? handleAccreditationChange
												: name === "publications"
												? handlePublicationsChange
												: handleAwardsChange
										}
										className="mt-1 block w-full p-3 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
										placeholder={`Enter ${label.toLowerCase()}`}
									/>
								</label>
							))}

							{[
								{ name: "facebook", label: "Facebook" },
								{ name: "Instagram", label: "Instagram" },
								{ name: "x", label: "Twitter" },
							].map(({ name, label }) => (
								<label
									key={name}
									className="block text-gray-700 dark:text-gray-300">
									{label}:
									<input
										type="hours"
										name={name}
										value={
											profile[name] ||
											profile.socialMedia[name] ||
											profile.operatingHours[name] ||
											""
										}
										onChange={
											name === "facebook" || name === "x"
												? (e) =>
														setProfile({
															...profile,
															socialMedia: {
																...profile.socialMedia,
																[name]: e.target.value,
															},
														})
												: name === "weekdays" || name === "weekends"
												? (e) =>
														setProfile({
															...profile,
															operatingHours: {
																...profile.operatingHours,
																[name]: e.target.value,
															},
														})
												: handleChange
										}
										className="mt-1 block w-full p-3 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
										placeholder={`Enter ${label.toLowerCase()}`}
									/>
								</label>
							))}
							{[
								{ name: "weekdays", label: "Weekdays Operating Hours" },
								{ name: "weekends", label: "Weekends Operating Hours" },
							].map(({ name, label }) => (
								<label
									key={name}
									className="block text-gray-700 dark:text-gray-300">
									{label}:
									<input
										type="hours"
										name={name}
										value={
											profile[name] ||
											profile.socialMedia[name] ||
											profile.operatingHours[name] ||
											""
										}
										onChange={
											name === "facebook" || name === "x"
												? (e) =>
														setProfile({
															...profile,
															socialMedia: {
																...profile.socialMedia,
																[name]: e.target.value,
															},
														})
												: name === "weekdays" || name === "weekends"
												? (e) =>
														setProfile({
															...profile,
															operatingHours: {
																...profile.operatingHours,
																[name]: e.target.value,
															},
														})
												: handleChange
										}
										className="mt-1 block w-full p-3 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
										placeholder={`Enter ${label.toLowerCase()}`}
									/>
								</label>
							))}

							<button
								type="submit"
								className="w-full bg-blue-500 text-white p-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
								Submit Profile
							</button>
						</form>
					</section>
				</main>
			</div>
		);
}
