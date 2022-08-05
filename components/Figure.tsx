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
    <figure className={`${!props.figure ? 'pt-[90px]' : 'mb-[120px]'}`}>
        <img className='min-h-[320px] w-full' src={require(`../public/assets/about/mobile/${props.img}`).default.src} alt="" />
        <figcaption className={`px-6 py-20 flex flex-col items-center gap-6  ${props.figure ? 'min-h-[520px] bg-bgPattern2 bg-lightPeach/20' : 'min-h-[395px] bg-bgPattern3 bg-peach bg-[top_-9rem_left_-13rem]'}`}>
            {props.figure ? 
            [<h1 className='text-center text-peach'>{props.title}</h1>, <p className='text-center text-black'>{props.p1}</p>, <p className='text-center text-black'>{props.p2}</p>]
            :
            [<h1 className='text-center'>About Us</h1>, <p className='text-center text-white/90'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>]
            }
        </figcaption>
    </figure>
  )
}

export default Figure