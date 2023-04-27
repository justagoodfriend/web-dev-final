//import wishlist from "./wishlist.json";
//import WishlistItem from "./wishlistItem";
import ListingItem from "../../components/listingItems";
import { getItemById, getItemsBySeller } from "../../ApiClient/services/item";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../redux/userContextTest";
import { getFavoritesByUserId } from "../../ApiClient/services/favorites";
import WishListItem from "../../components/WishlistProfile";

const Wishlist = () => {
  //get the currentUser here, based on whether the user is a seler/buyer the queries should be different
  const [database, setDatabase] = useState([]);
  const { user } = useContext(UserContext);
  const currentUser = JSON.parse(user);
  console.log(currentUser);

  /*
    return (
        <div className="d-flex flex-wrap custom-padding-left pt-3">
            {
                wishlist.map(item =>
                    <WishlistItem key={item._id} item={item}/>
                )
            }
        </div>
    );
    */

  //gets the favorited items by a seller
  const fetchSellersItems = async () => {
    //get all items, that correspond to sellerID
    const dbItems = await getItemsBySeller(currentUser._id);
    if (dbItems) {
      setDatabase(dbItems);
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
