import React from 'react'
import CategoryInfo from '../../components/CategoryInfo'
import FooterCont from '../../components/FooterCont'
import Header from '../../components/Header'
import ProjectCont from '../../components/ProjectCont'
import ProjectsDirectory from '../../components/ProjectsDirectory'

type Props = {}

const graphicDesign = (props: Props) => {
  const projects = [
    {img: 'image-airfilter.jpg', title: 'TIM BROWN', description: 'A book cover designed for Tim Brown’s new release, ‘Change’'},
    {img: 'image-eyecam.jpg', title: 'BOXED WATER', description: 'A simple packaging concept made for Boxed Water'},
    {img: 'image-faceit.jpg', title: 'SCIENCE!', description: 'A poster made in collaboration with the Federal Art Project'}
  ]

  
  return (
    <div>
        <Header/>
        <CategoryInfo page='graphic design' pageInfo='We deliver eye-catching branding materials that are tailored to meet your business objectives.'/>
        <ProjectCont projects={projects}/>
        <ProjectsDirectory page='graphic design'/>
        <FooterCont/>
    </div>
  )
}

export default graphicDesign