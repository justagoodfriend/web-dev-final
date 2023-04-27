import React from "react";
import { Link } from "react-router-dom";

const ListingItem = ({ item }) => {
  console.log("current item found " + item);
  return (
    <div>
      {item && item.sellerId && (
        <div className="card">
          <Link to={`/details/${item.itemId}`}>
            <img src={item.image} className="card-image-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                {item.title}
                <br />
                <b>{item.price}</b>
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListingItem;
