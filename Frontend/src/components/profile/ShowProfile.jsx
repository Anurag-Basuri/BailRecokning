<<<<<<< Updated upstream:Frontend/src/components/profile/ShowProfile.jsx
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaStar, FaStarHalfAlt } from "react-icons/fa";
=======
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaStar, FaStarHalfAlt } from "react-icons/fa";
import EditProfile from "./EditProfile";

const lawyer = [
	{
		Name: "Alec M. Thompson",
		Phone: "123-456-7890",
		Email: "alecthompson@mail.com",
		Address: "123 Main St, City, Country",
		Specialization: "Criminal Law",
		License: "ABC12345",
		Languages: ["English", "Spanish"],
		Website: "http://www.xyzlegalaid.com",
		SocialMedia: {
			Facebook: "http://facebook.com/xyzlegalaid",
			Twitter: "xyzlegalaid",
		},
		OperatingHours: {
			Weekdays: "9 AM - 5 PM",
			Weekends: "Closed",
		},
		Accreditation: ["State Bar Association", "National Legal Aid Association"],
		Rating: 4.7,
		Experience: "15 years",
		Education: [
			"Harvard Law School - JD",
			"University of California - BA in Political Science",
		],
		Publications: ["Criminal Law Review", "The Advocate's Guide"],
		Awards: ["Best Criminal Lawyer 2022", "Top 10 Lawyers Under 40"],
	},
];
>>>>>>> Stashed changes:Frontend/src/components/laywerprofile.jsx

const Rating = ({ rating }) => {
	const stars = [];
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;

	for (let i = 0; i < 5; i++) {
		if (i < fullStars) {
			stars.push(<FaStar key={i} className="text-yellow-500" />);
		} else if (i === fullStars && hasHalfStar) {
			stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
		} else {
			stars.push(<FaStar key={i} className="text-gray-300" />);
		}
	}

	return <div className="flex items-center">{stars}</div>;
};

