//import wishlist from "./wishlist.json";
//import WishlistItem from "./wishlistItem";
import ListingItem from "../../components/listingItems";
import { getItemsBySeller } from "../../ApiClient/services/item";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../redux/userContextTest";
import { getFavoritesByUserId } from "../../ApiClient/services/favorites";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {findUserByIdThunk} from "../../ApiClient/thunks/authThunks";

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
      setDatabase(dbItems);
    }
  };

  //gets the favorited items by a buyer
  //TODO: fix this so that it works for a buyer, since it breaks the Mongoose DB
  const fetchBuyerFavorited = async () => {
    const dbItems = await getFavoritesByUserId(userId);
    if (dbItems) {
      setDatabase(dbItems);
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
        <ListingItem item={item} />
      ))}
    </div>
  );
};

export default Wishlist;
