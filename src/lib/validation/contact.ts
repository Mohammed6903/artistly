import * as yup from "yup";
import type { InferType } from "yup"

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
})

export type ContactFormData = InferType<typeof contactSchema>
