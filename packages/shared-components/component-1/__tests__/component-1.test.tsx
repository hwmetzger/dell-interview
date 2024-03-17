import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComponentOne from "../component-1";

describe("As a developer, when I use Component One...", () => {
  it("I should see the component", () => {
    const { getByTestId, baseElement } = render(<ComponentOne />);

    expect(baseElement).toBeInTheDocument();
    expect(getByTestId("package-component-one").innerHTML).toEqual(
      "Component One Works!"
    );
  });
});
