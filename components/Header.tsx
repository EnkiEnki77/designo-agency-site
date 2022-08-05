import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/shared/desktop/logo-dark.png'
import Hamburger from '../public/assets/shared/mobile/icon-hamburger.svg'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="bg-white w-full h-24 flex items-center justify-between px-6 fixed z-40">
        <Link href='/'><img className="h-[27px] w-[202px]" src={Logo.src} alt="" /></Link>
        <img src={Hamburger.src} alt="" />
    </div>
  )
}

export default Header