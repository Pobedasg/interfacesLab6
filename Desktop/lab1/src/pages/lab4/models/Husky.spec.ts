import { Husky } from "../../lab4/models/Husky";
//import { Dog } from "./Dog";
//Husky = require("../../lab4/models/Husky.ts")
describe("Husky Testing", () => {
  let husky: Husky;

  beforeEach(() => {
    // husky = require("../../src/pages/lab4/models/Husky.ts")
    husky = new Husky(120, 80);
  });

  it("Створення екземпляру класу", () => {
    expect(husky).toBeTruthy();
  });

  it("Створення екземпляру класу з від'ємним значенням маси ", () => {
    expect(() => new Husky(120, -80)).toThrow(new Error("M<=0"));
  });

  it("Створення екземпляру класу з від'ємним значенням висоти ", () => {
    expect(() => new Husky(-120, 80)).toThrow(new Error("L<=0"));
  });

  it("Розрахунок кількості їжі в день для Хаскі висотою 120см та вагою 80 ", () => {
    expect(new Husky(120, 80).mealCalculation()).toEqual(4800);
  });
});
