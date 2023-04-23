import * as dao from "./reviews-dao.js";
const userController = (app) => {

    const createReview = async (req, res) => {
        console.log("creating review");
        const review = req.body.review
        const currentUser = req.session['currentUser'];
        review.author = currentUser._id;
        console.log(review)
        const newReview = await dao.createReview(review);
        res.json(newReview);
    }

    const getReviewsByUserId = async (req, res) => {
        console.log("getting user reviews for", req.params.uid);
        const reviews = await dao.findReviewsByUserId(req.params.uid);
        res.json(reviews);
    }

    const getReviewsByItemId = async (req, res) => {
        console.log("getting item reviews for", req.params.iid);
        const reviews = await dao.findReviewsByItemId(req.params.iid);
        res.json(reviews);
    }

    const getReviews = async (req, res) => {
        console.log("getting reviews");
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    }

    const updateReview = async (req, res) => {
        console.log("updating review", req.body.review);
        console.log("review id", req.params.rid);
        const status = await dao.updateReview(req.params.rid, req.body.review);
        res.json(status);
    }

    const deleteReview = async (req, res) => {
        console.log("deleting review");
        const status = await dao.deleteReview(req.params.rid);
        res.json(status);
    }

    app.get("/api/reviews", getReviews);
    app.get("/api/reviews/item/:iid", getReviewsByItemId);
    app.get("/api/reviews/user/:uid", getReviewsByUserId);
    app.post("/api/reviews/create", createReview);
    app.put("/api/reviews/update/:rid", updateReview);
    app.delete("/api/reviews/delete/:rid", deleteReview);
};

export default userController;
