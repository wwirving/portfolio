import React from "react";
import { render } from "@testing-library/react";
import Project from "./Project";

describe("Project tests", () => {
  it("should render", () => {
    expect(render(<Project />)).toBeTruthy();
  });
});
