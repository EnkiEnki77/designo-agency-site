import React from 'react'
import ProjectCategory from './ProjectCategory'

type Props = {
  page: string | null
}

const ProjectsDirectory = (props: Props) => {
    const categories = [
        {img:{mobile:'../public/assets/home/mobile/image-web-design.jpg', tablet:'../public/assets/home/tablet/image-web-design.jpg', desktop:'../public/assets/home/desktop/image-web-design-large.jpg'}, 
        title:'web design', 
        path:'/projects/web+design'},

        {img:{mobile:'../public/assets/home/mobile/image-graphic-design.jpg', tablet:'../public/assets/home/tablet/image-graphic-design.jpg', desktop:'../public/assets/home/desktop/image-graphic-design.jpg'}, 
        title:'graphic design', 
        path:'/projects/graphic+design'},

        {img:{mobile:'../public/assets/home/mobile/image-app-design.jpg', tablet:'../public/assets/home/tablet/image-app-design.jpg', desktop:'../public/assets/home/desktop/image-app-design.jpg'}, 
        title:'app design', 
        path:'/projects/app+design'},
    ]

    const categoriesFiltered = categories.filter(category => category.title !== props.page)

    console.log(categoriesFiltered)

  return (
    <div className='flex flex-col px-6 md:px-10 gap-6 mb-24'>
        {props.page === null ? 
        categories.map((item, i) => <ProjectCategory key={i} img={item.img} title={item.title} path={item.path}/>)
          :
        categoriesFiltered.map((item, i) => <ProjectCategory key={i} img={item.img} title={item.title} path={item.path}/>)
      }
    </div>
  )
}

export default ProjectsDirectory