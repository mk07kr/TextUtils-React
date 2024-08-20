import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imgurl}
            className="card-img-top"
            alt="https://static.vecteezy.com/system/resources/previews/014/747/879/original/letter-mk-logo-with-luxury-gold-template-elegance-logo-template-vector.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer" 
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary "
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
