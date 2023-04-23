import React, { useEffect, useState } from "react";
import UserSection from "../components/userSection";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import querySearchByGoodsID from "../search-page-components/shien-queries-goodsId";
import { createReviewThunk } from "../ApiClient/thunks/reviewsThunk";
import ReviewsItem from "../profile-page-components/reviews/reviewsItem";
import { getFavoritesOfUserAndID } from "../ApiClient/services/favorites";
import {
  createFavoriteThunk,
  findFavoritesForItemandUserThunk,
  deleteFavoriteThunk,
} from "../ApiClient/thunks/favoritesThunk";
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
  const currentUser = useSelector((state) => state.users.currentUser);
  // not in redux, mayble not important to use redux?
  const [liked, setLiked] = useState(false);
  const findUserLiked = async () => {
    const item = {
      uid: currentUser._id,
      iid: goodsId,
    };
    const userliked = await getFavoritesOfUserAndID(item);
    if (userliked) {
      setLiked(true);
    }
  };
  const dispatch = useDispatch();

  //const likesOnItem = useSelector((state) => state.favorites);
  //console.log(likesOnItem);

  useEffect(() => {
    findUserLiked();
    //maybe / maybe not need this condition check idk
    // if (currentUser != null) {
    //   const item = {
    //     uid: otherCurrentUser._id,
    //     iid: goodsId,
    //   };
    //   dispatch(findFavoritesForItemandUserThunk(item));
    // }
    //on page load, fetch the response from the server, if has object -> means you liked
  }, []);

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
      const item = {
        uid: currentUser._id,
        iid: goodsId,
      };
      console.log("Item" + item);
      if (liked) {
        dispatch(deleteFavoriteThunk(item));
      } else {
        dispatch(createFavoriteThunk(item));
      }

      setLiked(!liked);

      //TODO afterwards, find if the current user liked this item:
      //depending on whether liked or disliked/ create or delete
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
                <span>Favorite</span>
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
          <i
            className={`bi heart-size mt-4 ${
              liked ? "text-danger bi-heart-fill" : "bi-heart"
            }`}
          ></i>
        </div>

        <div className="flex-col gap-between px-4">
          <ReviewsItem itemId={goodsId} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
