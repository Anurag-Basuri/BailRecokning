import React, { useEffect, useState } from "react";
import { listCases } from "../../services/case.service";
import useApiError from "../../hooks/useApiError";
import useLoading from "../../hooks/useLoading";

const CaseList = () => {
	const [cases, setCases] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { handleError } = useApiError();
	const { isLoading, withLoading } = useLoading();

	const fetchCases = async () => {
		try {
			const response = await withLoading(() => listCases({ page, limit: 10 }));
			setCases(response.data.cases);
			setTotalPages(response.data.pages);
		} catch (error) {
			handleError(error);
		}
	};

	useEffect(() => {
		fetchCases();
	}, [page]);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-bold mb-6">Cases</h2>
			<div className="grid gap-6">
				{cases.map((caseItem) => (
					<div key={caseItem._id} className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
						<p className="text-gray-600 mb-4">{caseItem.description}</p>
						<div className="flex justify-between items-center">
							<span className="text-sm text-gray-500">
								Status: {caseItem.status}
							</span>
							<button
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
								onClick={() => {
									// Handle view case details
								}}>
								View Details
							</button>
						</div>
					</div>
				))}
			</div>
			{totalPages > 1 && (
				<div className="flex justify-center mt-6 gap-2">
					<button
						className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
						onClick={() => handlePageChange(page - 1)}
						disabled={page === 1}>
						Previous
					</button>
					<span className="px-4 py-2">
						Page {page} of {totalPages}
					</span>
					<button
						className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
						onClick={() => handlePageChange(page + 1)}
						disabled={page === totalPages}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default CaseList;
