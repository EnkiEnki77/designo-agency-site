import React from 'react'

type Props = {
    img:string,
    country:string,
    office:string,
    address:string,
    city:string,
    phone:string,
    email:string
}

const Location = (props: Props) => {
  return (
    <figure>
        <img className="min-h-[320px]" src={require(`../public/assets/locations/tablet/${props.img}`).default.src} alt="" />
        <figcaption className={`px-6 py-20 flex flex-col items-center gap-6 min-h-[394px] bg-bgPattern2 bg-lightPeach/10`}>
            <h1 className='capitalize text-peach '>{props.country}</h1>
            <div>
                <p className='text-black font-bold text-center capitalize'>{props.office}</p>
                <p className='text-black/80 text-center'>{props.address}</p>
                <p className='text-black/80 text-center'>{props.city}</p>
            </div>
            <div>
                <p className='text-black font-bold text-center capitalize'>contact</p>
                <p className='text-black/80 text-center'>{props.phone}</p>
                <p className='text-black/80 text-center'>{props.email}</p>
            </div>
        </figcaption>
    </figure>
  )
}

export default Location