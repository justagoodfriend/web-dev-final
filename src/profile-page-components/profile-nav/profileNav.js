import { useSelector } from "react-redux";
import ProfileNavLink from "./profileNavLink";
import {useParams} from "react-router";
import { useContext } from "react";
import { UserContext } from "../../redux/userContextTest";
const ProfileNav = ({
        active = "Reviews",
        }) => {
    const userId = useParams().uid;
    const user = useSelector((state) => state.users.currentTarget);
    const source= JSON.parse(useContext(UserContext).user);
    
    return (
        <nav className="nav justify-content-around custom-padding-extra me-5">
            {
                <>
                  <ProfileNavLink active={active} href={"/profile/" + userId } title="Reviews"/>
                </>
            }
            { user.wishlist && 
                <ProfileNavLink active={active} href={"/profile/" + userId + "/wishlist"} title="Wishlist"/>
            }
            {
              // Need to do HTTP get reqs for profie/id/items
                user.items && <>
                    <ProfileNavLink active={active} href={"/profile/" + userId + "/items"} title="Items"/>
                </>
            }
            { (user.username == source.username) && 
            <ProfileNavLink active={active} href={"/profile/"+ userId +"/settings"} title="Settings"/>
            }
        </nav>
    );
}

export default ProfileNav;
