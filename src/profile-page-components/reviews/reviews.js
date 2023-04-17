import ReviewElement from "./reviewElement";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findReviewsForItemThunk, findReviewsThunk} from "../../ApiClient/reviewsThunk";

const Reviews = ({
    itemId=""
                 }) => {
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk())}, [dispatch])
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
                    <ReviewElement key={review._id} review={review}/>
                )
            }
        </ul>
    )
}

export default Reviews;