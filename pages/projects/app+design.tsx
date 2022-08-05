import React from 'react'
import CategoryInfo from '../../components/CategoryInfo'
import FooterCont from '../../components/FooterCont'
import Header from '../../components/Header'
import ProjectCont from '../../components/ProjectCont'

type Props = {}

const appDesign = (props: Props) => {
  return (
    <div>
        <Header/>
        <CategoryInfo/>
        <ProjectCont/>
        <FooterCont/>
    </div>
  )
}

export default appDesign