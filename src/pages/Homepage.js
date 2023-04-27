import CarouselItems from "../components/carouselitems";
import React, {useState, useEffect, useContext} from "react";
import UserSection from "../components/userSection";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import querySearchByGoodsID from "../search-page-components/shien-queries-goodsId";
import querySearch from "../search-page-components/shein-service";
import {getItems} from "../ApiClient/services/item";
import {UserContext} from "../redux/userContextTest";
import Wishlist from "../profile-page-components/wishlist/wishlist";

const HomePage = () => {
    const { user } = useContext(UserContext);
    // console.log(user);
    const currentUser = JSON.parse(user);
  // console.log(user);

    const [recommendedItems, setRecommendedItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [listingItems, setListingItems] = useState([]);

    useEffect(() => {
        const getRecommendedItems = async () => {
            if (currentUser) {
                if (currentUser.wishlist && currentUser.wishlist.length > 0) {
                    const mostRecentItemId = currentUser.wishlist[currentUser.wishlist.length - 1];
                    const item = await querySearchByGoodsID(mostRecentItemId);
                    // console.log("test", item);
                    // console.log("test name", item.info.goods_name);
                    const keyword = item.info.goods_name.split(" ")[1];
                    const results = await querySearch(keyword, 9);
                    setRecommendedItems(results.info.products);
                } else {
                    const results = await querySearch("Shoes", 9);
                    // console.log(results.info.products);
                    setRecommendedItems(results.info.products);
                }
            }
        }
        const getWishlistItems = async () => {
            if (currentUser && currentUser.wishlist) {
                if (currentUser.wishlist.length > 0) {
                    const results = currentUser.wishlist.map(async (itemId) => {
                        const item = await querySearchByGoodsID(itemId);
                        return item.info;
                    });
                    setWishlistItems(results);
                }
            }
        }
        const fetchNewSellerItems = async () => {
            if (currentUser && currentUser.items) {
                const dbItems = await getItems();
                console.log(dbItems);
                setListingItems(dbItems);
            }
        };

        getRecommendedItems();
        getWishlistItems();
        fetchNewSellerItems();
    }, []);


  return (
    <div className="row">
      <UserSection active="Home" />
      <div className="col-9">
        {console.log("recommended items", recommendedItems)}
        {currentUser && <CarouselItems title="Recommended" id="R1" items={recommendedItems}/>}
        {currentUser && currentUser.wishlist &&
            (
                <div className="pt-3 ps-4">
                    <h2> Favorited </h2>
                    <Wishlist/>
                </div>
            )
        }
        {currentUser && currentUser.items && <CarouselItems title="Listed Items" id="W1" items={listingItems} customItems={true}/>}

        {(!currentUser || !currentUser.username || currentUser.items) && (
          <CarouselItems title="Best Sellers" id="W1" queryTitle="Shein" category="8"/>
        )}
        {(!currentUser || !currentUser.username || currentUser.items) && (
          <CarouselItems title="Recent Additions" id="R1" queryTitle="Shein" category="9" />
        )}
        <Outlet />
      </div>
    </div>
  );
};
export default HomePage;
