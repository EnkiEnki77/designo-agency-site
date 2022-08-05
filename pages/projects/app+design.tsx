import React from 'react'
import CategoryInfo from '../../components/CategoryInfo'
import FooterCont from '../../components/FooterCont'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import ProjectCont from '../../components/ProjectCont'
import ProjectsDirectory from '../../components/ProjectsDirectory'

type Props = {}

const appDesign = (props: Props) => {
  return (
    <div>
        <Header/>
        <CategoryInfo/>
        <ProjectCont/>
        <ProjectsDirectory/>
        <FooterCont/>
    </div>
  )
}

export default appDesign