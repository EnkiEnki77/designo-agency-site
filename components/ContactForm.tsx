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
    <div>
        <h1>contact us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        <form action="">
            {inputs.map(input =><FormElement type={input.type} placeholder={input.placeholder}/>)}
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <Button btn='buttonLight'>Submit</Button>
        </form>
    </div>
  )
}

export default ContactForm