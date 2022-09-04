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
    <figure className="md:flex md:flex-col md:gap-8 md:px-10">
        <img className="md:rounded-2xl min-h-[320px] md:h-[326px]" src={require(`../public/assets/locations/tablet/${props.img}`).default.src} alt="" />
        <figcaption className={`md:rounded-2xl md:gap-x-32 md:px-[75px] px-6 py-20 flex flex-col md:flex-row md:flex-wrap  items-center gap-6 min-h-[394px] md:min-h-[326px] md:h-[326px] bg-bgPattern2 bg-lightPeach/10`}>
            <h1 className='capitalize text-peach md:basis-full'>{props.country}</h1>
            <div>
                <p className='text-black font-bold text-center capitalize md:text-left'>{props.office}</p>
                <p className='text-black/80 text-center md:text-left'>{props.address}</p>
                <p className='text-black/80 text-center md:text-left'>{props.city}</p>
            </div>
            <div>
                <p className='text-black font-bold text-center capitalize md:text-left'>contact</p>
                <p className='text-black/80 text-center md:text-left'>{props.phone}</p>
                <p className='text-black/80 text-center md:text-left'>{props.email}</p>
            </div>
        </figcaption>
    </figure>
  )
}

export default Location