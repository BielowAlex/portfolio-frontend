import React from "react";
import { Input, Textarea } from "../../Inputs";
import { Button } from "../../Buttons";
import style from "./style.module.scss";
import EmailJS from "@emailjs/browser";
import { FormValue } from "../../../../types";
import { ContactFormValidation } from "../../../../utils";
import { createPortal } from "react-dom";
import { ToastModal } from "../../Modals";
import { ToastValue } from "../../../../types/toast.types.ts";

const ContactForm: React.FC = React.memo(() => {
  const [formValue, setFormValue] = React.useState<FormValue>({
    message: "",
    name: "",
    email: "",
    subject: "",
  });
  const [toastValue, setToastValue] = React.useState<ToastValue>({
    message: "",
    isError: false,
    isShow: false,
  });

  const emailJsKeys = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleChangeFormValue = React.useCallback(
    (name: string, value: string) => {
      setFormValue((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [],
  );

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors: FormValue = ContactFormValidation(formValue);
      const isValid: boolean = Object.values(errors).every((el) => el === "");

      setToastValue((prev) => {
        return { ...prev, isError: !isValid };
      });

      if (!isValid) {
        setToastValue((prev) => {
          return {
            ...prev,
            message: Object.values(errors).join("\n"),
            isShow: true,
          };
        });
        return;
      }

      EmailJS.send(emailJsKeys.serviceId, emailJsKeys.templateId, formValue, {
        publicKey: emailJsKeys.publicKey,
      })
        .then(() => {
          setToastValue((prev) => {
            return {
              ...prev,
              isShow: true,
              message:
                "You message sent successfully, thanks for your feedback.",
            };
          });

          setFormValue(() => {
            return {
              message: "",
              name: "",
              email: "",
              subject: "",
            };
          });
        })
        .catch((reason) => {
          console.error(reason);
          setToastValue((prev) => {
            return {
              ...prev,
              isError: true,
              isShow: true,
              message: reason,
            };
          });
        });
    },
    [
      emailJsKeys.publicKey,
      emailJsKeys.serviceId,
      emailJsKeys.templateId,
      formValue,
    ],
  );

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.head}>
        <Input
          label={"Your Name"}
          name="name"
          value={formValue.name}
          setValue={handleChangeFormValue}
        />
        <Input
          label={"Your Email"}
          name="email"
          value={formValue.email}
          setValue={handleChangeFormValue}
        />{" "}
      </div>
      <Input
        label={"Subject"}
        name="subject"
        value={formValue.subject}
        setValue={handleChangeFormValue}
      />
      <Textarea
        label={"Your Message"}
        name="message"
        value={formValue.message}
        setValue={handleChangeFormValue}
      />
      <Button> Send {"=>"} </Button>
      {toastValue.isShow &&
        createPortal(
          <ToastModal toastValue={toastValue} setToastValue={setToastValue} />,
          document.body,
        )}
    </form>
  );
});

export { ContactForm };
