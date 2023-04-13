import React from "react";
import ProfileNavLink from "./profileNavLink";


const ProfileNav = ({active = "Reviews"}) => {
    return (
        <nav className="nav justify-content-between custom-padding-extra me-5">
            <ProfileNavLink active={active} href="/profile" title="Reviews"/>
            <ProfileNavLink active={active} href="/profile/wishlist" title="Wishlist"/>
            <ProfileNavLink active={active} href="/profile/settings" title="Settings"/>
        </nav>
    );
}

export default ProfileNav;