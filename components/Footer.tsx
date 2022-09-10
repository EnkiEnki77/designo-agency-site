import React from 'react'
import FooterInfo from './FooterInfo'
import Nav from './Nav'
import Socials from './Socials'
import Logo from '../public/assets/shared/desktop/logo-light.png'

type Props = {
  locations?: true
}

const Footer = (props: Props) => {
  return (
    <div className={`${props.locations ? 'pt-0' : 'pt-[190px]'} md:absolute md:bottom-0 md:-z-10 w-full`}>
        <div className={`lg:px-[165px] px-6 md:pb-20 md:gap-y-8 md:justify-between md:px-10 flex flex-col md:flex-row md:flex-wrap bg-black gap-8 items-center ${props.locations ? 'pt-16' : 'pt-[254px] md:pt-[174px]'}`}>
            <img className="h-[27px] w-[202px] md:order-1" src={Logo.src} alt="" />
            <hr className='w-full md:basisfull md:order-2  h-[0.5px] border-none bg-white/50'/>
            <Nav className="md:flex-row md:gap-[42px] md:order-1"/>
            <FooterInfo className='md:order-3 '><p className="text-center tracking-widest mb-2 md:mb-0 md:text-left">Designo Central Office <br/><span className="opacity-60"> 3886 Wellington Street <br/> Toronto, Ontario M9C 3J5</span></p></FooterInfo>
            <FooterInfo className='md:order-3 '><p className="text-center tracking-widest mb-2 md:mb-0 md:text-left">Contact Us (Central Office)<br/><span className="opacity-60"> P : +1 253-863-8967 <br/> M : contact@designo.co</span></p></FooterInfo>
            <Socials className='md:order-3 md:'/>
        </div>
    </div>
  )
}

export default Footer