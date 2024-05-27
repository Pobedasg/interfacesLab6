
import * as Yup from "yup";

export const priceValidationSchema = Yup.number()
  .required("Поле 'Ціна' обов'язкове для заповнення")
  .min(0, "Ціна не може бути від'ємною");
