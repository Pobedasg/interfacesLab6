import { render, screen } from "@testing-library/react";
import { FunctionService } from "./FunctionService";

describe("calculate function", () => {
  it("New function with x = 0, i = 1 ", () => {
    expect(FunctionService.calculate(0, 1)).toBeCloseTo(0.822);
  });

  it("New function with x = π/4, i = 0 ", () => {
    expect(FunctionService.calculate(Math.PI / 4, 0)).toBeCloseTo(0.642);
  });

  it("New function with x = 2, i= 1 ", () => {
    expect(FunctionService.calculate(2, 1)).toBeCloseTo(-0.48);
  });
});
