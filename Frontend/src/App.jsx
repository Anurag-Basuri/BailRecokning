import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./app/authSlice";
import axios from "axios";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			const funC = async () => {
				const token = localStorage.getItem("token");
				const userData = localStorage.getItem("userData");
				if (userData) {
					const response = await axios.get("/api/v1/user/current-user");
					const data = response.data.data.user;
					console.log(data);
					dispatch(login(data));
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
