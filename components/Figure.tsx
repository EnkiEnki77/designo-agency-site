import React from 'react'

type Props = {
    img: string,
    figure: true | false,
    title: string | null,
    p1: string | null,
    p2: string | null
}

const Figure = (props: Props) => {
  return (
    <figure className={`${!props.figure ? 'pt-[96px] md:pt-[155px] md:mb-[120px] md:px-10' : 'mb-[120px] md:px-10'}`}>
        <picture>
          <source srcSet={require(`../public/assets/about/desktop/${props.img}`).default.src} media="(min-width:1024px)"/>
          <source srcSet={require(`../public/assets/about/tablet/${props.img}`).default.src} media="(min-width:768x)"/>
          <img className='min-h-[320px] md:max-h-[320px] w-full md:rounded-t-2xl md:overflow-hidden' src={require(`../public/assets/about/mobile/${props.img}`).default.src} alt="" />
        </picture>
        <figcaption className={`px-6  py-20 md:py-16 flex flex-col items-center gap-6 md:rounded-b-2xl md:overflow-hidden  ${props.figure ? 'h-[520px] md:h-[416px] bg-bgPattern2 bg-lightPeach/20' : 'h-[395px] md:max-h-[320px] bg-bgPattern3 bg-peach bg-[top_-9rem_left_-13rem]'}`}>
            {props.figure ? 
            [<h1 className='text-center text-peach'>{props.title}</h1>, <p className='text-center text-black md:px-28'>{props.p1}</p>, <p className='text-center text-black md:px-[90px]'>{props.p2}</p>]
            :
            [<h1 className='text-center'>About Us</h1>, <p className='text-center text-white/90 md:px-16'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>]
            }
        </figcaption>
    </figure>
  )
}

export default Figure