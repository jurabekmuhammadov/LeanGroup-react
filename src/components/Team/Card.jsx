import { Component } from "react";
import "./card.scss";
export class Card extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { avatar, name, position, number, email } = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <img src={avatar} alt="" />
          </div>
          <div className="content">
            <p className="name">{name}</p>
            <p className="position">{position}</p>
            <p className="number">{number}</p>
            <p className="email">{email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
