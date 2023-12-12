import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container-service footer__container">
      <div className="footer__col">
        <div className="logo">
          <a href="#">
            <img src="assets/logo.png" width="100px" height="75px" alt="logo" />
          </a>
        </div>
        <p>
          GeoRima Merupakan Next Generation Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          dignissimos odio. Eveniet neque, architecto dolorem fuga itaque, in,
          repellat ipsam quis ullam est nesciunt!
        </p>
        <ul className="footer__socials">
          <li>
              <i className="ri-facebook-fill" />   (022)5202698         
          </li>
          <li>            
              <i className="ri-instagram-line" />  psdmbp2@esdm.go.id           
          </li>
          <li>            
              <i className="ri-youtube-line" /> Gedung A.F Lasut X Jl.Soekarno Hatta No.444, Pasirluyu, Kec. Regol, Kota.Bandung, Jawa Barat 40254
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
        <p>Senin - Kamis: 09:00 - 18:00</p>
        <p>Jumat: 09:00 - 18:00</p>
        <p>Sabtu - Minggu: Tutup</p>
        <p>Tanggal Merah dan Lainnya: Tutup</p>
    </div>
      </div>
     
    </div>
    <div className="footer__bar">
      Copyright © 2023 PT. LSKK. All rights reserved.
    </div>
  </footer>
  
  )
}

export default Footer
