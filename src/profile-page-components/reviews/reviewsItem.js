import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findReviewsForItemThunk} from "../../ApiClient/thunks/reviewsThunk";
import ReviewElementItem from "./reviewElementItem";

const ReviewsItem = ({
    itemId=""
                     }) => {
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsForItemThunk(itemId))}, [])
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
                    <ReviewElementItem key={review._id} review={review}/>
                )
            }
        </ul>
    )
}

export default ReviewsItem;