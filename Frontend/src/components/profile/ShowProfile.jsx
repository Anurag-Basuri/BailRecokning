import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaStar, FaStarHalfAlt } from "react-icons/fa";

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

const ShowProfile = ({ provider }) => {
	return (
		<div className="mx-auto w-5/6 mt-28 rounded overflow-hidden shadow-lg bg-red-950">
			<div className=" mx-auto  w-5/6 p-6 space-y-6">
				{" "}
				
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
				</div>
			</div>
		</div>
	);
};

export default ShowProfile;
