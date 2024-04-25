import React from 'react';


const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <a rel="noreferrer" style={{ textDecoration: 'None' }} href={newsUrl} target="_blank">
            <div className="my-3">
                <div className="card border border-black">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>

                        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top w-100" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title underline-on-hover">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default NewsItem;
