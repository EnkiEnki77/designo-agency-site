import React from 'react'
import FooterInfo from './FooterInfo'
import Nav from './Nav'
import Socials from './Socials'
import Logo from '../public/assets/shared/desktop/logo-light.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="pt-[190px]">
        <div className=" px-6 flex flex-col bg-black gap-8 items-center pt-[254px]">
            <img className="h-[27px] w-[202px]" src={Logo.src} alt="" />
            <hr className='w-full  h-[0.5px] border-none bg-white/20'/>
            <Nav/>
            <FooterInfo><p className="text-center tracking-widest mb-2">Designo Central Office <br/><span className="opacity-60"> 3886 Wellington Street <br/> Toronto, Ontario M9C 3J5</span></p></FooterInfo>
            <FooterInfo><p className="text-center tracking-widest mb-2">Contact Us (Central Office)<br/><span className="opacity-60"> P : +1 253-863-8967 <br/> M : contact@designo.co</span></p></FooterInfo>
            <Socials/>
        </div>
    </div>
  )
}

export default Footer