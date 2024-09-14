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
import React, { useEffect, useState } from "react";
import { SideAccount } from "./index";

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

export default function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.auth.status);
	// const userData = useSelector((state) => state.auth.userData);

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
					{status ? (
						<div
							className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
			{showAccount ? <SideAccount /> : ""}
		</header>
	);
}
