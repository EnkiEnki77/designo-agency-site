import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string
}

const FooterInfo = (props: Props) => {
  return (
    <div className={`${props.className}`}>
        {props.children}
    </div>
  )
}

export default FooterInfo