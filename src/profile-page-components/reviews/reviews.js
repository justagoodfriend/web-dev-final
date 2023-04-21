import ReviewElementProfile from "./reviewElementProfile";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findReviewsForUserThunk} from "../../ApiClient/thunks/reviewsThunk";
import ReviewElementItem from "./reviewElementItem";

const Reviews = () => {
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const {currentUser} = useSelector(
        state => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser != null) {
            console.log("getting reviews for", currentUser._id);
            dispatch(findReviewsForUserThunk(currentUser._id))
        }}, [])
    return (
        <ul className="list-group custom-padding-left pt-3">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                reviews.map(review =>
                    <ReviewElementProfile key={review._id} review={review}/>
                )
            }
        </ul>
    )
}

export default Reviews;