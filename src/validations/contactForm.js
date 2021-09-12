import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactFormSchema = yup.object().shape({
  title: yup.string().required().min(2).max(40),
  name: yup.string().required().min(2).max(20),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .max(25)
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
  message: yup.string(),
});
