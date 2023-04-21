import React, { useState, useEffect } from "react";
import UserSection from "../components/userSection";
import database from "../databaseDetails.json";
import * as userService from "../ApiClient/users.js";

// import Review, { createStars } from "../components/review";
import Reviews from "../profile-page-components/reviews/reviews.js";
const DetailsPage = () => {
  const [user, setUser] = useState(null);
  const currentUser = async () => {
      const user1 = await userService.profile();
      setUser(user1);
  };

  useEffect(() => {
      currentUser();
  }, []);
  const item = database[0];
  //thinking whenever the user favorites an icon the heart fills similar to what we had to do with the assignment
  //const [favorite, setFavorite] = useState(item.favorited);
  return (
    <div className="row">
      <UserSection />
      <div className="col-9 flex-col" style={{ gap: "3rem" }}>
        <div className="flex pt-4">
          <div className="flex-col flex-full items-center">
            <img
              src={`/images/white-button-up.jpeg`}
              className="details-image-width rounded-image"
              alt="display"
            />
          </div>

          <div className="flex flex-full space-between">
            <div className="flex-col gap-between details-margin">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <select className="drop-down-button px-4 py-1">
                <option disabled selected hidden>
                  {" "}
                  Select size
                </option>
                {item["availableColors"].map((element, index) => (
                  <option value={index}>{element}</option>
                ))}
              </select>
              <select className="drop-down-button px-4 py-1">
                <option disabled selected hidden>
                  {" "}
                  Select color
                </option>
                {item["availableSizes"].map((element, index) => (
                  <option value={index}>{element}</option>
                ))}
              </select>
              <button className="rounded-pill xl-font-size py-1 add-to-cart-button">
                <i className="bi bi-cart"></i> Add to Card
              </button>
            </div>
          </div>
          <i className="bi bi-heart heart-size mt-4"></i>
        </div>

        <div className="flex-col gap-between px-4">
          <Reviews/>
          {/*<div className="flex gap-between">3 Reviews {createStars(4)}</div>*/}
          {/*{Array(3)*/}
          {/*  .fill(0)*/}
          {/*  .map((element) => (*/}
          {/*    <Review />*/}
          {/*  ))}*/}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
