// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Intoduction() {
	return (
		<div className="absolute rekative bg-fixed bg-gradient-to-r from-violet-500 to-fuchsia-500 -z-10 pt-24 p-10">
			{/* Header */}
			<header className="bg-gray-900 text-white py-5 px-4 sm:px-6 lg:px-8 text-center">
				<div className="conatiner mx-auto flex justify-center items-center">
					<h1 className="text-3xl font-bold">Welcome to BailReckoner</h1>
				</div>
			</header>

			{/* Hero Section */}
			<main className="flex-grow flex justify-center items-center bg-gray-100 py-20">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Streamline Your Bail Process</h2>
					<p className="mt-4 text-lg">
						The Bail Reckoner is a cutting-edge tool designed to streamline the
						bail application process for undertrial prisoners, legal aid
						providers, and judicial authorities. By integrating key legal
						parameters, procedural requirements, and judicial guidelines, this
						platform provides a seamless, user-friendly experience for
						determining bail eligibility.
					</p>
				</div>
			</main>

			{/* Features Section */}
			<section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Feature 1 */}
					<div className="flex flex-col items-center justify-center">
						<img
							src="bail-eligibility-icon.svg"
							alt="Bail Eligibility"
							className="w-20 h-20 mb-4"
						/>
						<h3 className="text-xl font-bold">Bail Eligibility</h3>
						<p className="text-gray-500">
							Calculate your potential bail amount.
						</p>
					</div>

					{/* Feature 2 */}
					<div className="flex flex-col items-center justify-center">
						<img
							src="imprisonment-tracker-icon.svg"
							alt="Imprisonment Tracker"
							className="w-20 h-20 mb-4"
						/>
						<h3 className="text-xl font-bold">Imprisonment Tracker</h3>
						<p className="text-gray-500">
							Monitor your time served and expected release date.
						</p>
					</div>

					{/* Feature 3 */}
					<div className="flex flex-col items-center justify-center">
						<img
							src="legal-document-assistance-icon.svg"
							alt="Legal Document Assistance"
							className="w-20 h-20 mb-4"
						/>
						<h3 className="text-xl font-bold">Legal Document Assistance</h3>
						<p className="text-gray-500">Get help with legal paperwork.</p>
					</div>

					{/* Feature 4 */}
					<div className="flex flex-col items-center justify-center">
						<img
							src="case-law-integration-icon.svg"
							alt="Case Law Integration"
							className="w-20 h-20 mb-4"
						/>
						<h3 className="text-xl font-bold">Case Law Integration</h3>
						<p className="text-gray-500">
							Access relevant case law for your case.
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto flex justify-between items-center">
					<p>&copy; 2023 Bail Reckoner</p>
					<div className="flex space-x-4">
						<a href="#" className="text-gray-300 hover:text-white">
							Support
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							Terms & Conditions
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							Privacy Policy
						</a>
					</div>
					<div className="flex space-x-4">
						<a href="#" className="text-gray-300 hover:text-white">
							Facebook
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							Twitter
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							{" "}
							LinkedIn
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
