import { render, screen } from "@testing-library/react";
import { RecursionService } from "./RecursionService";

describe("calculateSeriesSum function", () => {
 
  it("New function with x = 0 ", () => {
    expect(RecursionService.calculateSeriesSum(0)).toBeCloseTo(0.822);
  });


  it("New function with x = π/4 ", () => {
    expect(RecursionService.calculateSeriesSum(Math.PI / 4)).toBeCloseTo(0.707);
  });


  it("New function with x = π/2 ", () => {
    expect(RecursionService.calculateSeriesSum(Math.PI / 2)).toBeCloseTo(0);
  });
});
