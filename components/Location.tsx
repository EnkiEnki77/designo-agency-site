import React from 'react'

type Props = {
    img:string,
    country:string,
    office:string,
    address:string,
    city:string,
    phone:string,
    email:string
}

const Location = (props: Props) => {
  return (
    <figure>
        <img src={require(`../public/assets/locations/tablet/${props.img}`).default.src} alt="" />
        <figcaption>
            <h1>{props.country}</h1>
            <div>
                <p>{props.office}</p>
                <p>{props.address}</p>
                <p>{props.city}</p>
            </div>
            <div>
                <p>contact</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </figcaption>
    </figure>
  )
}

export default Location