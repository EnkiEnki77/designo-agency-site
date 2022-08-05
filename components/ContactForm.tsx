import React from 'react'
import FormElement from '../components/FormElement'
import Button from './Button'

type Props = {}

const ContactForm = (props: Props) => {
    const inputs = [
        {type:'text', placeholder:'Name'},
        {type:'email', placeholder:'Email Address'},
        {type:'text', placeholder:'Phone'}
    ]
  return (
    <div className="px-6 bg-bgPattern4 bg-peach bg-[top_6rem_left_-5rem]  pt-[162px] pb-[72px] mb-[120px]">
        <h1 className="text-center capitalize mb-6">contact us</h1>
        <p className="text-center mb-12">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        <form className='flex flex-col gap-6' action="">
            {inputs.map(input =><FormElement type={input.type} placeholder={input.placeholder}/>)}
            <textarea placeholder='Your Message' className="mb-4 border-b border-white text-white active:border-b-[3px] outlne-none bg-peach w-full h-[90px] px-4 pb-3 placeholder:text-white/50" name="" id="" ></textarea>
            <Button btn='buttonLight'>Submit</Button>
        </form>
    </div>
  )
}

export default ContactForm