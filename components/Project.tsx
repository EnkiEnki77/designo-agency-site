import React from 'react'

type Props = {
  img: string,
  title: string, 
  description: string,
  page: string
}

const Project = (props: Props) => {

  return (
    <figure className="h-[478px] md:h-[310px] rounded-[15px] overflow-hidden md:flex ">
      <img className=" md:w-1/2 min-h-[310px] md:h-full" src={require(`../public/assets/${props.page}/desktop/${props.img}`).default.src} alt="" />
      <figcaption className=" md:rounded-none min-h-[158px] md:h-[310px] md:w-1/2 bg-lightPeach/20 flex flex-col items-center justify-center gap-4 px-7 rounded-[15px]">
        <h3 className="uppercase text-peach text-center">{props.title}</h3>
        <p className='text-black text-center'>{props.description}</p>
      </figcaption>
    </figure>
  )
}

export default Project