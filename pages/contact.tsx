import React from 'react'
import ContactForm from '../components/ContactForm'
import FooterCont from '../components/FooterCont'
import Header from '../components/Header'
import SeeLocationsCont from '../components/SeeLocationsCont'

type Props = {}

const contact = (props: Props) => {
  return (
    <div>
      <Header/>
      <div className="md:px-10 md:pt-[155px] lg:px-[160px]">
        <ContactForm/>
        <SeeLocationsCont/>
      </div>
      <FooterCont locations={true}/>
    </div>
  )
}

export default contact