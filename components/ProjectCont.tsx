import React from 'react'
import Project from './Project'

type Props = {
  projects:{img:string, title:string, description:string}[]
}

const ProjectCont = (props: Props) => {
  return (
    <div className="px-6 flex flex-col gap-10 mb-24">
       {props.projects.map(project => <Project img={project.img} title={project.title} description={project.description}/>)}
    </div>
  )
}

export default ProjectCont