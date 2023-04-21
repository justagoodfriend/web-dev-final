import CarouselItems from "../components/carouselitems";
import React, { useState, useEffect } from "react";
import UserSection from "../components/userSection";
import { Outlet } from "react-router";
import * as userService from "../ApiClient/users.js";

//renders the initial homepage:, somethings up with the CSS styling and I have no idea what it is...
//for some reason, everythingn is still in block and the other attributes, including the cascade no longer work which is nice.
const HomePage = () => {
    const [user, setUser] = useState(null);
    const currentUser = async () => {
        const user1 = await userService.profile();
        setUser(user1);
    };

    useEffect(() => {
        currentUser();
    }, []);
    return (
        <div className="row">
            <UserSection active="Home" />
            <div className="col-9">
                {console.log(user)}
                {user && user.reviews && <CarouselItems title="Recommended" id="R1" />}
                {user && user.reviews && <CarouselItems title="Wishlist" id="W1" />}
                {user && user.items && <CarouselItems title="Popular Items" id="P1"/>}
                {user && user.items && <CarouselItems title="Recent Additions" id="R2"/>}
                <Outlet />
            </div>
        </div>
    );
};
export default HomePage;
