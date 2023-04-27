import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItemById } from "../ApiClient/services/item";

const WishListItem = ({ goodsId }) => {
  const [itemId, setItemId] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    const getItem = async () => {
      const item = await getItemById(goodsId);
      setItemId(item.itemId);
      setImage(item.image);
      setTitle(item.title);
      setPrice(item.price);
    };
    getItem();
  }, []);
  return (
    <div className="card">
      <Link to={`/details/${itemId}`}>
        <img src={image} className="card-image-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {title}
            <br />
            <b>{price}</b>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WishListItem;
