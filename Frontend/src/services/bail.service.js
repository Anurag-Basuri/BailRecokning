import api from "../config/api.config.js";

export const createBail = async (bailData) => {
	const response = await api.post("/bails", bailData);
	return response.data;
};

export const getBail = async (id) => {
	const response = await api.get(`/bails/${id}`);
	return response.data;
};

export const updateBail = async (id, updates) => {
	const response = await api.patch(`/bails/${id}`, updates);
	return response.data;
};

export const deleteBail = async (id) => {
	const response = await api.delete(`/bails/${id}`);
	return response.data;
};

export const listBails = async (params) => {
	const response = await api.get("/bails", { params });
	return response.data;
};

export const addBailDocument = async (bailId, formData) => {
	const response = await api.post(`/bails/${bailId}/documents`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export const removeBailDocument = async (bailId, documentId) => {
	const response = await api.delete(`/bails/${bailId}/documents/${documentId}`);
	return response.data;
};
