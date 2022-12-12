import React from "react";

type Props = {
  placeholder: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  handleInputs: (input: string, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormElement = (props: Props) => {
  return (
    <div className=":max-w-full lg:w-full h-[38px] border-b border-white">
      <input
        onChange={(e) => props.handleInputs(props.placeholder, e)}
        value={
          props.placeholder === "Name"
            ? props.name
            : props.placeholder === "Email Address"
            ? props.email
            : props.phone
        }
        className="text-white active:border-b-[3px] outlne-none bg-transparent w-full h-full px-4 pb-3 placeholder:text-white/50"
        type={props.type}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default FormElement;
