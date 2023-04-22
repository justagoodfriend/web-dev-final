import ReviewElement from "./reviewElement";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  findReviewsForItemThunk,
  findReviewsThunk,
} from "../../ApiClient/reviewsThunk";

const Reviews = ({ itemId = "" }) => {
  const { reviews, loading } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsThunk());
  }, [dispatch]);
  const currentUser = useSelector((state) => state.users.currentUser);
  return (
    <ul className="list-group custom-padding-left pt-3">
      {loading && <li className="list-group-item">Loading...</li>}
      {currentUser ? (
        reviews.map((review) => (
          <ReviewElement key={review._id} review={review} />
        ))
      ) : (
        <h1>Log in to View Content</h1>
      )}
    </ul>
  );
};

export default Reviews;
