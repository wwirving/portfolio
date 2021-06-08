import React from "react";
import { render } from "@testing-library/react";
import Piece from "./Piece";

describe("Piece tests", () => {
  it("should render", () => {
    expect(render(<Piece />)).toBeTruthy();
  });
});
