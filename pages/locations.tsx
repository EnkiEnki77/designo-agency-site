import React from 'react'
import FooterCont from '../components/FooterCont'
import Header from '../components/Header'
import LocationCont from '../components/LocationCont'

type Props = {}

const locations = (props: Props) => {
  return (
    <div>
      <Header/>
      <LocationCont/>
      <FooterCont />
    </div>
  )
}

export default locations