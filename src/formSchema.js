import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be 2 chars long"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "please specify size"),
  sausage: yup.boolean(),
  jalapeno: yup.boolean(),
  mushroom: yup.boolean(),
  olive: yup.boolean(),
  instruction: yup.string()
});
