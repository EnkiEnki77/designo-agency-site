import React from 'react'

type Props = {
    placeholder: string,
    type: string
}

const FormElement = (props: Props) => {
  return (
    <div className=" max-w-[380px] md:max-w-full lg:w-full h-[38px] border-b border-white">
        <input className="text-white active:border-b-[3px] outlne-none bg-transparent w-full h-full px-4 pb-3 placeholder:text-white/50" type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default FormElement