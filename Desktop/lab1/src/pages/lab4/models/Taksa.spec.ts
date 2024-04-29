import { Taksa } from "../../lab4/models/Taksa";
//import { Dog } from "./Dog";
describe("Taksa Testing", () => {
  let taksa: Taksa;

  beforeEach(() => {

    taksa = new Taksa(60, 30);
  });

  it("Створення екземпляру класу", () => {
    expect(taksa).toBeTruthy();
  });

  it("Створення екземпляру класу з від'ємним значенням маси ", () => {
    expect(() => new Taksa(60, -30)).toThrow(new Error("M<=0"));
  });

  it("Створення екземпляру класу з від'ємним значенням довжини ", () => {
    expect(() => new Taksa(-60, 30)).toThrow(new Error("L<=0"));
  });

  it("Розрахунок кількості їжі в день для Такси довжиною 60см та вагою 30 ", () => {
    expect(new Taksa(60, 30).mealCalculation()).toEqual(2);
  });
});
