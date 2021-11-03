import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RepositoryItem from "../components/RepositoryItem";
import { repositories } from "./mocks";

describe("RepositoryItem Component", () => {
	it("should accept props and render a repository", async () => {
		const wrapper = render(
			<BrowserRouter>
				<RepositoryItem repository={repositories.nodes[0]} />
			</BrowserRouter>
		);
		expect(wrapper.getByTestId("repository")).toBeDefined();
		const person = wrapper.getByTestId("ownerName");
		expect(person).toBeTruthy();
		expect(person.innerHTML).toContain("leny/tankipas");
	});
});
