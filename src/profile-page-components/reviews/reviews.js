import ReviewElement from "./reviewElement";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import {findReviewsForUserThunk} from "../../ApiClient/thunks/reviewsThunk";
import {useParams} from "react-router";
import {UserContext} from "../../redux/userContextTest";

const Reviews = ({
    userId = null
                 }) => {
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const { user } = useContext(UserContext);
    // console.log(user);
    const currentUser = JSON.parse(user);
    const temp = useParams().uid;
    if (temp) {
        userId = temp;
    } else {
        userId = currentUser._id;
    }
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
                    <ReviewElement key={review._id} review={review} elementType="profile"/>
                )
            }
        </ul>
    )
}

export default Reviews;