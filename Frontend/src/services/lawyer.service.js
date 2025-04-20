import api from "../config/api.config.js";

export const getLawyer = async (id) => {
	const response = await api.get(`/lawyers/${id}`);
	return response.data;
};

export const updateLawyer = async (id, updates) => {
	const response = await api.patch(`/lawyers/${id}`, updates);
	return response.data;
};

export const listLawyers = async (params) => {
	const response = await api.get("/lawyers", { params });
	return response.data;
};

export const getLawyerCases = async (id) => {
	const response = await api.get(`/lawyers/${id}/cases`);
	return response.data;
};

export const getLawyerBails = async (id) => {
	const response = await api.get(`/lawyers/${id}/bails`);
	return response.data;
};

export const updateLawyerProfile = async (id, formData) => {
	const response = await api.patch(`/lawyers/${id}/profile`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};
