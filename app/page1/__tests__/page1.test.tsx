import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

describe("As a user, when I view Page 1...", () => {
  it("I should see the page load", () => {
    const { getByTestId, baseElement } = render(<Page />);

    expect(baseElement).toBeInTheDocument();
    expect(getByTestId("page-title").innerHTML).toEqual("Page One");
    expect(getByTestId("package-component-one").innerHTML).toEqual(
      "Component One Works!"
    );
  });
});
