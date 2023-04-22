import React from "react";
import ProfileNavLink from "./profileNavLink";
import {useParams} from "react-router";


const ProfileNav = ({
        active = "Reviews",
        userId = null}) => {
    userId = useParams().uid;
    return (
        <nav className="nav justify-content-between custom-padding-extra me-5">
            <ProfileNavLink active={active} href={"/profile/" + userId} title="Reviews"/>
            <ProfileNavLink active={active} href={"/profile/" + userId + "/wishlist"} title="Wishlist"/>
            <ProfileNavLink active={active} href={"/profile/" + userId + "/settings"} title="Settings"/>
        </nav>
    );
}

export default ProfileNav;