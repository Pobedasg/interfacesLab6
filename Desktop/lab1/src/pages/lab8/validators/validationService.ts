import { validationSchema } from "./validationSchema";

export const validateField = async (
  name: string,
  value: number
): Promise<string> => {
  try {
    console.log(value);

    await validationSchema.validateAt(name, { [name]: value });
    return "";
  } catch (err: any) {
    return err.message;
  }

  function setErrors(arg0: (prevErrors: any) => any) {
    throw new Error("Function not implemented.");
  }
};
