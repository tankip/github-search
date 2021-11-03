import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Header from "../components/Header";

describe("Header Component", () => {
	const renderWithRouter = (component: JSX.Element) => {
		const history = createMemoryHistory();
		return {
			...render(<Router history={history}>{component}</Router>),
		};
	};
	it("should render the header element with logo and search", () => {
		const { getByTestId } = renderWithRouter(<Header logo={true} search={true} />);
		expect(getByTestId("header").innerHTML).toBeDefined();
		expect(getByTestId("logo")).toBeTruthy();
		expect(getByTestId("search")).toBeTruthy();
	});
});
