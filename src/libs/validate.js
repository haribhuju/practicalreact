import * as yup from "yup";

export const personalInfoSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters")
    .required("This field is required"),
  email: yup
    .string()
    .email("Email must be vaild")
    .required("This field is required"),
  phonenumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("This field is required"),
});
