//import wishlist from "./wishlist.json";
//import WishlistItem from "./wishlistItem";
import ListingItem from "../../components/listingItems";
import { getItemById, getItemsBySeller } from "../../ApiClient/services/item";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../redux/userContextTest";
import { getFavoritesByUserId } from "../../ApiClient/services/favorites";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../ApiClient/thunks/authThunks";
import WishListItem from "../../components/WishlistProfile";


const Wishlist = ({
    userId = null
                  }) => {
  //get the currentUser here, based on whether the user is a seler/buyer the queries should be different
  const dispatch = useDispatch();
  const [database, setDatabase] = useState([]);
  let paramUserId = useParams().uid;
  const userViewed = useSelector((state) => state.users.currentTarget);

  if (!userId) {
    userId = paramUserId;
  }

  //gets the favorited items by a seller
  const fetchSellersItems = async () => {
    //get all items, that correspond to sellerID
    console.log("getting seller items for", userId);
    const dbItems = await getItemsBySeller(userId);
    if (dbItems) {
      const item = dbItems.map((item) => item.itemId);
      console.log(item);
      setDatabase(item);
    }
  };

  //gets the favorited items by a buyer
  //TODO: make this work for both logged in user, and the user from the params:
  const fetchBuyerFavorited = async () => {
    const dbItems = await getFavoritesByUserId(userId);
    console.log("this is the items returned from query" + dbItems);
    if (dbItems) {
      const item = dbItems.map((item) => item.itemId);
      console.log(item);
      setDatabase(item);
    }
  };

  useEffect(
      () => {
        dispatch(findUserByIdThunk(userId));
      },[]);

  useEffect(() => {
    if (userViewed && userViewed.items) {
      fetchSellersItems();
      console.log("db items", database)
    } else {
      fetchBuyerFavorited();
    }
  }, [userViewed]);

  return (
    <div className="cards result-layout">
      {database.map((item) => (
        <WishListItem goodsId={item} />
      ))}
    </div>
  );
};

export default Wishlist;
