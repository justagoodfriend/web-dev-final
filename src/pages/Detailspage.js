import React, { useEffect, useState } from "react";
import UserSection from "../components/userSection";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import querySearchByGoodsID from "../search-page-components/shien-queries-goodsId";
import { createReviewThunk } from "../ApiClient/thunks/reviewsThunk";
import ReviewsItem from "../profile-page-components/reviews/reviewsItem";
import * as userService from "../ApiClient/services/users.js";
import { createFavoriteThunk } from "../ApiClient/thunks/favoritesThunk";
import { updateUserLikesThunk } from "../ApiClient/thunks/authThunks";
const DetailsPage = () => {
  const goodsId = useParams().iid;
  const [itemImg, setItemImg] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemColors, setItemColors] = useState([]);
  const sizes = ["Small", "Medium", "Large"];
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  // const {currentUser} = useSelector((state) => state.users);
  const [user, setUser] = useState(null);
  const currentUser = async () => {
    const user1 = await userService.profile();
    setUser(user1);
  };

  const otherCurrentUser = useSelector((state) => state.users.currentUser);
  console.log(otherCurrentUser);

  useEffect(() => {
    currentUser();
  }, []);
  //thinking whenever the user favorites an icon the heart fills similar to what we had to do with the assignment

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const results = await querySearchByGoodsID(goodsId);
      setItemImg(results.info.goods_img);
      setItemName(results.info.goods_name);
      setItemPrice(results.info.retail_price.amountWithSymbol);
      const moreDetails = results.info.mainSaleAttribute.info;
      let colors = [];
      moreDetails.forEach((detail) => {
        colors.push(detail.attr_value);
      });
      setItemColors(colors);
    };

    getData();
  }, []);

  const updateLikesHandler = () => {
    if (currentUser != null) {
      console.log(otherCurrentUser._id);
      console.log("currently in goods: " + goodsId);
      console.log("what is the type of this object: " + typeof goodsId);
      //TODO: come back to this later, because this should work its just that the goodsId is creating an object Object
      //type for no reason...
      dispatch(createFavoriteThunk(otherCurrentUser._id, goodsId));
      //console.log("test", goodsId);

      //dispatch(updateUserLikesThunk(goodsId))
    } else {
      alert("Must be logged in to favorite an item");
    }
  };

  const createReviewHandler = () => {
    if (currentUser != null) {
      const reviewFull = {
        itemId: goodsId,
        content: review,
        rating: parseInt(rating),
      };
      dispatch(createReviewThunk(reviewFull));
    } else {
      alert("Must be logged in to post a review");
    }
  };

  return (
    <div className="row">
      <UserSection />
      <div className="col-9 flex-col" style={{ gap: "3rem" }}>
        <div className="flex pt-4">
          <div className="flex-col flex-full items-center">
            <img
              src={`${itemImg}`}
              className="details-image-width rounded-image"
              alt="display"
            />
          </div>

          <div className="flex flex-full space-between">
            <div className="flex-col gap-between details-margin">
              <h1>{itemName}</h1>
              <h2>{itemPrice}</h2>
              {/*<p>{item.description}</p>*/}
              <select className="drop-down-button px-4 py-1">
                <option disabled defaultValue="Select color" hidden>
                  {" "}
                  Select color
                </option>
                {itemColors.map((element, index) => (
                  <option value={index}>{element}</option>
                ))}
              </select>
              <select className="drop-down-button px-4 py-1">
                <option disabled selected hidden>
                  {" "}
                  Select size
                </option>
                {sizes.map((element, index) => (
                  <option value={index}>{element}</option>
                ))}
              </select>
              <button
                className="rounded-pill xl-font-size py-1 add-to-cart-button"
                onClick={() => updateLikesHandler()}
              >
                <i className="bi bi-heart"></i> Favorite
              </button>
              <button className="rounded-pill xl-font-size py-1 add-to-cart-button">
                <i className="bi bi-cart"></i> Add to Card
              </button>
              <label>
                <div className="pb-1">
                  <b>Review</b>
                </div>
                <textarea
                  className="form-control"
                  onChange={(e) => setReview(e.target.value)}
                />
              </label>
              <label>
                <div className="pb-1">
                  <b>Rating</b>
                </div>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setRating(e.target.value)}
                />
              </label>
              <button
                className="rounded-pill xl-font-size py-1 add-to-cart-button"
                onClick={() => createReviewHandler()}
              >
                <i className="bi bi-pencil-square"></i> Post Review
              </button>
            </div>
          </div>
          <i className="bi bi-heart heart-size mt-4"></i>
        </div>

        <div className="flex-col gap-between px-4">
          <ReviewsItem itemId={goodsId} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
