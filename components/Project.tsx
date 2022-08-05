import React from 'react'

type Props = {}

const Project = (props: Props) => {
  return (
    <figure className="min-h-[478px] rounded-[15px] overflow-hidden">
      <img className="min-h-[320px]" src={require('../public/assets/app-design/desktop/image-airfilter.jpg').default.src} alt="" />
      <figcaption className="min-h-[158px] bg-lightPeach/20 flex flex-col items-center justify-center gap-4 px-7 rounded-[15px]">
        <h3 className="uppercase text-peach text-center">express</h3>
        <p className='text-black text-center'>A multi-carrier shipping website for ecommerce businesses</p>
      </figcaption>
    </figure>
  )
}

export default Project