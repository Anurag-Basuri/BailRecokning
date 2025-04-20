import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/authSlice";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaUserCircle } from "react-icons/fa";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Bail", href: "/bail", current: false },
	{ name: "Lawyers", href: "/lawyers", current: false },
	{ name: "Know Your Law", href: "/know-your-law", current: false },
	{ name: "About", href: "/about", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLogout = () => {
		dispatch(logout());
		localStorage.removeItem("token");
		localStorage.removeItem("userData");
	};

	return (
		<Disclosure
			as="nav"
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-lg" : "bg-transparent"
			}`}>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<Link to="/" className="flex-shrink-0">
									<span className="text-2xl font-bold text-primary-600">
										BailRecokning
									</span>
								</Link>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													location.pathname === item.href
														? "bg-primary-100 text-primary-700"
														: "text-gray-700 hover:bg-primary-50 hover:text-primary-700",
													"rounded-md px-3 py-2 text-sm font-medium transition-colors"
												)}>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>

							<div className="hidden md:block">
								<div className="ml-4 flex items-center md:ml-6">
									{user ? (
										<Menu as="div" className="relative ml-3">
											<div>
												<Menu.Button className="flex rounded-full bg-primary-100 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
													<span className="sr-only">Open user menu</span>
													<FaUserCircle className="h-8 w-8 text-primary-600" />
												</Menu.Button>
											</div>
											<Transition
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95">
												<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<Menu.Item>
														{({ active }) => (
															<Link
																to="/profile"
																className={classNames(
																	active ? "bg-primary-50" : "",
																	"block px-4 py-2 text-sm text-gray-700"
																)}>
																Your Profile
															</Link>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<button
																onClick={handleLogout}
																className={classNames(
																	active ? "bg-primary-50" : "",
																	"block w-full px-4 py-2 text-left text-sm text-gray-700"
																)}>
																Sign out
															</button>
														)}
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</Menu>
									) : (
										<div className="flex space-x-4">
											<Link
												to="/login"
												className="rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-700">
												Sign in
											</Link>
											<Link
												to="/signup"
												className="rounded-md border border-primary-600 px-3 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50">
												Sign up
											</Link>
										</div>
									)}
								</div>
							</div>

							<div className="-mr-2 flex md:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-primary-100 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as={Link}
									to={item.href}
									className={classNames(
										location.pathname === item.href
											? "bg-primary-100 text-primary-700"
											: "text-gray-700 hover:bg-primary-50 hover:text-primary-700",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className="border-t border-gray-200 pb-3 pt-4">
							{user ? (
								<>
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<FaUserCircle className="h-8 w-8 text-primary-600" />
										</div>
										<div className="ml-3">
											<div className="text-base font-medium text-gray-800">
												{user.name}
											</div>
											<div className="text-sm font-medium text-gray-500">
												{user.email}
											</div>
										</div>
									</div>
									<div className="mt-3 space-y-1 px-2">
										<Disclosure.Button
											as={Link}
											to="/profile"
											className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700">
											Your Profile
										</Disclosure.Button>
										<Disclosure.Button
											as="button"
											onClick={handleLogout}
											className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700">
											Sign out
										</Disclosure.Button>
									</div>
								</>
							) : (
								<div className="space-y-1 px-2">
									<Disclosure.Button
										as={Link}
										to="/login"
										className="block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-700">
										Sign in
									</Disclosure.Button>
									<Disclosure.Button
										as={Link}
										to="/signup"
										className="block w-full rounded-md border border-primary-600 px-3 py-2 text-center text-base font-medium text-primary-600 hover:bg-primary-50">
										Sign up
									</Disclosure.Button>
								</div>
							)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
