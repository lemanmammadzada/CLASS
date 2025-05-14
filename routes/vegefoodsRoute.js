import express from "express";
import {
    deleteVegefoods,
    getVegefoods,
    postVegefoods,
} from "../controllers/vegefoodsController.js";

const router = express.Router()

router
.get("/vegefoods",getVegefoods)
.post("/vegefoods",postVegefoods)
.delete("/vegefoods/:id",deleteVegefoods)

export default router;
