import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
axios
const Newslist = () => {
    const [DataNews, setDataNews] = useState([]);

    useEffect(() => {
        axios.get(
            'https://georima.pptik.id/api/v1/activities/public/get?page=1&limit=10'
        )
        .then((ressponse) => {
            setDataNews(ressponse?.data?.data);
        });
    }, []);

    console.log('Data News : ', DataNews);
    return (
        <div className='news__container'>        
        {DataNews?.map((data, indexData) => (   
            <article className="news" key={indexData}>
            <div className="news_image">
                <img src={`https://georima.pptik.id/api/${data?.image}`} alt="news picture" />
            </div>
            <div className="news__info">
                <h4>
                {data?.title}
                </h4>
                <p>{dayjs(data?.createdAt).format('DD-MM-YYYY')}</p>
                <p>{data?.description}</p>
                <p>
                {data?.description}
                </p>
                <div className='btn-container'>                    
                <button className='btn-news'>Lanjutkan</button>
                </div>
            </div>
          </article>                  
        
      ))}
    </div>
    );
};

export default Newslist;
