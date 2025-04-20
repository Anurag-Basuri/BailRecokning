import api from "../config/api.config.js";

export const getJudge = async (id) => {
	const response = await api.get(`/judges/${id}`);
	return response.data;
};

export const updateJudge = async (id, updates) => {
	const response = await api.patch(`/judges/${id}`, updates);
	return response.data;
};

export const listJudges = async (params) => {
	const response = await api.get("/judges", { params });
	return response.data;
};

export const getJudgeCases = async (id) => {
	const response = await api.get(`/judges/${id}/cases`);
	return response.data;
};

export const getJudgeBails = async (id) => {
	const response = await api.get(`/judges/${id}/bails`);
	return response.data;
};

export const updateJudgeProfile = async (id, formData) => {
	const response = await api.patch(`/judges/${id}/profile`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};
