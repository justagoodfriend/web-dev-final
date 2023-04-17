import React from "react";
import PROFILE from "../images/profile-empty.jpeg";

export const createStars = (reviewAmount) => {
  //Colors in the stars for the rating use produces since I found them with bootstrap whole numbers are easier to work with
  const starDiff = 5 - reviewAmount;
  return (
    <div>
      {Array(reviewAmount)
        .fill(0)
        .map((element, indx) => (
          <i class="bi bi-star-fill"></i>
        ))}
      {Array(starDiff)
        .fill(0)
        .map((element, indx) => (
          <i class="bi bi-star"></i>
        ))}
    </div>
  );
};

const Review = () => {
  //sample review:
  const review = {
    image: "",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tortor vestibulum, sagittis orci sed, posuere dolor. Nulla rutrum pellentesque cursus. Phasellus eu sapien elit. Sed quis tincidunt ligula, vel suscipit urna. Praesent pharetra eleifend consequat. Nulla a tincidunt augue. Pellentesque et odio aliquet, tempor lectus at, cursus tellus`,
    username: "Aliya_9",
    reviewAmount: 3,
  };

  return (
    <div className="flex gap-between p-4 grey-background rounded-image">
      <div className="flex-col items-center">
        <img src={PROFILE} width="48px" className="rounded-circle" alt="user" />
        {review.username}
      </div>

      <div className="">
        {createStars(review.reviewAmount)}
        <span className="mt-4">{review.description} </span>
      </div>
    </div>
  );
};

export default Review;
