import React from "react";

const JsonSaleItemComponent = ({ item }) => {
    return (
        <div className="card">
            <img src={item.goods_img} className="card-image-top" alt="..." />
            <div className="card-body">
                <p className="card-text">
                    {item.goods_name}
                    <br />
                    <b className="text-danger">{item.salePrice.amountWithSymbol}</b>
                    <p className="text-decoration-line-through">{item.retailPrice.amountWithSymbol}</p>
                </p>
            </div>
        </div>
    );
};

export default JsonSaleItemComponent;