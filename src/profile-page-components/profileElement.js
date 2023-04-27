import Reviews from "./reviews/reviews";
import Wishlist from "./wishlist/wishlist";
import Settings from "./settings/settings";

const ProfileElement = ({
        active = "Reviews",
        userId = null}) => {
    if (active === "Reviews") {
        return (<Reviews user={userId}/>);
    } else if (active === "Wishlist") {
        return (<Wishlist user={userId}/>);
    } else if (active === "Items") {
        return (<Wishlist user={userId}/>);
    } 
    else {
        return (<Settings user={userId}/>);
    }
}


export default ProfileElement;