import { TabService } from "./TabService";

describe("TabService.tabulation function", () => {
  let result: Map<number, number>;

  beforeEach(() => {
    result = TabService.tabulation(0.1, 3.14, 0.1);
  });

  // Перевірка для x = 0.1
  it("New function with x = 0 ", () => {
    expect(result.get(0.1)).toBeCloseTo((Math.PI ** 2 - 3 * 0.1 ** 2) / 12);
  });

  // Перевірка для x = 0.2
  it("New function with x = 0 ", () => {
    expect(result.get(0.2)).toBeCloseTo((Math.PI ** 2 - 3 * 0.2 ** 2) / 12);
  });

  // Перевірка для x = 3.1
  it("New function with x = 0 ", () => {
    expect(result.get(1.3)).toBeCloseTo((Math.PI ** 2 - 3 * 1.3 ** 2) / 12);
  });
});
