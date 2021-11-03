import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserItem from "../components/UserItem";
import { users } from "./mocks";

describe("UserItem Component", () => {
	it("should accept props and render a user", async () => {
		const wrapper = render(
			<BrowserRouter>
				<UserItem user={users.nodes[0]} />
			</BrowserRouter>
		);
		expect(wrapper.getByTestId("user")).toBeDefined();
		const person = wrapper.getByTestId("name");
		expect(person).toBeTruthy();
		expect(person.innerHTML).toContain("Rodgers Tanui");
	});
});
