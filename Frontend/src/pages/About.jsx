/* eslint-disable no-unused-vars */
import React from "react";

const BailReckonerAbout = () => {
	return (
		<div className="bg-gray-100 z-auto mt-20 pt-10 pb-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Heading Section */}
				<div className="text-center">
					<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
						About Bail Reckoner
					</h1>
					<p className="mt-4 text-lg leading-6 text-gray-600">
						Bail Reckoner is an innovative digital solution designed to
						revolutionize the bail process for undertrial prisoners, legal aid
						providers, and judicial authorities. Our platform streamlines and
						simplifies the complex legal procedures involved in applying for
						bail, ensuring a more transparent, efficient, and just system.
					</p>
					<p className="mt-4 text-lg leading-6 text-gray-600">
						At Bail Reckoner, we aim to reduce the administrative burden on
						legal professionals while empowering undertrial prisoners with
						timely and accurate information about their bail eligibility. By
						leveraging technology, our tool considers a variety of legal and
						procedural parameters to provide clear, actionable insights into the
						bail process.
					</p>
				</div>

				{/* Main Content Section */}
				<div className="mt-12 space-y-12">
					{/* Section 1 */}
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-2xl font-bold text-gray-800">What It Does</h2>
						<p className="mt-4 text-gray-600">
							Bail Reckoner is a user-friendly, digital solution that provides:
						</p>
						<ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
							<li>
								<strong>For Educational Purpose:</strong> Information
								for any IPC or BNS section, and previous cases related to them.
							</li>
							<li>
								<strong>For Undertrial Prisoners:</strong> Immediate insights
								into bail eligibility based on the charges, imprisonment
								duration, and more.
							</li>
							<li>
								<strong>For Lawyers/Advocates:</strong> They can present themselves here to get hired and they can charge money accordingly.
							</li>
							<li>
								<strong>For Legal Aid Providers:</strong> Streamlined tools to
								prepare compliant, accurate bail applications with a detailed
								legal analysis.
							</li>
							<li>
								<strong>For Judicial Authorities:</strong> A system to aid in
								faster and more transparent bail evaluations, making the process
								more efficient.
							</li>
						</ul>
					</div>

					{/* Section 2 */}
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
						<ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
							<li>
								<strong>Comprehensive Legal Database:</strong> Covers offenses
								under key laws including the Indian Penal Code (IPC), Bhartiya
								Nyaya Sanhita, and other special acts like crimes against women,
								children, SCs/STs, economic offenses, etc.
							</li>
							<li>
								<strong>Real-Time Bail Checker:</strong> Monitors bail
								eligibility by analyzing charges and penalties under various
								laws, and tracking time served by the prisoner also you can forward your application to your Lawyer.
							</li>
							<li>
								<strong>Hire a Lawyer or Look for Legal-Aid:</strong> Any normal user or an undertrial user can look for help online where they will have more and better option.
							</li>
							<li>
								<strong>Risk & Compliance Evaluation:</strong> Considers
								judicial discretion on risks like fleeing jurisdiction or
								influencing evidence, ensuring compliance with procedural
								requirements.
							</li>
							<li>
								<strong>Document-Verifier:</strong> Verify your documents related to your Bail process.
							</li>
							<li>
								<strong>Integration with Legal Systems:</strong> Can be easily
								integrated with existing judicial and legal software to enhance
								process efficiency.
							</li>
						</ul>
					</div>

					{/* Section 3 */}
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
						<p className="mt-4 text-gray-600">
							We believe in a more transparent and equitable legal system, where
							every undertrial prisoner has access to timely justice. By
							leveraging technology and streamlining the bail process, we aim to
							reduce delays and ensure fairness for all involved.
						</p>
						<p className="mt-4 text-gray-600">
							Our goal is to empower legal aid providers, enhance judicial
							efficiency, and ultimately transform the bail system into a more
							just, transparent, and accessible process.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BailReckonerAbout;
