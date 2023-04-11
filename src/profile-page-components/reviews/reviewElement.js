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

                <div className="row">
                    <div className="col-2 d-flex align-items-center">
                        <div className="ms-4">
                            <img src={`/images/profile-empty.jpeg`} alt="..."
                                 className="profile-pic-round-mini rounded-circle"/>
                            <div className="text-center">
                                Aliyah_9
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <Stars key={review._id} rating={review.rating}/>
                        {review.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewElement;