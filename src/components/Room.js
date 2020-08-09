import React from "react";
import { Link } from "react-router-dom";
import defaulting from "../images/room-1.jpeg";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { name, lit, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaulting} alt="single room" />
        <div className="price-top">
          <h6>₦{price}k</h6>
          <p>per week</p>
        </div>
        <Link to={`/rooms/${lit}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="rook-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lit: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
