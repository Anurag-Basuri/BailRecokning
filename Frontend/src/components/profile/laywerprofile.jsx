/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
	FaFacebook,
	FaTwitter,
	FaStar,
	FaStarHalfAlt,
	FaStarOfDavid,
} from "react-icons/fa";

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

const LawyerProfile = () => {
	return (
		<div className="flex min mt-24">
			{/* Sidebar */}
			<div className="w-1/6 bg-gray-800 text-white flex flex-col p-6 space-y-6">
				<h2 className="text-xl font-semibold mb-6">Navigation</h2>
				<ul className="space-y-4">
					<li>
						<Link to="/dashboard" className="hover:text-gray-400">
							Dashboard
						</Link>
					</li>
					<li>
						<Link to="/settings" className="hover:text-gray-400">
							Settings
						</Link>
					</li>
					<li>
						<Link to="/edit-profile" className="hover:text-gray-400">
							Edit Profile
						</Link>
					</li>
					<li>
						<Link to="/login" className="hover:text-gray-400">
							Login
						</Link>
					</li>
					<li>
						<Link to="/logout" className="hover:text-gray-400">
							Logout
						</Link>
					</li>
					{/* Add more links as needed */}
				</ul>
			</div>

			{/* Main Content */}
			<div className="w-5/6 p-6 space-y-6">
				{" "}
				{/* Added margin here */}
				{/* Profile Header */}
				<div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
					<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 mr-6">
						<img
							src="https://via.placeholder.com/150"
							alt="Profile"
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h1 className="text-2xl font-semibold">{lawyer[0].Name}</h1>
						<p className="text-sm text-gray-700">{lawyer[0].Specialization}</p>
						<div className="mt-2">
							<Rating rating={lawyer[0].Rating} />
							<span className="text-gray-600 text-sm ml-2">
								({lawyer[0].Rating}/5)
							</span>
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
								{lawyer[0].Specialization}
							</li>
							<li>
								<strong className="font-medium">License:</strong>{" "}
								{lawyer[0].License}
							</li>
							<li>
								<strong className="font-medium">Languages:</strong>{" "}
								{lawyer[0].Languages.join(", ")}
							</li>
							<li>
								<strong className="font-medium">Website:</strong>{" "}
								<a
									href={lawyer[0].Website}
									className="text-blue-600"
									target="_blank"
									rel="noopener noreferrer">
									{lawyer[0].Website}
								</a>
							</li>
							<li>
								<strong className="font-medium">Experience:</strong>{" "}
								{lawyer[0].Experience}
							</li>
						</ul>
					</div>

					{/* Contact Information Card */}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">Contact Information</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Phone:</strong>{" "}
								{lawyer[0].Phone}
							</li>
							<li>
								<strong className="font-medium">Email:</strong>{" "}
								<a href={`mailto:${lawyer[0].Email}`} className="text-blue-600">
									{lawyer[0].Email}
								</a>
							</li>
							<li>
								<strong className="font-medium">Address:</strong>{" "}
								{lawyer[0].Address}
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
								{lawyer[0].OperatingHours.Weekdays} /{" "}
								{lawyer[0].OperatingHours.Weekends}
							</li>
							<li>
								<strong className="font-medium">Accreditation:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{lawyer[0].Accreditation.map((acc, index) => (
										<li key={index}>{acc}</li>
									))}
								</ul>
							</li>
						</ul>
					</div>

					{/*Achivments and Awards*/}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-x1 font-semibold mb-4">
							Achivments and Awards
						</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Publications:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{lawyer[0].Publications.map((pub, index) => (
										<li key={index}>{pub}</li>
									))}
								</ul>
							</li>
							<li>
								<strong className="font-medium">Awards:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{lawyer[0].Awards.map((award, index) => (
										<li key={index}>{award}</li>
									))}
								</ul>
							</li>
						</ul>
					</div>

					{/*Education*/}
					<div className="bg-white shadow-lg rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-4">Education</h2>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<strong className="font-medium">Education:</strong>
								<ul className="list-disc pl-5 space-y-1">
									{lawyer[0].Education.map((edu, index) => (
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
									href={lawyer[0].SocialMedia.Facebook}
									className="text-blue-600 flex items-center"
									target="_blank"
									rel="noopener noreferrer">
									<FaFacebook className="mr-2" /> Facebook
								</a>
							</li>
							<li>
								<a
									href={`https://twitter.com/${lawyer[0].SocialMedia.Twitter}`}
									className="text-blue-600 flex items-center"
									target="_blank"
									rel="noopener noreferrer">
									<FaTwitter className="mr-2" /> Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LawyerProfile;
