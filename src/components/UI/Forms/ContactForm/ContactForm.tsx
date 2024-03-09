import React from "react";
import { Input, Textarea } from "../../Inputs";
import { Button } from "../../Buttons";
import style from "./style.module.scss";

const ContactForm: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.head}>
        <Input label={"Your Name"} value={name} setValue={setName} />
        <Input label={"Your Email"} value={email} setValue={setEmail} />{" "}
      </div>
      <Input label={"Subject"} value={subject} setValue={setSubject} />
      <Textarea label={"Your Message"} value={message} setValue={setMessage} />
      <Button> Send {"=>"} </Button>
    </form>
  );
};

export { ContactForm };
