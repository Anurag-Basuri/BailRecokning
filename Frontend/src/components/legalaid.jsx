/* eslint-disable no-unused-vars */
import React from "react";

export default function legalaid() {
	const lawyer = [
		{
			Name: "XYZ Legal Aid",
			Phone: "123-456-7890",
			Email: "contact@xyzlegalaid.com",
			Address: "123 Main St, City, Country", // office
			Specialization: "Criminal Law", // Example: Criminal Law, Family Law, etc.
			License: "ABC12345", // License number of the legal aid provider
			Languages: ["English", "Spanish"], // Languages spoken by the provider optional
			Website: "http://www.xyzlegalaid.com", // Website of the provider if any
			SocialMedia: {
				Facebook: "http://facebook.com/xyzlegalaid",
				Twitter: "@xyzlegalaid", // Twitter handle or other social links
			},
			OperatingHours: {
				Weekdays: "9 AM - 5 PM",
				Weekends: "Closed", // Specific office hours
			},
			Accreditation: [
				"State Bar Association",
				"National Legal Aid Association",
			],
		},
	];


	return (
		<main>
			<header>
				<h1>Legal Aid Providers</h1>
			</header>
			<section>
				{lawyer.map((provider, index) => (
					<article key={index}>
						<h2>{provider.Name}</h2>
						<p>
							<strong>Specialization:</strong> {provider.Specialization}
						</p>
						<p>
							<strong>License:</strong> {provider.License}
						</p>
						<address>
							<p>
								<strong>Phone:</strong> {provider.Phone}
							</p>
							<p>
								<strong>Email:</strong>{" "}
								<a href={`mailto:${provider.Email}`}>{provider.Email}</a>
							</p>
							<p>
								<strong>Address:</strong> {provider.Address}
							</p>
						</address>
						<p>
							<strong>Languages Spoken:</strong> {provider.Languages.join(", ")}
						</p>
						<p>
							<strong>Website:</strong>{" "}
							<a href={provider.Website}>{provider.Website}</a>
						</p>

						<section>
							<h3>Operating Hours:</h3>
							<p>
								<strong>Weekdays:</strong> {provider.OperatingHours.Weekdays}
							</p>
							<p>
								<strong>Weekends:</strong> {provider.OperatingHours.Weekends}
							</p>
						</section>

						<section>
							<h3>Social Media:</h3>
							<p>
								<a href={provider.SocialMedia.Facebook}>Facebook</a> | Twitter:{" "}
								<a href={`https://twitter.com/${provider.SocialMedia.Twitter}`}>
									{provider.SocialMedia.Twitter}
								</a>
							</p>
						</section>

						<footer>
							<h3>Accreditations:</h3>
							<ul>
								{provider.Accreditation.map((accreditation, i) => (
									<li key={i}>{accreditation}</li>
								))}
							</ul>
						</footer>
					</article>
				))}
			</section>
		</main>
	);
}
