import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../views/Home";

describe("Home Component Test", () => {
	beforeEach(() => {
		localStorage.setItem("user", JSON.stringify({ name: "Rodgers Tanui", avatarUrl: "https://avatars.githubusercontent.com/u/19776893?v=4" }));
	});
	it("should show the search input field", () => {
		const wrapper = render(<Home />);
		expect(wrapper.getByTestId("searchInput")).toBeTruthy();
	});

	it("should pass name to search input", () => {
		const wrapper = render(<Home />);
		const inputEl = wrapper.getByTestId("searchInput");
		userEvent.type(inputEl, "tankip");
		expect(wrapper.getByTestId("searchInput")).toHaveValue("tankip");
	});
});