<<<<<<< Updated upstream:Frontend/src/components/profile/ShowProfile.jsx
const ShowProfile = ({ provider }) => {
	return (
		<div className="mx-auto w-5/6 mt-28 rounded overflow-hidden shadow-lg bg-red-950">
			<div className=" mx-auto  w-5/6 p-6 space-y-6">
				{" "}
				
=======
const LawyerProfile = () => {
	const [activeLink, setActiveLink] = useState("profile");

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	return (
		<div className="flex min mt-24">
			{/* Sidebar */}
			<div className="w-1/6 bg-gray-800 text-white flex flex-col p-6 space-y-6">
				<h2 className="text-xl font-semibold mb-6">Navigation</h2>
				<ul className="space-y-4">
					<li>
						<Link
							to="/profile"
							className={`block py-2 px-4 rounded ${
								activeLink === "profile" ? "bg-gray-600" : ""
							} hover:bg-gray-600`}
							onClick={() => handleLinkClick("profile")}>
							Profile
						</Link>
					</li>
					<li>
						<Link
							to="/dashboard"
							className={`block py-2 px-4 rounded ${
								activeLink === "dashboard" ? "bg-gray-600" : ""
							} hover:bg-gray-600`}
							onClick={() => handleLinkClick("dashboard")}>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to="/settings"
							className={`block py-2 px-4 rounded ${
								activeLink === "settings" ? "bg-gray-600" : ""
							} hover:bg-gray-600`}
							onClick={() => handleLinkClick("settings")}>
							Settings
						</Link>
					</li>
					<li>
						<div
							className={`block py-2 px-4 rounded ${
								activeLink === "edit-profile" ? "bg-gray-600" : ""
							} hover:bg-gray-600`}
							onClick={() => handleLinkClick("edit-profile")}>
							Edit Profile
						</div>
					</li>
					<li>
						<Link
							to="/login"
							className={`block py-2 px-4 rounded ${
								activeLink === "login" ? "bg-gray-600" : ""
							} hover:bg-gray-600`}
							onClick={() => handleLinkClick("login")}>
							Login
						</Link>
					</li>
					<li>
						<Link
							to="/logout"
							className={`block py-2 px-4 rounded ${
								activeLink === "logout" ? "bg-gray-600" : ""
							} hover:bg-gray-600`}
							onClick={() => handleLinkClick("logout")}>
							Logout
						</Link>
					</li>
					{/* Add more links as needed */}
				</ul>
			</div>
			{activeLink === "edit-profile" ? (
				<EditProfile />
			) : (
				""
			)}

			{/* Main Content */}
            
			<div className="w-5/6 p-6 space-y-6">
				{/* Profile Header */}
>>>>>>> Stashed changes:Frontend/src/components/laywerprofile.jsx
				<div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
					<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 mr-6">
						<img
							src={provider.userInfo.avatar}
							alt="Profile"
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h1 className="text-2xl font-semibold">
							{provider.userInfo.fullName}
						</h1>
						<p className="text-sm text-gray-700">{provider.specialization}</p>
						<div className="mt-2">
							{/* <Rating rating={lawyer[0].rating} />
							<span className="text-gray-600 text-sm ml-2">
								({lawyer.Rating}/5)
							</span> */}
						</div>
					</div>
				</div>
				{/* Details Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Professional Details Card */}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">Professional Details</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Specialization:</strong>{" "}
								{provider.specialization}
							</li>
							<li>
								<strong className="font-medium">License:</strong>{" "}
								{provider.license}
							</li>
							<li>
								<strong className="font-medium">Languages:</strong>{" "}
								{provider.languages.join(", ")}
							</li>
							<li>
								<strong className="font-medium">Website:</strong>{" "}
								<a
									href={provider.websitel}
									className="text-blue-600"
									target="_blank"
									rel="noopener noreferrer">
									{provider.website}
								</a>
							</li>
							<li>
								<strong className="font-medium">Experience:</strong>{" "}
								{provider.experience}
							</li>
						</ul>
					</div>

					{/* Contact Information Card */}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">Contact Information</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Phone:</strong> {provider.phone}
							</li>
							<li>
								<strong className="font-medium">Email:</strong>{" "}
								<a href={`mailto:${provider.email}`} className="text-blue-600">
									{provider.userInfo.email}
								</a>
							</li>
							<li>
								<strong className="font-medium">Address:</strong>{" "}
								{provider.address}
							</li>
						</ul>
					</div>

					{/* Operating Hours & Accreditation Card */}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">
							Operating Hours & Accreditation
						</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Operating Hours:</strong>{" "}
								{provider.operatingHours.weekdays} /{" "}
								{provider.operatingHours.weekends}
							</li>
							<li>
								<strong className="font-medium">Accreditation:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{provider.accreditation.map((acc, index) => (
										<li key={index}>{acc}</li>
									))}
								</ul>
							</li>
						</ul>
					</div>

					{/* Achievements and Awards Card */}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">
							Achievements & Awards
						</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Publications:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{provider.publications.map((pub, index) => (
										<li key={index}>{pub}</li>
									))}
								</ul>
							</li>
							<li>
								<strong className="font-medium">Awards:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{provider.awards.map((award, index) => (
										<li key={index}>{award}</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
<<<<<<< Updated upstream:Frontend/src/components/profile/ShowProfile.jsx

					{/*Education*/}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">Education</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Education:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{provider.education.map((edu, index) => (
										<li key={index}>{edu}</li>
									))}
								</ul>
							</li>
						</ul>
					</div>

					{/* Social Media Card */}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">Social Media</h2>
						<ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
							<li>
								<a
									href={provider.socialMedia.facebook}
									className="text-blue-600 flex items-center"
									target="_blank"
									rel="noopener noreferrer">
									<FaFacebook className="mr-2" /> Facebook
								</a>
							</li>
							<li>
								<a
									href={`https://twitter.com/${provider.socialMedia.x}`}
									className="text-blue-600 flex items-center"
									target="_blank"
									rel="noopener noreferrer">
									<FaTwitter className="mr-2" /> X
								</a>
							</li>
						</ul>
					</div>
=======
>>>>>>> Stashed changes:Frontend/src/components/laywerprofile.jsx
				</div>
			</div>
		</div>
	);
};

export default ShowProfile;
