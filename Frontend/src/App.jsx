/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header, Navabar } from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./app/authSlice";
import { setMode } from "./app/modeSlice";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role="alert" className="p-4 bg-red-100 rounded-lg">
			<h2 className="text-lg font-semibold text-red-800">
				Something went wrong:
			</h2>
			<pre className="mt-2 text-sm text-red-600">{error.message}</pre>
			<button
				onClick={resetErrorBoundary}
				className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
				Try again
			</button>
		</div>
	);
}

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const token = localStorage.getItem("token");
				const userData = localStorage.getItem("userData");

				if (userData) {
					const response = await axios.get("/api/v1/user/current-user", {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});

					const data = response.data.data.user;
					dispatch(login(data));
					dispatch(setMode(data.mode));
				}
			} catch (error) {
				console.error("Error while getting user data:", error);
				// Clear invalid user data
				localStorage.removeItem("token");
				localStorage.removeItem("userData");
			}
		};

		fetchUserData();
	}, [dispatch]);

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<div className="min-h-screen flex flex-col">
				<Navabar />
				<main className="flex-grow">
					<Outlet />
				</main>
				<Footer />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</ErrorBoundary>
	);
}

export default App;
