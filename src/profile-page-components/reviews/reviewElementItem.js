import React, {useEffect, useState} from "react";
import Stars from "./stars";
import {useDispatch} from "react-redux";
import {deleteReviewThunk, updateReviewThunk} from "../../ApiClient/thunks/reviewsThunk";
import querySearchByGoodsID from "../../search-page-components/shien-queries-goodsId";
import JsonItemComponent from "../../components/jsonItem";
import {Link} from "react-router-dom";

const ReviewElementItem = ({
          review = {
              "author": "",
              "_id": 123,
              "review": {
                  "content": "",
                  "itemId": "",
                  "userId": "",
                  "rating": 0
              }
          }
      }) => {
    const dispatch = useDispatch();
    const [stars, setStars] = useState(<Stars key={review._id} rating={review.rating}/>);

    // get item info from item id

    // console.log(review);
    const updateReviewHandler = (id, event) => {
        const icon = event.target;
        const contentDiv = event.target.parentNode.parentNode.parentNode.children[1];
        const currentContent = contentDiv.textContent;
        if (icon.className === "bi bi-pen pe-2") {
            const starsExtra = contentDiv.firstElementChild;
            const rating = document.createElement('input');
            const ratingLabel = document.createElement('label');
            rating.value = review.rating;
            rating.className = "form-control textarea-autosize";
            rating.name = "ratingArea";
            rating.rows = 1;
            ratingLabel.htmlFor = "ratingArea";
            ratingLabel.textContent = "Rating:";
            contentDiv.textContent = "";
            contentDiv.insertAdjacentElement("beforeend", starsExtra);
            contentDiv.insertAdjacentElement("beforeend", ratingLabel);
            contentDiv.insertAdjacentElement("beforeend", rating);
            icon.className = "bi bi-check-lg pe-2";
            const input = document.createElement('textarea');
            const inputLabel = document.createElement('label');
            input.value = currentContent;
            input.className = "form-control textarea-autosize";
            input.name = "contentArea";
            inputLabel.htmlFor = "contentArea";
            inputLabel.textContent = "Review:";
            contentDiv.insertAdjacentElement("beforeend", inputLabel);
            contentDiv.insertAdjacentElement("beforeend", input);
        }
        else if (icon.className === "bi bi-check-lg pe-2") {
            let stars = contentDiv.firstElementChild;
            const input = contentDiv.children[4];
            const contentValue = input.value;
            const rating = contentDiv.children[2];
            const ratingValue = rating.value;
            const newReview = {
                content: contentValue,
                rating: ratingValue,
            };
            dispatch(updateReviewThunk(id, newReview));
            contentDiv.textContent = "";
            setStars(<Stars key={review._id} rating={ratingValue}/>);
            contentDiv.insertAdjacentElement("beforeend", stars);
            contentDiv.insertAdjacentHTML("beforeend", contentValue);
            icon.className = "bi bi-pen pe-2";
        }
    }
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }

    return(
        <div className="my-3">
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
                        {stars}
                        {review.content}
                    </div>
                    <div className="col-auto p-0">
                        <button onClick={(event) => updateReviewHandler(review._id, event)}>
                            <i className="bi bi-pen pe-2"/>
                        </button>
                        <button onClick={() => deleteReviewHandler(review._id)}>
                            <i className="bi bi-x-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewElementItem;