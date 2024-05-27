import * as Yup from "yup";

export const nameValidationSchema = Yup.string().required(
  "Поле 'Назва' обов'язкове для заповнення"
);

