import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
        <Link href='#'><p className="text-center uppercase tracking-widest">our company</p></Link>
        <Link href='#'><p className="text-center uppercase tracking-widest">locations</p></Link>
        <Link href='#'><p className="text-center uppercase  tracking-widest">contact</p></Link>
    </div>
  )
}

export default Nav