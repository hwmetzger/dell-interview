import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComponentTwo from "../component-2";

describe("As a developer, when I use Component Two...", () => {
  it("I should see the component", () => {
    const { getByTestId, baseElement } = render(<ComponentTwo />);

    expect(baseElement).toBeInTheDocument();
    expect(getByTestId("package-component-two").innerHTML).toEqual(
      "Component Two Works!"
    );
  });
});
