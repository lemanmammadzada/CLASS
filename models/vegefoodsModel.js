import mongoose from "mongoose";
const vegefoodsSchema = mongoose.Schema(
    {
        productname: { type:String, required:true },
        price: { type: String, required: true },
        image: { type: String, required: true},
    },
    { timestamps: true }
);

const vegefoodsModel = mongoose.model("vegefoods", vegefoodsSchema);

export default vegefoodsModel;