import * as yup from "yup";

export const registerSchema = yup
  .object()
  .shape({
    email: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    password_confirmation: yup.string().required(),
  })
  .required();
