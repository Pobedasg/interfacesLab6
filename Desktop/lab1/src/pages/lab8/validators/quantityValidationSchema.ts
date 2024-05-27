
import * as Yup from "yup";

export const quantityValidationSchema = Yup.number()
  .required("Поле 'Кількість' обов'язкове для заповнення")
  .min(0, "Кількість не може бути від'ємною");

