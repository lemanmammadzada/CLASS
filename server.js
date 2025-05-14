import express from "express";
import cors from "cors";
import { connectDB } from "./config/config.js";
import vegefoodsRoute from "./routes/vegefoodsRoute.js";

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors("*"));

app.use("/", vegefoodsRoute);
connectDB();
app.listen(3200, () => {
    console.log("Server is running on port 3200");
});