import reviews from "./reviews.json";
import ReviewElement from "./reviewElement";

const Reviews = () => {
    return (
        <ul className="list-group custom-padding-left pt-3">
            {
                reviews.map(review =>
                    <ReviewElement key={review._id} review={review}/>
                )
            }
        </ul>
    )
}

export default Reviews;