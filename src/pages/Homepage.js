import CarouselItems from "../components/carouselitems";
import React, { useState, useEffect } from "react";
import UserSection from "../components/userSection";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

//renders the initial homepage:, somethings up with the CSS styling and I have no idea what it is...
//for some reason, everythingn is still in block and the other attributes, including the cascade no longer work which is nice.
const HomePage = () => {
  const user = useSelector((state) => state.users.currentUser);
  console.log(user);
  return (
    <div className="row">
      <UserSection active="Home" />
      <div className="col-9">
        {console.log(user && user.items)}
        {user && user.wishlist && <CarouselItems title="Recommended" id="R1" />}
        {user && user.wishlist && <CarouselItems title="Wishlist" id="W1" />}
        {/** FIGURE OUT THE WORKAROUND FOR IDs */}
        {(!user || !user.username || user.items) && (
          <CarouselItems title="Best Sellers" id="W1" />
        )}
        {(!user || !user.username || user.items) && (
          <CarouselItems title="Recent Additions" id="R1" />
        )}
        <Outlet />
      </div>
    </div>
  );
};
export default HomePage;
