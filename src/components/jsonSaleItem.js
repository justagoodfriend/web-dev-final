import React from "react";
import {Link} from "react-router-dom";

const JsonSaleItemComponent = ({ item }) => {
    return (
        <div className="card">
            <Link to={`/details/${item.goods_id}`}>
            <img src={item.goods_img} className="card-image-top" alt="..." />
            <div className="card-body">
                <p className="card-text">
                    {item.goods_name}
                    <br />
                    <b className="text-danger">{item.salePrice.amountWithSymbol}</b>
                    <p className="text-decoration-line-through">{item.retailPrice.amountWithSymbol}</p>
                </p>
            </div>
            </Link>
        </div>
    );
};

export default JsonSaleItemComponent;