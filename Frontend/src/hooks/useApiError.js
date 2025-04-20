import { useCallback } from "react";
import { toast } from "react-toastify";

const useApiError = () => {
	const handleError = useCallback((error) => {
		const message =
			error.response?.data?.message ||
			error.message ||
			"An unexpected error occurred";

		toast.error(message);

		// Log error for debugging
		console.error("API Error:", error);

		// Return error message for potential UI display
		return message;
	}, []);

	return { handleError };
};

export default useApiError;
