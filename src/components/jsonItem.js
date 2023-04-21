import React from "react";
import {Link} from "react-router-dom";

const JsonItemComponent = ({ item }) => {
    return (
        <Link to={`/details/${item.goods_id}`}>
            <div className="card card-size pb-5">
                <img src={item.goods_img} className="card-image-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        {item.goods_name}
                        <br />
                        <b>{item.retailPrice.amountWithSymbol}</b>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default JsonItemComponent;
