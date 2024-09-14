/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./app/authSlice";
import { setMode } from "./app/modeSlice";
import axios from "axios";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			const funC = async () => {
				const token = localStorage.getItem("token");
				// const mode = localStorage.getItem("darkMode");
				const userData = localStorage.getItem("userData");
				if (userData) {
					const response = await axios.get("/api/v1/user/current-user");
					const data = response.data.data.user;
					// console.log(data);
					dispatch(login(data));
					dispatch(setMode(data.mode));
				}
			};

			funC();
		} catch (error) {
			console.log("error while getting user data");
		}
	}, []);

	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
