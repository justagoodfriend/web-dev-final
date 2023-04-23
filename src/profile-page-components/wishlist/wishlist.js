import wishlist from "./wishlist.json";
import WishlistItem from "./wishlistItem";
const Wishlist = ({user = {}}) => {
    return (
        <div className="d-flex flex-wrap custom-padding-left pt-3">
            {
                wishlist.map(item =>
                    <WishlistItem key={item._id} item={item}/>
                )
            }
        </div>
    );
}

export default Wishlist;