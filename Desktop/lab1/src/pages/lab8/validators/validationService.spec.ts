import { ValidationError } from "yup";
import { validationSchema } from "./validationSchema";

describe("Validation Testing", () => {
  it("Створення продукту з від'ємним значенням ціни ", () => {
    expect(
      validationSchema.validateAt("price", { price: -14 })
    ).rejects.toBeTruthy();
  });

  it("Створення продукту з від'ємним значенням кількості ", () => {
    expect(
      validationSchema.validateAt("quantity", { quantity: -18 })
    ).rejects.toBeTruthy();
  });

  it("Створення продукту з незаповненим полем значення ціни ", () => {
    expect(validationSchema.validateAt("price", {})).rejects.toBeTruthy();
  });

  it("Створення продукту з незаповненим полем значення кількості ", () => {
    expect(validationSchema.validateAt("quantity", {})).rejects.toBeTruthy();
  });

  it("Створення продукту з незаповненим полем значення назви ", () => {
    expect(validationSchema.validateAt("name", {})).rejects.toBeTruthy();
  });

  it("Створення продукту з додатнім значенням ціни ", async () => {
    expect(await validationSchema.validateAt("price", { price: 30 })).toEqual(
      30
    );
  });

    it("Створення продукту з додатнім значенням кількості ", async () => {
      expect(
        await validationSchema.validateAt("quantity", { quantity: 60 })
      ).toEqual(60);
    });


});
