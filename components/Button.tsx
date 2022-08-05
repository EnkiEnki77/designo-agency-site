import React from 'react'

type Props = {
    btn: string,
    children: string
}

const Button = (props: Props) => {
  return (
    <button className={`${props.btn} font-bold mx-auto`}>{props.children}</button>
  )
}

export default Button