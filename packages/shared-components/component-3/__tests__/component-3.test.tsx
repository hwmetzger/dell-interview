import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComponentThree from "../component-3";

describe("As a developer, when I use Component Three...", () => {
  it("I should see the component", () => {
    const { getByTestId, baseElement } = render(<ComponentThree />);

    expect(baseElement).toBeInTheDocument();
    expect(getByTestId("package-component-three").innerHTML).toEqual(
      "Component Three Works!"
    );
  });
});
