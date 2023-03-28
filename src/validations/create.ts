import * as yup from "yup";

export const createSchema = yup
  .object()
  .shape({
    title: yup.string().required(),
    content: yup.string().required(),
  })
  .required();
