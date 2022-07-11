import React from 'react'
import Button from './Button'
import heroPhone from '../public/assets/home/desktop/image-hero-phone.png'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col  items-center px-6 pt-[96px] bg-[url('../public/assets/home/desktop/bg-pattern-hero-home.svg')] bg-[left_top_12.5rem] bg-peach w-full ">
        <div className='flex flex-col items-center'>
            <h1 className="text-center mt-20 mb-[14px]">Award-winning custom designs and digital branding solutions</h1>
            <p className="text-center mb-6">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Button btn='buttonLight'>learn more</Button>
        </div>
        <div className='bg-transparent/0 rounded-lg bg-heroPhone h-[450px] w-full bg-[center_bottom_-23rem] z-20'>
            {/* <img src={heroPhone.src} alt="" /> */}
        </div>
    </div>
  )
}

export default Hero