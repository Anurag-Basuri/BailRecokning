import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold">BailRecokning</h3>
						<p className="text-gray-400">
							Empowering legal professionals with modern case management
							solutions.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="GitHub">
								<FaGithub className="w-6 h-6" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Twitter">
								<FaTwitter className="w-6 h-6" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="LinkedIn">
								<FaLinkedin className="w-6 h-6" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="/about"
									className="text-gray-400 hover:text-white transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="text-gray-400 hover:text-white transition-colors">
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-gray-400 hover:text-white transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Resources</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="/blog"
									className="text-gray-400 hover:text-white transition-colors">
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/documentation"
									className="text-gray-400 hover:text-white transition-colors">
									Documentation
								</Link>
							</li>
							<li>
								<Link
									to="/faq"
									className="text-gray-400 hover:text-white transition-colors">
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="/privacy"
									className="text-gray-400 hover:text-white transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-gray-400 hover:text-white transition-colors">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									to="/cookies"
									className="text-gray-400 hover:text-white transition-colors">
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
							© {currentYear} BailRecokning. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								to="/accessibility"
								className="text-gray-400 hover:text-white text-sm transition-colors">
								Accessibility
							</Link>
							<Link
								to="/sitemap"
								className="text-gray-400 hover:text-white text-sm transition-colors">
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
