import React from 'react'

type Props = {
    btn: string,
    children: string
}

const Button = (props: Props) => {
  return (
    <button className={`${props.btn}`}>{props.children}</button>
  )
}

export default Button