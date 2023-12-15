import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [dataProfile, setDataProfile ] = useState([])

  useEffect(() => {
    axios.get(
        'https://georima.pptik.id/api/v1/company/public'
        )
        .then((ressponse) => {
          setDataProfile(ressponse?.data?.data);
        });
      }, []);
      console.log('Data Profile is : ', dataProfile);


  return (
    <footer className="footer">
    <div className="container-service footer__container">
     
      <div className="footer__col">
        <div className="logo">
          <a href="#">
            <img src={`https://georima.pptik.id/api/${dataProfile?.image}`} width="100px" height="75px" alt="logo" />
          </a>
        </div>
        
        <p>
        {dataProfile?.description}
        </p>
        <ul className="footer__socials">
          <li>
              <i className="ri-facebook-fill" />      {dataProfile?.phone}       
          </li>
          <li>            
              <i className="ri-instagram-line" />  {dataProfile?.email}
          </li>
          <li>            
              <i className="ri-youtube-line" /> {dataProfile?.address}
          </li>
        </ul>
      </div>

      <div className="footer__col">
        <h4>Pelayanan Publik</h4>
        <ul className="footer__links">
          <li>
            <a href="#">Pelayanan Geogologi</a>
          </li>
          <li>
            <a href="#">Eksplorasi Geogologi</a>
          </li>
          <li>
            <a href="#">Rekomendasi Teknis</a>
          </li>
          <li>
            <a href="#">Mitigasi Bencana Geogologi</a>
          </li>
          <li>
            <a href="#">Konservasi Lingkungan</a>
          </li>
          <li>
            <a href="#">Permintaan Data (PPID) </a>
          </li>
        </ul>
      </div>

      <div className="footer__col">
        <h4>Jam Kerja</h4>
        <p>Kami Siap Melayani Anda</p>
        <div className="schedule">
        {dataProfile?.information}
        </div>      
      </div>
     
    </div>


    
    <div className="footer__bar">
      Copyright © 2023 PT.LSKK. All rights reserved.
    </div>
  </footer>
  
  )
}

export default Footer
