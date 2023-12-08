import React from 'react'

const Newsitem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">{source}</span>
            <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2017/03/stocks_BSE_Nifty_Sensex__markets_bse_nse_nifty-1_1280-770x433.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} mins ago</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )

}

export default Newsitem;