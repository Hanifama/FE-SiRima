import React from 'react'
import PetaPictures from '../assets/peta.png'

const PortalHome = () => {
  return (
    <section className="container_portal">
        <div className="content__container">
            <h1>
            <span className="heading">
                Geo
                <br />
            </span>
            <span className="heading__1">Rima</span>
            <br />
            <span className="heading__2">Portal Informasi GeoRima</span>
            </h1>
        </div>
        <div className="image__container">
            <img src={PetaPictures} alt="header" />
        </div>
    </section>

  )
}

export default PortalHome
