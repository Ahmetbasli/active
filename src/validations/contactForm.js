import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
  country: yup.object().shape({
    id: yup.string(),
    name: yup.string(),
  }),
});
