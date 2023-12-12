

const Service = ({ Datas }) => {
    const dummyData = [
        {
          image: "https://via.placeholder.com/300x200",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
          buttons: ["Lihat Aplikasi", "Download Aplikasi"],
        },
        {
          image: "https://via.placeholder.com/300x200",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
          buttons: ["Lihat Aplikasi", "Download Aplikasi"],
        },
        {
          image: "https://via.placeholder.com/300x200",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
          buttons: ["Lihat Aplikasi", "Download Aplikasi"],
        },
        {
            image: "https://via.placeholder.com/300x200",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
            buttons: ["Lihat Aplikasi", "Download Aplikasi"],
          },
          {
            image: "https://via.placeholder.com/300x200",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
            buttons: ["Lihat Aplikasi", "Download Aplikasi"],
          },
          {
            image: "https://via.placeholder.com/300x200",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
            buttons: ["Lihat Aplikasi", "Download Aplikasi"],
          },
          {
            image: "https://via.placeholder.com/300x200",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
            buttons: ["Lihat Aplikasi", "Download Aplikasi"],
          },
          {
            image: "https://via.placeholder.com/300x200",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
            buttons: ["Lihat Aplikasi", "Download Aplikasi"],
          },
          {
            image: "https://via.placeholder.com/300x200",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper...",
            buttons: ["Lihat Aplikasi", "Download Aplikasi"],
          },
                    
      ];
  return (
   <section className="container-service">
    <h1>Layanan Kami</h1>
    {dummyData.map((item, index) => (
        <div
          key={index}
          className={`content-service ${index % 2 === 0 ? 'odd' : 'even'}`}
        >
          <div className="img-content-service">
            <img src={item.image} alt="Gambar GeoRima" />
          </div>
          <div className="text-content">
            <h1>Tentang GeoRima</h1>
            <p>{item.paragraph}</p>
            <button className="first-button">{item.buttons[0]}</button>
            <button className="second-button">{item.buttons[1]}</button>
          </div>
        </div>
      ))}
   </section>
  )
}

 
export default Service
