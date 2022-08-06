import React from 'react'
import Button from './Button'

type Props = {}

const GetInTouchCont = (props: Props) => {
  return (
    <div className='px-6 md:px-10 absolute'>
        <div className=" px-6 md:px-[60px] py-16 rounded-[15px] flex flex-col items-center bg-[url('../public/assets/home/desktop/bg-pattern-hero-home.svg')] bg-[left_top_12.5rem] bg-peach w-full">
            <h2 className="text-center mb-4 md:px-28 leading-10 normal-case">Let’s talk about your project</h2>
            <p className="text-center mb-8 md:px-20">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <Button btn='buttonLight'>Get In Touch</Button>
        </div>
    </div>
  )
}

export default GetInTouchCont