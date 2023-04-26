import React from "react";
import { Link } from "react-router-dom";

const ListingItem = ({ item }) => {
  console.log("current item found" + item);
  return (
    <Link to={`/details/${item.itemId}`}>
      <div className="card card-size pb-5">
        <img src={item.image} className="card-image-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {item.title}
            <br />
            <b>{item.price}</b>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListingItem;
