import axios from 'axios';
import { useEffect, useState } from 'react';


const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <h1 className="dropdown-title" onClick={handleToggleDropdown}>
        {title}
      </h1>
      <div className="dropdown-content">
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};


const About = () => {
    const [data, setDataAbout] = useState([]);
    useEffect(() => {
        axios.get(
            'https://georima.pptik.id/api/v1/organization/public/get?page=1&limit=10'
        )
        .then((ress) => {
            setDataAbout(ress?.data?.data);
        });
    }, []);
    console.log('Data About : ', data);

  return (
    <section className="container container-super">
    <div className="content">
      <div className="img-content">
        <img src="https://via.placeholder.com/300x200" alt="Gambar GeoRima" />
      </div>
      <div className="text-content">
        <h1>Tentang GeoRima</h1>
        <p>
          GeoRima Next Generation merupakan Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam tristique erat eget pulvinar
          ullamcorper. Fusce dignissim nisl et bibendum sodales. Ut nunc purus,
          scelerisque eu efficitur vitae, suscipit quis massa. Cras eget felis
          consectetur, rhoncus tellus eleifend, vehicula sapien. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Mauris vulputate ligula vel vestibulum sagittis. Duis rutrum ac ex
          vel consectetur. Duis in tortor id magna bibendum tempor. Sed in
          elementum sapien. Ut sed condimentum purus, in interdum purus. Phasellus
          imperdiet dictum malesuada. Sed a orci leo. Duis lorem ipsum,
          consectetur quis nunc eu, laoreet facilisis elit. Donec blandit augue eu
          maximus varius. Donec vitae leo ultrices, pretium massa sit amet,
          pellentesque est.
        </p>
      </div>
    </div>

    <div className="left">
        <Dropdown
          title="Tugas GeoRima"
          content={[
            'Tugas GeoRima Menyelenggarakan penelitian, penyelidikan, dan pelayanan di bidang sumber daya mineral, batubara, dan panas bumi.'
          ]}
        />
        <Dropdown
          title="Fungsi Georiam"
          content={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, porro!']}
        />
        <Dropdown
          title="Informasi"
          content={[            
            '(022) 5202698',
            'psdmbp2@esdm.go.id',
            'Gedung A.F Lasut X',
            'Jl. Soekarno Hatta No.444, Pasirluyu,',
            'Kec. Regol, Kota Bandung, Jawa Barat',
            '40254',
            'Jam Kerja',
            'Senin - Kamis : 08.00 - 16.00 WIB',
            "Jum'at : 08.00 - 16.30 WIB",
            'Sabtu dan Minggu : Tutup',
            'Tanggal Merah Lainnya : Tutup'
          ]}
        />
      </div>

    <div className="right">
      <h1>Bagan keanggotaan</h1>
      <div className="card-container">
        <div className="card">
          {data.map((data, indexData) => (
            <div className="content-images" key={indexData}>
              <img src= {`https://georima.pptik.id/api/${data?.image}`}  alt="picture anggota" />
              <p>{data?.position}</p>
              <p className="data-name">{data?.name}</p>
            </div>
          ))}          
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default About
