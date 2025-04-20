import api from "../config/api.config.js";

export const uploadDocument = async (formData) => {
	const response = await api.post("/documents", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export const getDocument = async (id) => {
	const response = await api.get(`/documents/${id}`);
	return response.data;
};

export const updateDocument = async (id, formData) => {
	const response = await api.patch(`/documents/${id}`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export const deleteDocument = async (id) => {
	const response = await api.delete(`/documents/${id}`);
	return response.data;
};

export const listDocuments = async (params) => {
	const response = await api.get("/documents", { params });
	return response.data;
};
