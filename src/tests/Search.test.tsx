import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Search from "../components/Search";

describe("Search Component Test", () => {
	const renderWithRouter = (component: JSX.Element) => {
		const history = createMemoryHistory();
		return {
			...render(<Router history={history}>{component}</Router>),
		};
	};
	it("should render search input", () => {
		const { getByTestId } = renderWithRouter(<Search />);
		expect(getByTestId("search")).toBeTruthy();
	});
});
