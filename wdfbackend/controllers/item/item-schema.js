import mongoose from "mongoose";

const AvailableSizes = {
    SMALL: "Small",
    MEDIUM: "Medium",
    LARGE: "Large"
}

const Gender = {
    MEN: "Men",
    WOMEN: "Women",
    KIDS: "Kids"
}

const itemSchema = mongoose.Schema(
    {
        sellerId: { type: Number, required: true },
        title: String,
        price: Number,
        description: String,
        availableSizes: [AvailableSizes],
        gender: Gender,
        image: String,
    },
    { collection: "Items" }
);
export default itemSchema;