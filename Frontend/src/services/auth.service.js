import api from "../config/api.config.js";

export const login = async (credentials) => {
	const response = await api.post("/auth/login", credentials);
	if (response.data.token) {
		localStorage.setItem("token", response.data.token);
	}
	return response.data;
};

export const register = async (userData) => {
	const response = await api.post("/auth/register", userData);
	return response.data;
};

export const logout = () => {
	localStorage.removeItem("token");
};

export const getCurrentUser = async () => {
	const response = await api.get("/auth/me");
	return response.data;
};
