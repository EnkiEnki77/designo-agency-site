import React from 'react'
import Location from '../components/Location'

type Props = {}

const LocationCont = (props: Props) => {
    const locationInfo = [
        {img:'image-map-australia.png', country:'australia', office:'Designo AU Office', address:'19 Balonne Street', city:'New South Wales 2443', phone:'(02) 6720 9092', email:'contact@designo.co'},
        {img:'image-map-canada.png', country:'canada', office:'Designo Central Office', address:'3886 Wellington Street', city:'Toronto, Ontario M9C 3j5', phone:'+1 253-863-8967', email:'contact@designo.au'},
        {img:'image-map-uk.png', country:'united kingdom', office:'Designo UK Office', address:'13 Colorado Way', city:'Rhyd-y-fro SA8 9GA', phone:'078 3115 1400', email:'contact@designo.uk'}
    ]
  return (
    <div className="flex flex-col  gap-10 lg:gap-8 pt-[96px] md:pt-[155px] mb-[120px] md:gap-[120px]">
        {locationInfo.map(location => <Location img={location.img} country={location.country} office={location.office} address={location.address} city={location.city} phone={location.phone} email={location.email}/>)}
    </div>
  )
}

export default LocationCont