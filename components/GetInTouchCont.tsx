import React from 'react'
import Button from './Button'

type Props = {}

const GetInTouchCont = (props: Props) => {
  return (
    <div className='px-6 md:px-10 absolute lg:w-full lg:px-[165px]'>
        <div className="  px-6 md:px-[60px]  lg:px-[95px] py-16 lg:py-[72px] rounded-[15px] flex flex-col lg:flex-row lg:justify-between items-center bg-[url('../public/assets/home/desktop/bg-pattern-hero-home.svg')] bg-[left_top_12.5rem] bg-peach w-full">
            <div className=" lg:flex lg:flex-col lg:gap-5 ">
              <h2 className="text-center lg:w-[350px]  lg:mb-0 lg:px-0 lg:text-left mb-4 md:px-28 leading-10 normal-case">Let’s talk about your project</h2>
              <p className="text-center lg:w-[480px]  lg:mb-0 lg:px-0 lg:text-left mb-8 md:px-20">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <Button path='/contact' btn='buttonLight'>Get In Touch</Button>
        </div>
    </div>
  )
}

export default GetInTouchCont