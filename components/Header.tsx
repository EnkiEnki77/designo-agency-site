import React from 'react'
import Logo from '../public/assets/shared/desktop/logo-dark.png'
import Hamburger from '../public/assets/shared/mobile/icon-hamburger.svg'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="bg-white h-24 flex items-center justify-between px-6 fixed">
        <img className="h-[27px] w-[202px]" src={Logo.src} alt="" />
        <img src={Hamburger.src} alt="" />
    </div>
  )
}

export default Header