import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
    let {title, description, imgUrl, newsUrl, date, author} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imgUrl ? "https://i.ytimg.com/vi/-k8Cd8X18_M/maxresdefault.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className='tertiary'>By {author} on {new Date(date).toDateString()}</p>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems