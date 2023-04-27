import React, { useEffect, useState } from "react";
import Stars from "./stars";
import { useDispatch } from "react-redux";
import {
  deleteReviewThunk,
  updateReviewThunk,
} from "../../ApiClient/thunks/reviewsThunk";
import querySearchByGoodsID from "../../search-page-components/shien-queries-goodsId";
import JsonItemComponent from "../../components/jsonItem";
import { Link } from "react-router-dom";
import * as userService from "../../ApiClient/services/users";
import { useContext } from "react";
import { UserContext } from "../../redux/userContextTest";

const ReviewElementItem = ({
  review = {
    author: "",
    _id: 123,
    review: {
      content: "",
      itemId: "",
      userId: "",
      rating: 0,
    },
  },
}) => {
  const dispatch = useDispatch();
  const [stars, setStars] = useState(
    <Stars key={review._id} rating={review.rating} />
  );
  const [contentValue, setContentValue] = useState(review.content);
  const [ratingValue, setRatingValue] = useState(review.rating.toString());
  //const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  const getUserName = async () => {
    const profile = await userService.findProfile(review.author);
    setUserName(profile.username);
  };
  const { user } = useContext(UserContext);
  console.log(user);
  const currentUser = JSON.parse(user);

  /*
  const currentUser = async () => {
    const user1 = await userService.profile();
    setUser(user1);
  };
  */

  useEffect(() => {
    getUserName();
  });
  // get item info from item id

  // console.log(review);
  const updateReviewHandler = (id, event) => {
    console.log(user);
    if (currentUser != null) {
      //console.log("user id", user._id);
      console.log("review author", review.author);
      if (currentUser._id === review.author) {
        const icon = event.target;
        const contentDiv =
          event.target.parentNode.parentNode.parentNode.children[1];
        if (icon.className === "bi bi-pen pe-2") {
          // contentDiv.textContent = "";
          // console.log(contentDiv.children);
          const rating = contentDiv.children[2];
          const content = contentDiv.children[3];
          rating.className = "";
          content.className = "";
          icon.className = "bi bi-check-lg pe-2";
        } else if (icon.className === "bi bi-check-lg pe-2") {
          const newReview = {
            rid: review._id,
            content: contentValue,
            rating: parseInt(ratingValue),
          };
          console.log("in review element", newReview);
          // console.log(contentDiv.children);
          dispatch(updateReviewThunk(newReview));
          const newContent = contentDiv.children[1];
          const rating = contentDiv.children[2];
          const content = contentDiv.children[3];
          rating.className = "d-none";
          content.className = "d-none";
          newContent.textContent = contentValue;
          setStars(<Stars key={review._id} rating={parseInt(ratingValue)} />);
          icon.className = "bi bi-pen pe-2";
        } else {
          alert("Cannot edit other users' reviews");
        }
      }
    } else {
      alert("Must be signed in to edit reviews");
    }
  };
  const deleteReviewHandler = (id) => {
    dispatch(deleteReviewThunk(id));
  };

  //author => findById

  return (
    <div className="my-3">
      <div className="rounded-4 bg-secondary bg-opacity-25 p-4 me-5">
        <div className="row d-flex flex-nowrap">
          <div className="col-2 d-flex align-items-center">
            <div className="ms-3">
              <img
                src={`/images/profile-empty.jpeg`}
                alt="..."
                className="profile-pic-round-mini rounded-circle"
              />
              <div className="text-center">{userName}</div>
            </div>
          </div>
          <div className="col-9 pe-0">
            {stars}
            <span>{review.content}</span>
            <label className="d-none">
              Rating:
              <input
                className="form-control textarea-autosize"
                onChange={(e) => {
                  setRatingValue(e.target.value);
                }}
                value={ratingValue}
              />
            </label>
            <label className="d-none">
              Review:
              <textarea
                className="form-control textarea-autosize"
                onChange={(e) => {
                  setContentValue(e.target.value);
                }}
                value={contentValue}
              />
            </label>
          </div>
          {currentUser && currentUser._id === review.author ? (
            <div className="col-auto p-0">
              <button
                onClick={(event) => updateReviewHandler(review._id, event)}
              >
                <i className="bi bi-pen pe-2" />
              </button>
              <button onClick={() => deleteReviewHandler(review._id)}>
                <i className="bi bi-x-lg" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewElementItem;