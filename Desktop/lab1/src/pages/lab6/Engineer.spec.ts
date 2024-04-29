import { Engineer } from "./Engineer";

describe("Engineer Testing", () => {
  let engineer: Engineer;

  beforeEach(() => {
    engineer = new Engineer(
      "Smith",
      "John",
      "male",
      new Date(1980, 5, 15),
      "senior",
      10,
      "software developer",
      800,
      "Monday",
      8,
      20,
      5
    );
  });

  it("Створення екземляру класу Engineer", () => {
    expect(engineer).toBeTruthy();
  });

  it("Створення екземляру класу Engineer з від'ємним значенням досвіду", () => {
    expect(
      () =>
        new Engineer(
          "Smith",
          "John",
          "male",
          new Date(1980, 5, 15),
          "senior",
          -10,
          "software developer",
          800,
          "Monday",
          8,
          20,
          5
        )
    ).toThrow(new Error("Досвід не може бути менше 0"));
  });

  it("Створення екземляру класу Engineer з недопустимим значенням для рівня кваліфікації", () => {
    expect(
      () =>
        new Engineer(
          "Smith",
          "John",
          "male",
          new Date(1980, 5, 15),
          "senior",
          10,
          "software developer",
          800,
          "Monday",
          8,
          20,
          10
        )
    ).toThrow(new Error("Недопустиме значення для рівня кваліфікації"));
  });

  it("Створення екземляру класу Engineer із задовільним значенням досвіду", () => {
    engineer.setExperience(12);
    expect(engineer.getExperience()).toEqual(12);
  });

  it("Створення екземляру класу Engineer із задовільним значенням зарплати", () => {
    engineer.setSalary(1000);
    expect(engineer.getSalary()).toEqual(1000);
  });

  it("Створення екземляру класу Engineer із задовільним значенням кількості виконаних замовлень", () => {
    engineer.setCountOfOrders(30);
    expect(engineer.getCountOfOrders()).toEqual(30);
  });

  it("Створення екземляру класу Engineer із задовільним значенням рівня кваліфікації", () => {
    engineer.setLevel(3);
    expect(engineer.getLevel()).toEqual(3);
  });

  // Додайте інші тести за необхідності
});
