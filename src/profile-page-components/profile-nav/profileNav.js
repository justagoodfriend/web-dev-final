import { useSelector } from "react-redux";
import ProfileNavLink from "./profileNavLink";
import {useParams} from "react-router";

const ProfileNav = ({
        active = "Reviews",
        }) => {
    const userId = useParams().uid;
    const user = useSelector((state) => state.users.currentTarget);
    console.log(user);
    return (
        <nav className="nav justify-content-between custom-padding-extra me-5">
            {
                user.wishlist && <>
                  <ProfileNavLink active={active} href={"/profile/" + userId } title="Reviews"/>
                  <ProfileNavLink active={active} href={"/profile/" + userId + "/wishlist"} title="Wishlist"/>
                </>
            }
            {
              // Need to do HTTP get reqs for profie/id/items
                user.items && <>
                    <ProfileNavLink active={active} href={"/profile/" + userId + "/items"} title="Items"/>
                    <ProfileNavLink active={active} href={"/profile/" + userId + "/transactions"} title="Transactions"/>
                </>
            }

            <ProfileNavLink active={active} href="/profile/settings" title="Settings"/>
        </nav>
    );
}

export default ProfileNav;