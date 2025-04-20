import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";

// Mock the store
const mockStore = configureStore({
	reducer: {
		auth: () => ({ user: null }),
		mode: () => ({ darkMode: false }),
	},
});

describe("App", () => {
	it("renders without crashing", () => {
		render(
			<Provider store={mockStore}>
				<App />
			</Provider>
		);

		// Check if the navbar is rendered
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});
});
