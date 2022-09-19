import React from 'react'
import Footer from './Footer'

import GetInTouchCont from './GetInTouchCont'

type Props = {
  locations?: true
}

const FooterCont = (props: Props) => {
  return (
    <div className={` relative md:min-h-[337px] lg:min-h-[613px] lg:flex lg:flex-col lg:items-center ${props.locations && 'lg:min-h-[320px]'}`}>
        {!props.locations && <GetInTouchCont/>}
        <Footer locations={props.locations}/>
    </div>
  )
}

export default FooterCont