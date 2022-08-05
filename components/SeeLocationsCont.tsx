import React from 'react'
import SeeLocations from './SeeLocations'

type Props = {}

const SeeLocationsCont = (props: Props) => {
    const locations = [
        {img: 'illustration-canada.svg', country: 'canada', path: 'whore', id: 1},
        {img: 'illustration-australia.svg', country: 'australia', path: 'whore', id: 2},
        {img: 'illustration-united-kingdom.svg', country: 'united kingdom', path: 'whore', id: 3}
    ]
  return (
    <div className="flex flex-col gap-12">
        {locations.map(location => <SeeLocations key={location.id} img={location.img} country={location.country} path={location.path}/>)}
    </div>
  )
}

export default SeeLocationsCont