import UserSection from "../components/userSection";
import CarouselItems from "../components/carouselitems";
import React from "react";

//renders the initial homepage:, somethings up with the CSS styling and I have no idea what it is...
//for some reason, everythingn is still in block and the other attributes, including the cascade no longer work which is nice.
const HomePage = () => {
  return (
    <div className="row">
        <img
            src="../images/profile-empty.jpeg"
            alt=""
            className="profile-pic rounded mb-2"
        />
      <div className="col-3 pt-3 ps-4 bg-purple">
        <UserSection />
      </div>
      <div className="col-9">
        <CarouselItems title="Recommended" id="ExamplesCarousel1" />
        <CarouselItems title="Wishlist" id="ExamplesCarousel2" />
      </div>
    </div>
  );
};
export default HomePage;
