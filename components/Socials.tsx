import Link from 'next/link'
import React from 'react'
import facebook from '../public/assets/shared/desktop/icon-facebook.svg'
import youtube from '../public/assets/shared/desktop/icon-youtube.svg'
import pinterest from '../public/assets/shared/desktop/icon-pinterest.svg'
import instagram from '../public/assets/shared/desktop/icon-instagram.svg'
import twitter from '../public/assets/shared/desktop/icon-twitter.svg'

type Props = {
    className?: string
}

const Socials = (props: Props) => {
  return (
    <div className={`flex mb-16 md:mb-0  md:self-end gap-4 ${props.className}`}>
        <Link href='#' >
            <img src={facebook.src} alt="" />
        </Link>
        <Link href='#' >
            <img src={instagram.src} alt="" />
        </Link>
        <Link href='#' >
            <img src={pinterest.src} alt="" />
        </Link>
        <Link href='#' >
            <img src={twitter.src} alt="" />
        </Link>
        <Link href='#' >
            <img src={youtube.src} alt="" />
        </Link>
    </div>
  )
}

export default Socials