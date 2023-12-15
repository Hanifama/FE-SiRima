
import NewsList from './Newslist'

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
           <NewsList/>        
        </div>
    </section>

  )
}

export default News
