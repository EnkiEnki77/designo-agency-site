import React from 'react'
import Button from './Button'

type Props = {}

const GetInTouchCont = (props: Props) => {
  return (
    <div className='px-6 absolute'>
        <div className=" px-6 py-16 rounded-[15px] flex flex-col items-center bg-[url('../public/assets/home/desktop/bg-pattern-hero-home.svg')] bg-[left_top_12.5rem] bg-peach w-full">
            <h1 className="text-center mb-4">Let’s talk about your project</h1>
            <p className="text-center mb-8">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <Button btn='buttonLight'>Get In Touch</Button>
        </div>
    </div>
  )
}

export default GetInTouchCont