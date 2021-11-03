import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Users from "../components/Users";
import { users } from "./mocks";

describe("Users Component", () => {
	it("should accept props and render a list of users", async () => {
		const wrapper = render(
			<BrowserRouter>
				<Users users={users} />
			</BrowserRouter>
		);
		expect(wrapper.getByTestId("users")).toBeDefined();
		expect(wrapper.getByTestId("usersCount")).toHaveTextContent("10 users");
		expect(wrapper.getAllByTestId("user").length).toBe(10);
	});
});
