import React from 'react'
import Project from './Project'

type Props = {}

const ProjectCont = (props: Props) => {
  return (
    <div className="px-6 flex flex-col gap-10">
      <Project/>
      <Project/>
      <Project/>
    </div>
  )
}

export default ProjectCont