import React, { useState, useEffect } from "react";
import ProfileNavLink from "./profileNavLink";
import * as userService from "../../ApiClient/users";

const ProfileNav = ({active = "Reviews"}) => {
    const [user, setUser] = useState(null);
    const currentUser = async () => {
        const user1 = await userService.profile();
        setUser(user1);
    };

    useEffect(() => {
        currentUser();
    }, []);
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