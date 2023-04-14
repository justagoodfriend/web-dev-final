import React from "react";

const JsonItemComponent = ({ item }) => {
    return (
        <div className="card">
            <img src={item.goods_img} className="card-image-top" alt="..." />
            <div className="card-body">
                <p className="card-text">
                    {item.goods_name}
                    <br />
                    <b>{item.retailPrice.amountWithSymbol}</b>
                </p>
            </div>
        </div>
    );
};

export default JsonItemComponent;
