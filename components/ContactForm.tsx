import React, { useState } from "react";
import FormElement from "../components/FormElement";
import Button from "./Button";

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");

  const handleInputs = (
    input: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;

    input === "Name"
      ? setName(value)
      : input === "Email Address"
      ? setEmail(value)
      : input === "Phone"
      ? setPhone(value)
      : setTextArea(value);
  };

  console.log(name);
  const inputs = [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email Address" },
    { type: "text", placeholder: "Phone" },
  ];

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setTextArea("");

    alert(
      "Email submitted, we will get back to you shortly. Thanks for contacting us."
    );
  };

  return (
    <div className="px-6 md:px-[60px] pt-[172px] lg:px-[95px] lg:gap-20 lg:flex lg:items-center md:pt-[70px] md:rounded-2xl overflow-hidden bg-bgPattern4 bg-peach bg-[top_6rem_left_-5rem]  pb-[72px] mb-[120px]">
      <div className="lg:w-1/2">
        <h1 className="text-center capitalize mb-6 md:text-left">contact us</h1>
        <p className="text-center mb-12 md:text-left">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form
        onSubmit={(e) => handleForm(e)}
        className="flex flex-col gap-6 lg:gap-8 lg:w-1/2 lg:items-end"
        action=""
      >
        {inputs.map((input) => (
          <FormElement
            handleInputs={handleInputs}
            name={name}
            email={email}
            phone={phone}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <textarea
          placeholder="Your Message"
          className="mb-4 border-b border-white text-white active:border-b-[3px] outlne-none bg-peach w-full h-[90px] px-4 pb-3 placeholder:text-white/50"
          name=""
          id=""
          required
          onChange={(e) => handleInputs("text area", e)}
          value={textArea}
        ></textarea>
        <Button notLink={true} path="" btn="buttonLight">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
