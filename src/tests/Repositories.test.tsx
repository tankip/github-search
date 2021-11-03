import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Repositories from "../components/Repositories";
import { repositories } from "./mocks";

describe("Repositories Component", () => {
	it("should accept props and render a list of repositories", async () => {
		const wrapper = render(
			<BrowserRouter>
				<Repositories repositories={repositories} />
			</BrowserRouter>
		);
		expect(wrapper.getByTestId("repositories")).toBeDefined();
		expect(wrapper.getByTestId("repoCount")).toHaveTextContent("6 repository results");
        expect(wrapper.getAllByTestId("repository").length).toBe(6);
	});
});
