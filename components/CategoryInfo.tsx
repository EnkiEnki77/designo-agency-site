import React from 'react'
import background from '../public/assets/app-design/desktop/bg-pattern-intro-app.svg'

type Props = {
  page: string,
  pageInfo: string
}

const CategoryInfo = (props: Props) => {
  return (
    <div className="w-full pt-[96px] bg-peach bg-bgPattern bg-[top_-14rem_right_18rem]  min-h-[375px] flex flex-col items-center justify-center gap-6 px-6 mb-24">
      <h1 className="capitalize">{props.page}</h1>
      <p className="text-center">{props.pageInfo}</p>
    </div>
  )
}

export default CategoryInfo