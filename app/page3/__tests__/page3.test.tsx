import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

describe("As a user, when I view Page 3...", () => {
  it("I should see the page load", () => {
    const { getByTestId, baseElement } = render(<Page />);

    expect(baseElement).toBeInTheDocument();
    expect(getByTestId("page-title").innerHTML).toEqual("Page Three");
    expect(getByTestId("package-component-three").innerHTML).toEqual(
      "Component Three Works!"
    );
  });
});
