/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";

import {
	ScaleIcon,
	DocumentTextIcon,
	CalendarIcon,
	BookOpenIcon,
	ExclamationCircleIcon,
	IdentificationIcon,
} from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/authSlice";
import axios from "axios";
import React, { useState } from "react";
import { toggle } from "../app/modeSlice";
import { connect } from "react-redux";

const products = [
	{
		name: "Imprisonment & Compensation",
		description:
			"Track imprisonment duration and calculate potential compensation amounts",
		href: "#",
		icon: CalendarIcon,
	},
	{
		name: "Document Assistance",
		description: "Help with drafting and managing legal documents",
		href: "#",
		icon: DocumentTextIcon,
	},
	{
		name: "Legal Advice",
		description:
			"network of legal professionals who can offer advice or represent users if needed",
		href: "#",
		icon: BookOpenIcon,
	},
	{
		name: "Offense Types",
		description:
			"Explore different types of offenses and their legal implications",
		href: "#",
		icon: IdentificationIcon,
	},
	{
		name: "Allegation Details",
		description:
			"Understand the nature of allegations and their impact on bail decisions",
		href: "#",
		icon: ExclamationCircleIcon,
	},
];

const ProductItem = ({ name, icon: Icon, href, description }) => {
	return (
		<a
			href={href}
			className="group relative flex items-center gap-6 rounded-lg p-4 transition-all duration-300 hover:bg-gray-100 focus:bg-gray-100"
			aria-label={name}>
			<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white transition duration-300">
				<Icon
					aria-hidden="true"
					className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition duration-300"
				/>
			</div>
			<div className="flex-auto">
				<h3 className="font-semibold text-gray-900">{name}</h3>
				<p className="mt-1 text-gray-600">{description}</p>
			</div>
		</a>
	);
};

const Header = ({ darkMode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.auth.status);
	const darkmode = useSelector((state) => state.mode.darkMode);

	const [showAccount, setShowAccount] = useState(false);
	const logoutbtn = async () => {
		try {
			const response = await axios.post("/api/v1/user/logout");
			// console.log(response);
			localStorage.removeItem("token");
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.log("error on logout", error);
		}
	};
	const addBail = async () => {
		const response = await axios.get("/api/v1/bail/add");

		console.log(response.data.data);
		navigate("/bail/" + response.data.data._id);
	};
	const toggleDarkMode = async () => {
		const response = await axios.get("/api/v1/user/toggleMode");
		dispatch(toggle());
		console.log(response.data.data);
	};

	return (
		<header className="fixed left-0 top-0 w-full bg-navy text-white">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1 justify-between">
					<a
						href="#"
						className="-m-1.5 p-1.5 justify-between items-center border border-gold rounded-full bg-navy hover:bg-gray-800 hover:border-gray-400 ease-in-out">
						<ScaleIcon className="h-8 w-8 text-gold" aria-hidden="true" />
					</a>
				</div>

				<PopoverGroup className="hidden lg:flex lg:gap-x-12 text-white">
					<Link to="/" className="text-sm font-semibold leading-6 text-white">
						Home
					</Link>
					<div
						className="text-sm font-semibold leading-6 text-white"
						onClick={() => addBail()}>
						Bail Eligiblity
					</div>
					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
							Features
							<ChevronDownIcon
								aria-hidden="true"
								className="h-5 w-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
							<div className="p-5">
								{products.map((item) => (
									<ProductItem
										key={item.name}
										name={item.name}
										icon={item.icon}
										href={item.href}
										description={item.description}
									/>
								))}
							</div>
						</PopoverPanel>
					</Popover>
				</PopoverGroup>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
					<div className="mt-2" onClick={() => toggleDarkMode()}>
						{darkmode ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								fill="#e8eaed">
								<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								fill="#e8eaed">
								<path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
							</svg>
						)}
					</div>
					{status ? (
						<div
							className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							// onClick={() => setShowAccount((prev) => !prev)}>
							onClick={() => navigate("/profile")}>
							Profile
						</div>
					) : (
						""
					)}

					{status ? (
						<div
							onClick={logoutbtn}
							className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Logout
						</div>
					) : (
						<div className="text-sm font-semibold leading-6">
							<span onClick={() => navigate("/login")}> Log in</span>/{" "}
							<span onClick={() => navigate("/signup")}> Sign up </span>{" "}
							<span aria-hidden="true">&rarr;</span>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default connect((state) => ({ darkMode: state.mode.darkMode }))(Header);
