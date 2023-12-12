import React from 'react'
import image from '../assets/user.jpeg'

const News = () => {
  return (
    <section className="container">
        <div className="popular_news">
        <div className="container__heading">
            <div>
            <h2 className="hidden">Berita Terkini</h2>
            <p>
                Semua berita terkait satkar pusat sumber daya mineral, batubara dan
                panas bumi ditampilkan disini
            </p>
            </div>
            <button className='btn-togle'>See All</button>
        </div>

        <div className="news__container">
            <article className="news">
            <div className="news_image">
                <img src={image} alt="news picture" />
            </div>
            <div className="news__info">
                <h4>
                Sosialisiasi Kegiatan Survei Landaian Suhu daerah Gunung
                Endut,Kabupaten Lebak, Provinsi Banten
                </h4>
                <p>senin, 18 September 2023</p>
                <p>pusat sumberdaya mineral, batubara, dan panas bumi</p>
                <p>
                Badan Geologi Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto placeat totam atque reiciendis veniam!
                </p>
                <div className='btn-container'>                    
                <button className='btn-news'>Lanjutkan</button>
                </div>
            </div>
            </article>
            <article className="news">
            <div className="news_image">
                <img src={image} alt="news picture" />
            </div>
            <div className="news__info">
                <h4>
                Sosialisiasi Kegiatan Survei Landaian Suhu daerah Gunung
                Endut,Kabupaten Lebak, Provinsi Banten
                </h4>
                <p>senin, 18 September 2023</p>
                <p>pusat sumberdaya mineral, batubara, dan panas bumi</p>
                <p>
                Badan Geologi Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto placeat totam atque reiciendis veniam!
                </p>
                <div className='btn-container'>                    
                <button className='btn-news'>Lanjutkan</button>
                </div>
            </div>
            </article>
            <article className="news">
            <div className="news_image">
                <img src={image} alt="news picture" />
            </div>
            <div className="news__info">
                <h4>
                Sosialisiasi Kegiatan Survei Landaian Suhu daerah Gunung
                Endut,Kabupaten Lebak, Provinsi Banten
                </h4>
                <p>senin, 18 September 2023</p>
                <p>pusat sumberdaya mineral, batubara, dan panas bumi</p>
                <p>
                Badan Geologi Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto placeat totam atque reiciendis veniam!
                </p>
                <div className='btn-container'>                    
                <button className='btn-news'>Lanjutkan</button>
                </div>
            </div>
            </article>

            
        </div>
        </div>
    </section>

  )
}

export default News
