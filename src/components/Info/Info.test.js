import React from "react";
import { render } from "@testing-library/react";
import Info from "./Info";

describe("Info tests", () => {
  it("should render", () => {
    expect(render(<Info />)).toBeTruthy();
  });
});
