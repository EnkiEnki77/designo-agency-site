import React from 'react'
import Project from './Project'

type Props = {
  projects:{img:string, title:string, description:string}[],
  page:string
}

const ProjectCont = (props: Props) => {
  return (
    <div className={`px-6 lg:px-[165px] flex flex-col gap-10 mb-24 md:px-10 lg:grid lg:grid-cols-3 ${props.page === 'graphic-design' ? 'lg:grid-rows-[478px]' : 'lg:grid-rows-[478px_478px]'} lg:gap-[30px] lg:mb-[160px]`}>
       {props.projects.map(project => <Project page={props.page} img={project.img} title={project.title} description={project.description}/>)}
    </div>
  )
}

export default ProjectCont