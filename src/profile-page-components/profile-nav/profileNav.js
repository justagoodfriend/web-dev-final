import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileNavLink from "./profileNavLink";

const ProfileNav = ({active = "Reviews"}) => {
    const user = useSelector((state) => state.users.currentUser);
    return (
        <nav className="nav justify-content-between custom-padding-extra me-5">
            {
                user && user.wishlist && <>
                    <ProfileNavLink active={active} href="/profile" title="Reviews"/>
                    <ProfileNavLink active={active} href="/profile/wishlist" title="Wishlist"/>
                </>
            }
            {
                user && user.items && <>
                     <ProfileNavLink active={active} href="/profile/items" title="Items"/>
                    <ProfileNavLink active={active} href="/profile/transactions" title="Transactions"/>
                </>
            }

            <ProfileNavLink active={active} href="/profile/settings" title="Settings"/>
        </nav>
    );
}

export default ProfileNav;