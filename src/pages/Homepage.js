import CarouselItems from "../components/carouselitems";
import React from "react";
import UserSection from "../components/userSection";
import { Outlet } from "react-router";

//renders the initial homepage:, somethings up with the CSS styling and I have no idea what it is...
//for some reason, everythingn is still in block and the other attributes, including the cascade no longer work which is nice.
const HomePage = () => {
    return (
        <div className="row">
            <UserSection active="Home" />
            <div className="col-9">
                <CarouselItems title="Recommended" id="R1" queryTitle="Women"/>
                {/*<CarouselItems title="Wishlist" id="W1" />*/}
                <Outlet />
            </div>
        </div>
    );
};
export default HomePage;
