import React from 'react'

type Props = {
    children: React.ReactNode
}

const FooterInfo = (props: Props) => {
  return (
    <>
        {props.children}
    </>
  )
}

export default FooterInfo