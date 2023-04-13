import React from "react";
import Stars from "./stars";

const ReviewElement = ({
    review = {
        "_id": 123,
        "title": "",
        "rating": 0,
        "content": ""
    }
}) => {
    return(
        <div className="my-3">
            <h5>{review.title}</h5>
            <div className="rounded-4 bg-secondary bg-opacity-25 p-4 me-5">
                <div className="row d-flex flex-nowrap">
                    <div className="col-2 d-flex align-items-center">
                        <div className="ms-3">
                            <img src={`/images/profile-empty.jpeg`} alt="..."
                                 className="profile-pic-round-mini rounded-circle"/>
                            <div className="text-center">
                                Aliyah_9
                            </div>
                        </div>
                    </div>
                    <div className="col-9 pe-0">
                        <Stars key={review._id} rating={review.rating}/>
                        {review.content}
                    </div>
                    <div className="col-auto p-0">
                        <i className="bi bi-pen pe-2"/>
                        <i className="bi bi-x-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewElement;