import { useState, useCallback } from "react";

const useLoading = (initialState = false) => {
	const [isLoading, setIsLoading] = useState(initialState);

	const startLoading = useCallback(() => {
		setIsLoading(true);
	}, []);

	const stopLoading = useCallback(() => {
		setIsLoading(false);
	}, []);

	const withLoading = useCallback(
		async (asyncFunction) => {
			try {
				startLoading();
				const result = await asyncFunction();
				return result;
			} finally {
				stopLoading();
			}
		},
		[startLoading, stopLoading]
	);

	return { isLoading, startLoading, stopLoading, withLoading };
};

export default useLoading;
