import * as dao from "./reviews-dao.js";
const userController = (app) => {

    const createReview = async (req, res) => {
        console.log("creating review");
        const newReview = await dao.createReview(req.body);
        res.json(newReview);
    }

    // const getReviewByBuyerId = async (req, res) => {
    //     console.log("getting buyer reviews");
    //     const reviews = await dao.findReviewsByBuyerId(req.params.bid);
    //     res.json(reviews);
    // }
    //
    // const getReviewsByItemId = async (req, res) => {
    //     console.log("getting item reviews");
    //     const reviews = await dao.findReviewsByItemId(req.params.iid);
    //     res.json(reviews);
    // }

    const getReviews = async (req, res) => {
        console.log("getting reviews");
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    }

    const updateReview = async (req, res) => {
        console.log("updating review", req.body);
        const status = await dao.updateReview(req.params.rid, req.body);
        res.json(status);
    }

    const deleteReview = async (req, res) => {
        console.log("deleting review");
        const status = await dao.deleteReview(req.params.rid);
        res.json(status);
    }

    app.get("/api/reviews", getReviews);
    // app.get("/api/reviews/:iid", getReviewsByItemId);
    app.post("/api/reviews/create", createReview);
    app.put("/api/reviews/update/:rid", updateReview);
    app.delete("/api/reviews/delete/:rid", deleteReview);
};

export default userController;
