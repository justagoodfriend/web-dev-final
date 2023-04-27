//import wishlist from "./wishlist.json";
//import WishlistItem from "./wishlistItem";
import ListingItem from "../../components/listingItems";
import { getItemById, getItemsBySeller } from "../../ApiClient/services/item";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../redux/userContextTest";
import { getFavoritesByUserId } from "../../ApiClient/services/favorites";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { findUserByIdThunk } from "../../ApiClient/thunks/authThunks";
import WishListItem from "../../components/WishlistProfile";

const Wishlist = () => {
  //get the currentUser here, based on whether the user is a seler/buyer the queries should be different
  const [database, setDatabase] = useState([]);
  let userId = useParams().uid;
  const { user } = useContext(UserContext);
  let currentUser = JSON.parse(user);
  if (!userId) {
    userId = currentUser._id;
  }
  // console.log(currentUser);

  //gets the favorited items by a seller
  const fetchSellersItems = async () => {
    //get all items, that correspond to sellerID
    const dbItems = await getItemsBySeller(userId);
    if (dbItems) {
      const item = dbItems.map((item) => item.itemId);
      setDatabase(item);
    }
  };

  //gets the favorited items by a buyer
  //TODO: make this work for both logged in user, and the user from the params:
  const fetchBuyerFavorited = async () => {
    const dbItems = await getFavoritesByUserId(currentUser._id);
    console.log("this is the items returned from query" + dbItems);
    if (dbItems) {
      const item = dbItems.map((item) => item.itemId);
      console.log(item);
      setDatabase(item);
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.items) {
      fetchSellersItems();
    } else {
      fetchBuyerFavorited();
    }
  }, []);

  return (
    <div className="cards result-layout">
      {database.map((item) => (
        <WishListItem goodsId={item} />
      ))}
    </div>
  );
};

export default Wishlist;
