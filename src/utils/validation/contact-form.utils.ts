import { FormValue } from "../../types";

const emailRegex: RegExp = /\S+@\S+\.\S+/;

const ContactFormValidation = (values: FormValue): FormValue => {
  const tempErrors: FormValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  if (!values.name) tempErrors.name = "Name is required";
  else if (values.name.length < 2)
    tempErrors.name = "Name must be at least 2 characters long";

  if (!values.email) tempErrors.email = "Email is required";
  else if (!emailRegex.test(values.email))
    tempErrors.email = "Email is not valid";

  if (!values.subject) tempErrors.subject = "Subject is required";

  if (!values.message) tempErrors.message = "Message is required";
  else if (values.message.length < 10)
    tempErrors.message = "Message must be at least 10 characters long";

  return tempErrors;
};

export { ContactFormValidation };
