import api from "../config/api.config.js";

export const createCase = async (caseData) => {
	const response = await api.post("/cases", caseData);
	return response.data;
};

export const getCase = async (id) => {
	const response = await api.get(`/cases/${id}`);
	return response.data;
};

export const updateCase = async (id, updates) => {
	const response = await api.patch(`/cases/${id}`, updates);
	return response.data;
};

export const deleteCase = async (id) => {
	const response = await api.delete(`/cases/${id}`);
	return response.data;
};

export const listCases = async (params) => {
	const response = await api.get("/cases", { params });
	return response.data;
};

export const addTimelineEvent = async (caseId, eventData) => {
	const response = await api.post(`/cases/${caseId}/timeline`, eventData);
	return response.data;
};

export const updateTimelineEvent = async (caseId, eventId, updates) => {
	const response = await api.patch(
		`/cases/${caseId}/timeline/${eventId}`,
		updates
	);
	return response.data;
};

export const deleteTimelineEvent = async (caseId, eventId) => {
	const response = await api.delete(`/cases/${caseId}/timeline/${eventId}`);
	return response.data;
};
