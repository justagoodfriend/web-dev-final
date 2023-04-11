import Reviews from "./reviews/reviews";
import Wishlist from "./wishlist/wishlist";
import Settings from "./settings/settings";

const ProfileElement = ({active = "Reviews"}) => {
    if (active === "Reviews") {
        return (<Reviews/>);
    } else if (active === "Wishlist") {
        return (<Wishlist/>);
    } else {
        return (<Settings/>);
    }
}


export default ProfileElement;