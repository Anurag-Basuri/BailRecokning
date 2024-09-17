/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./app/store.js";
import { AuthLayout, BailCharges, ShowProfile } from "./components/index.js";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Bail from "./pages/Bail.jsx";
import Profile from "./pages/Profile.jsx";
import LawyerInfo from "./pages/LawyerInfo.jsx";
import HireLawyer from "./pages/HireLawyer.jsx";
import KnowYourLaw from "./pages/KnowYourLaw.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/About",
				element: <About />,
			},
			{
				path: "/login",
				element: (
					<AuthLayout authhentication={false}>
						<Login />
					</AuthLayout>
				),
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/p/profile/:profileId",
				element: <LawyerInfo />,
			},
			{
				path: "/bail/:bailId",
				element: <Bail />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/hireLawyer",
				element: <HireLawyer />,
			},
			{
				path: "/knowYourLaw",
				element: <KnowYourLaw />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
