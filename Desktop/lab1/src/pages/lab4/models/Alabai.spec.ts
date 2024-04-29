import { Alabai } from "../../lab4/models/Alabai";

describe("Alabai Testing", () => {
  let alabai: Alabai;

  beforeEach(() => {
    alabai = new Alabai(50, 60);
  });

  it("Створення екземпляру класу", () => {
    expect(alabai).toBeTruthy();
  });

  it("Створення екземпляру класу з від'ємним значенням маси ", () => {
    expect(() => new Alabai(50, -60)).toThrow(new Error("M<=0"));
  });

  it("Створення екземпляру класу з від'ємним значенням висоти ", () => {
    expect(() => new Alabai(-50, 60)).toThrow(new Error("L<=0"));
  });

  it("Розрахунок кількості їжі в день для Алабая висотою 50см та вагою 60 ", () => {
    expect(new Alabai(50, 60).mealCalculation()).toEqual(2400);
  });
});
