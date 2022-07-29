import React from 'react'
import Offering from './Offering'

type Props = {}

const OfferingsCont = (props: Props) => {
    const offeringData = [
        {img:'illustration-passionate.svg', title:'passionate', description:'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'},
        {img:'illustration-resourceful.svg', title:'resourceful', description:'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'},
        {img:'illustration-friendly.svg', title:'friendly', description:' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'},
    ]
  return (
    <div className="gap-20 flex flex-col px-6 mb-[120px]">
        {offeringData.map((item, i) => <Offering key={i} img={item.img} title={item.title} description={item.description}/>)}
    </div>
  )
}

export default OfferingsCont