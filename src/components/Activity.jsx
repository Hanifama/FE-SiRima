import React from 'react'

const Activity = () => {
  return (
    <section className="popular_news">

        <div className="container-service">

        <div className="container__heading">
            <div>
            <h2 className="hidden">Kegiatan Kami</h2>
            <p>
                Domumentasi poto dan kegiatan kami dalam pelayanan kepada masyarakat
            </p>
            </div>
            <button className='btn-togle'>Berita Lainnya</button>
        </div>
        
            <div className="grid-container">
            <div>
                <div className="nested-grid">
                <img src="https://via.placeholder.com/300x200" alt="Image 1" />
                <img src="https://via.placeholder.com/300x200" alt="Image 2" />
                </div>
                <div className="nested-grid">
                <img src="https://via.placeholder.com/300x200" alt="Image 3" />
                <img src="https://via.placeholder.com/300x200" alt="Image 4" />
                </div>
                <img src="https://via.placeholder.com/300" alt="Image 6" />
                <img src="https://via.placeholder.com/300" alt="Image 7" />
            </div>
            <div>
                <div className="nested-grid">
                <img src="https://via.placeholder.com/300x400" alt="Image 5" />
                <img src="https://via.placeholder.com/300x150" alt="Image 8" />
                <img src="https://via.placeholder.com/300x150" alt="Image 9" />
                </div>
            </div>
            </div>
        </div>
        
        
        
    </section>

  )
}

export default Activity
