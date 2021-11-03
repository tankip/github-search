import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Results from "../views/Results";
import { peopleErrorMock, usersSuccessMock, reposSuccessMock } from "./mocks";

describe("Results Component Test", () => {
	const errorMock = [peopleErrorMock()];
	const usersMock = [usersSuccessMock()];
	const reposMock = [reposSuccessMock()];

	const renderWithRouter = (component: JSX.Element) => {
		const history = createBrowserHistory();
		const state = {
			searchText: "tankip",
		};
		history.push("/results", state);
		return {
			...render(<Router history={history}>{component}</Router>),
		};
	};

	it("should display loading spinner when fetching users and repositories", async () => {
		await act(async () => {
			const wrapper = renderWithRouter(
				<MockedProvider mocks={usersMock} addTypename={false}>
					<Results />
				</MockedProvider>
			);
			expect(wrapper.getByTestId("results")).toBeDefined();
			expect(wrapper.getByTestId("searchText").innerHTML).toContain("tankip");
			await new Promise((resolve) => setTimeout(resolve, 0));
			expect(wrapper.getByTestId("loading")).toBeTruthy();
		});
	});

	it("should render repositories list", async () => {
		await act(async () => {
			const wrapper = renderWithRouter(
				<MockedProvider mocks={reposMock} addTypename={false}>
					<BrowserRouter>
						<Results />
					</BrowserRouter>
				</MockedProvider>
			);
			await new Promise((resolve) => setTimeout(resolve, 0));
			await new Promise((resolve) => setTimeout(resolve, 0));
			expect(wrapper.getByTestId("repositories")).toBeTruthy();
		});
	});

	it("should display an error when an error is encountered", async () => {
		await act(async () => {
			const wrapper = render(
				<MockedProvider mocks={errorMock} addTypename={false}>
					<BrowserRouter>
						<Results />
					</BrowserRouter>
				</MockedProvider>
			);
			await new Promise((resolve) => setTimeout(resolve, 0));
			await new Promise((resolve) => setTimeout(resolve, 0));
			expect(wrapper.getAllByTestId("error").length).toBe(2);
		});
	});
});
