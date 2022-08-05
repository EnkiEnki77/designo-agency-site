import React from 'react'

type Props = {
  img: string,
  title: string, 
  description: string,
  page: string
}

const Project = (props: Props) => {

  return (
    <figure className="min-h-[478px] rounded-[15px] overflow-hidden">
      <img className="min-h-[320px]" src={require(`../public/assets/${props.page}/desktop/${props.img}`).default.src} alt="" />
      <figcaption className="min-h-[158px] bg-lightPeach/20 flex flex-col items-center justify-center gap-4 px-7 rounded-[15px]">
        <h3 className="uppercase text-peach text-center">{props.title}</h3>
        <p className='text-black text-center'>{props.description}</p>
      </figcaption>
    </figure>
  )
}

export default Project