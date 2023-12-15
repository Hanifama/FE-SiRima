import{ useEffect, useState } from 'react'
import PetaPictures from '../assets/map-02 1.png'
import Typography from '../assets/Group 734.png'
import axios from 'axios'

const PortalHome = () => {
  
  return (
    <section className="container_portal">
        <div className="content__typography">
            <img src={Typography} alt="typography Georima" />
        </div>
        <div className="Peta-content">
            <img src={PetaPictures} alt="header peta" />
        </div>                 
    </section>

  )
}

export default PortalHome
