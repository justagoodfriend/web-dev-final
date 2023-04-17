import React from "react";


const WishlistItem = (
    {
        item = {
            "id":0,
            "image":"",
            "title":"",
            "price": ""
        }
    }
) => {
    return (
        <div className="card no-border me-4 mb-4">
            <img src={`/images/${item.image}`} className="card-image-top rounded-4" alt="..." />
            <div className="d-flex flex-row justify-content-between pt-3">
                <div>
                    {item.title}
                </div>
                <div>
                    <b>${item.price}</b>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;