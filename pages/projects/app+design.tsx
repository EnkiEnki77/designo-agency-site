import React from 'react'
import CategoryInfo from '../../components/CategoryInfo'
import FooterCont from '../../components/FooterCont'
import Header from '../../components/Header'
import ProjectCont from '../../components/ProjectCont'
import ProjectsDirectory from '../../components/ProjectsDirectory'

type Props = {}

const appDesign = (props: Props) => {
  const projects = [
    {img: 'image-airfilter.jpg', title: 'AIRFILTER', description: 'Solving the problem of poor indoor air quality by filtering the air'},
    {img: 'image-eyecam.jpg', title: 'EYECAM', description: 'Product that lets you edit your favorite photos and videos at any time'},
    {img: 'image-faceit.jpg', title: 'FACEIT', description: 'Get to meet your favorite internet superstar with the faceit app'},
    {img: 'image-todo.jpg', title: 'TODO', description: 'A todo app that features cloud sync with light and dark mode'},
    {img: 'image-loopstudios.jpg', title: 'LOOPSTUDIOS', description: 'A VR experience app made for Loopstudios'}
  ]

  
  return (
    <div>
        <Header/>
        <CategoryInfo page='app design' pageInfo='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'/>
        <ProjectCont page='app-design' projects={projects}/>
        <ProjectsDirectory page='app design'/>
        <FooterCont/>
    </div>
  )
}

export default appDesign