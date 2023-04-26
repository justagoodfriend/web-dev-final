import CarouselItems from "../components/carouselitems";
import React, { useState, useEffect } from "react";
import UserSection from "../components/userSection";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import querySearchByGoodsID from "../search-page-components/shien-queries-goodsId";
import querySearch from "../search-page-components/shein-service";

const HomePage = () => {
  const user = useSelector((state) => state.users.currentUser);
  console.log(user);

    const [recommendedItems, setRecommendedItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const getRecommendedItems = async () => {
            if (user && user.wishlist) {
                const mostRecentItemId = user.wishlist[user.wishlist.length - 1];
                const item = await querySearchByGoodsID(mostRecentItemId);

                const keyword = item.info.goods_name.split(" ")[1];

                const results = await querySearch(keyword, 9);
                setRecommendedItems(results.info.products);
            }
        }
        const getWishlistItems = async () => {
            if (user && user.wishlist) {
                const results = user.wishlist.map(async (itemId) => {
                    const item = await querySearchByGoodsID(itemId);
                    return item.info;
                });
                setWishlistItems(results);
            }
        }

        getRecommendedItems();
        getWishlistItems();
    }, [user]);

  return (
    <div className="row">
      <UserSection active="Home" />
      <div className="col-9">
        {console.log(user && user.items)}
        {user && user.wishlist && <CarouselItems title="Recommended" id="R1" items={recommendedItems}/>}
        {user && user.wishlist && <CarouselItems title="Wishlist" id="W1" items={wishlistItems}/>}

        {(!user || !user.username || user.items) && (
          <CarouselItems title="Best Sellers" id="W1" queryTitle="Shein" category="8"/>
        )}
        {(!user || !user.username || user.items) && (
          <CarouselItems title="Recent Additions" id="R1" queryTitle="Shein" category="9" />
        )}
        <Outlet />
      </div>
    </div>
  );
};
export default HomePage;
