import React from 'react'
import Footer from './Footer'

import GetInTouchCont from './GetInTouchCont'

type Props = {
  locations?: true
}

const FooterCont = (props: Props) => {
  return (
    <div className="relative md:min-h-[699px]">
        {!props.locations && <GetInTouchCont/>}
        <Footer locations={props.locations}/>
    </div>
  )
}

export default FooterCont