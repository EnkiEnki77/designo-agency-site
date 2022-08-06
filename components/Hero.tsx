import React from 'react'
import Button from './Button'
import heroPhone from '../public/assets/home/desktop/image-hero-phone.png'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="md:px-10 md:pt-[155px]">
      <div className="flex flex-col md:rounded-[15px] overflow-hidden md:pt-[60px] items-center mb-[120px] px-6 pt-[96px] bg-[url('../public/assets/home/desktop/bg-pattern-hero-home.svg')] bg-[left_top_12.5rem] bg-peach w-full ">
          <div className='flex flex-col items-center'>
              <h1 className="text-center mt-20 md:mt-0 md:px-10 mb-[14px] md:mb-6">Award-winning custom designs and digital branding solutions</h1>
              <p className="text-center mb-6 md:px-[105px]">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
              <Link href="/about"><Button btn='buttonLight'>learn more</Button></Link>
          </div>
          <div className='bg-transparent rounded-lg bg-heroPhone h-[450px] w-full bg-[center_bottom_-23rem] z-20'>
              {/* <img src={heroPhone.src} alt="" /> */}
          </div>
      </div>
    </div>
  )
}

export default Hero