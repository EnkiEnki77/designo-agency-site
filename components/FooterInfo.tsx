import React from 'react'

type Props = {
    children: React.ReactNode
}

const FooterInfo = (props: Props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default FooterInfo