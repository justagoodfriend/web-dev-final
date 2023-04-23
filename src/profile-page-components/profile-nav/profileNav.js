import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileNavLink from "./profileNavLink";
import {useParams} from "react-router";

const ProfileNav = ({
        active = "Reviews",
        userId = null}) => {
    userId = useParams().uid;
    const user = useSelector((state) => state.users.currentUser);
    return (
        <nav className="nav justify-content-between custom-padding-extra me-5">
            {
                user && user.wishlist && <>
                  <ProfileNavLink active={active} href={"/profile/" + userId} title="Reviews"/>
                  <ProfileNavLink active={active} href={"/profile/" + userId + "/wishlist"} title="Wishlist"/>
                </>
            }
            {
              // Need to do HTTP get reqs for profie/id/items
                user && user.items && <>
                    <ProfileNavLink active={active} href="/profile/" + userID + "/items" title="Items"/>
                    <ProfileNavLink active={active} href="/profile/" + userID + "/transactions" title="Transactions"/>
                </>
            }

            <ProfileNavLink active={active} href="/profile/settings" title="Settings"/>
        </nav>
    );
}

export default ProfileNav;