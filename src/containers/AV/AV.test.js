import React from "react";
import { render } from "@testing-library/react";
import AV from "./AV";

describe("AV tests", () => {
  it("should render", () => {
    expect(render(<AV />)).toBeTruthy();
  });
});
