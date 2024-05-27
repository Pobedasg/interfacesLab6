import * as Yup from "yup";
import { nameValidationSchema } from "./nameValidationSchema";
import { quantityValidationSchema } from "./quantityValidationSchema";
import { priceValidationSchema } from "./priceValidationSchema";

export const validationSchema = Yup.object().shape({
  name: nameValidationSchema,
  quantity: quantityValidationSchema,
  price: priceValidationSchema,
});
