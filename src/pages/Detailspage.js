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
import { getItemById } from "../ApiClient/services/item";
import { useContext } from "react";
import { UserContext } from "../redux/userContextTest";
import { findItemByIdThunk } from "../ApiClient/thunks/itemThunk";
import { useNavigate } from "react-router-dom";
const DetailsPage = () => {
  const goodsId = useParams().iid;
  const [databaseItem, setDatabaseItem] = useState(false);
  const [itemImg, setItemImg] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemColors, setItemColors] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const [sizes, setItemSizes] = useState(["Small", "Medium", "Large"]);
  const [sellerId, setSellerId] = useState("");

  //set an empty item:

  const [createdItem, setItem] = useState({});
  //const currentUser = useSelector((state) => state.users.currentUser);

  const { user } = useContext(UserContext);
  //console.log(user);
  const currentUser = JSON.parse(user);
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
  const navigate = useNavigate();

  useEffect(() => {
    findUserLiked();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const initialItem = await getItemById(goodsId);
      if (initialItem) {
        console.log("test", initialItem);
        setItemName(initialItem.title);
        setItemImg(initialItem.image);
        setItemPrice(initialItem.price);
        setItemColors(initialItem.colors);
        setItemSizes(initialItem.sizes);
        setSellerId(initialItem.sellerId);
        setDatabaseItem(true);
        const item = {
          uid: currentUser._id,
          iid: goodsId,
          ...initialItem,
        };
        setItem(item);
      } else {
        const results = await querySearchByGoodsID(goodsId);
        setItemImg(results.info.goods_img);
        setItemName(results.info.goods_name);
        setItemPrice(results.info.retail_price.amountWithSymbol);
        const moreDetails = results.info.mainSaleAttribute.info;
        let colors = [];
        moreDetails.forEach((detail) => {
          colors.push(detail.attr_value);
        });
        const item = {
          uid: currentUser._id,
          iid: goodsId,
          itemId: goodsId,
          title: results.info.goods_name,
          price: results.info.retail_price.amountWithSymbol,
          colors: colors,
          sizes: ["small", "medium", "large"],
          image: results.info.goods_img,
        };
        console.log("IN HERE! here is the item created:");
        console.log(item);
        setItem(item);
        setItemColors(colors);
      }
    };
    getData();
  }, []);

  const updateLikesHandler = () => {
    if (currentUser && currentUser._id != null) {
      console.log(
        "created this item prior when I loaded the page " +
          JSON.stringify(createdItem)
      );
      console.log("LIKES currently favoriting");
      const item = {
        uid: currentUser._id,
        iid: goodsId,
      };
      //console.log("Item" + item);
      if (liked) {
        dispatch(deleteFavoriteThunk(item));
      } else {
        dispatch(createFavoriteThunk(createdItem));
      }

      setLiked(!liked);
    } else {
      alert("Must be logged in to favorite an item");
    }
  };

  const createReviewHandler = () => {
    if (currentUser && currentUser._id != null) {
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

  const navigateToSellerHandler = () => {
    navigate("/profile/" + sellerId);
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
                <option disabled defaultValue="Select size" hidden>
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
              {databaseItem && (
                <button
                  className="rounded-pill xl-font-size py-1 add-to-cart-button"
                  onClick={() => navigateToSellerHandler()}
                >
                  <span>View Seller Profile</span>
                </button>
              )}
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
