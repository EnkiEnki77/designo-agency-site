import Link from 'next/link'
import React from 'react'

type Props = {
    btn: string,
    children: string,
    path: string
}

const Button = (props: Props) => {
  return (
    <Link href={`${props.path}`}><button className={`${props.btn} font-bold mx-auto lg:mx-0`}>{props.children}</button></Link>
  )
}

export default Button