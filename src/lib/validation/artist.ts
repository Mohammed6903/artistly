import * as yup from "yup"
import type { InferType } from "yup"

export const artistSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  languages: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one language"),
  specialties: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one specialty"),
  location: yup.string().required("Location is required"),
  availability: yup.string().required("Availability is required"),
  priceRange: yup.object().shape({
    min: yup
      .number()
      .required("Min price is required")
      .min(0, "Min must be greater than or equal to 0"),
    max: yup
      .number()
      .required("Max price is required")
      .moreThan(yup.ref("min"), "Max must be greater than Min"),
  }),
  avatar: yup.string().notRequired(),
  rating: yup
    .number()
    .min(0)
    .max(5)
    .notRequired(),
})

export type ArtistOnboardingData = InferType<typeof artistSchema>
