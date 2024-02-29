import { Component } from "react";
import "./news.scss";

export class NewsCard extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { img, date, content } = this.props;
    return (
      <div className="news__card">
        <div className="img">
          <img src={img} alt="img" />
        </div>
        <span>{date}</span>
        <p>{content}</p>
      </div>
    );
  }
}

export default NewsCard;
