import React from 'react'
import Footer from './Footer'

import GetInTouchCont from './GetInTouchCont'

type Props = {}

const FooterCont = (props: Props) => {
  return (
    <div className="relative">
        <GetInTouchCont/>
        <Footer/>
    </div>
  )
}

export default FooterCont