import React from 'react'

type Props = {
    img: string,
    title: string,
    description: string
}

const Offering = (props: Props) => {
    const path = `../public/assets/home/desktop/${props.img}`
    console.log(path)
  return (
    <div className="flex flex-col items-center gap-8">
        <div className="w-[202px] h-auto relative">
            <img className='absolute -z-10' src={require(`../public/assets/home/desktop/bg-pattern-hero-home.svg`).default.src}/>
            <img className="mb-4" src={require(`../public/assets/home/desktop/${props.img}`).default.src } alt="" />
        </div>
        <h3 className='text-black'>{props.title}</h3>
        <p className='text-black text-center px-2   '>{props.description}</p>
    </div>
  )
}

export default Offering