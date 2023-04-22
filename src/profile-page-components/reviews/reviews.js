import ReviewElementProfile from "./reviewElementProfile";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findReviewsForUserThunk} from "../../ApiClient/thunks/reviewsThunk";
import ReviewElementItem from "./reviewElementItem";
import {useParams} from "react-router";

const Reviews = ({
    userId = null
                 }) => {
    const {reviews, loading} = useSelector(
        state => state.reviews)
    userId = useParams().uid;
    const dispatch = useDispatch();
    useEffect(() => {
        if (userId != null) {
            console.log("getting reviews");
            dispatch(findReviewsForUserThunk(userId))
        }}, [])
    console.log(userId);
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