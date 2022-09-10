import Link from 'next/link'
import React from 'react'
import arrow from '../public/assets/shared/desktop/icon-right-arrow.svg'

const img2 = require('../public/assets/home/desktop/image-graphic-design.jpg')
const img3 = require('../public/assets/home/desktop/image-app-design.jpg')

type Props = {
    img:{mobile: string, tablet: string, desktop: string},
    title: string,
    path: string,
    className?: string
}

const ProjectCategory = (props: Props) => {
 
    console.log(props.className)
   
  return (
    <div className={`relative rounded-2xl overflow-hidden w-full h-[250px] md:h-[200px]  bg-black/50 ${props.className}`}>
        
        <picture>
            <source srcSet={require(`../public/assets/home/desktop/${props.img.desktop.slice(30)}`).default.src } media='(min-width: 1024px)'/>
            <source srcSet={require(`../public/assets/home/tablet/${props.img.tablet.slice(29)}`).default.src } media='(min-width: 768px)' />
            <img className="absolute w-full h-full -z-20 rounded-lg " src={require(`../public/assets/home/mobile/${props.img.mobile.slice(29)}`).default.src } alt="" />
        </picture>
      
        <div className="h-full flex flex-col justify-center gap-2">
            <h2 className='text-center'>{props.title}</h2>
            <Link href={props.path}>
                <div className="flex justify-center items-center gap-3">
                    <h3 className="text-[15px]">view project</h3>
                    <img className="w-3 h-3" src={arrow.src} alt="" />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ProjectCategory