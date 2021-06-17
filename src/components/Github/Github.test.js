import React from "react";
import { render } from "@testing-library/react";
import Github from "./Github";

describe("Github tests", () => {
  it("should render", () => {
    expect(render(<Github />)).toBeTruthy();
  });
});
