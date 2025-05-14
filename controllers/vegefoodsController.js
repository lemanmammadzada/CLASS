import vegefoodsModel from "../models/vegefoodsModel.js";

const getVegefoods = async (req, res) => {
    const vegefoods = await vegefoodsModel.find();
    res.json(vegefoods);
};

const postVegefoods = async (req, res) => {
    const { productname, price, image } = req.body;
    const vegefoods = { productname, price, image };
    await vegefoodsModel.create(vegefoods);
    res.json(vegefoods);
};

const deleteVegefoods = async (req, res) => {
    const { id } = req.params;
    await vegefoodsModel.findByIdAndDelete(id);
    res.json(`${id} has been deleted`);
};

export { getVegefoods, postVegefoods, deleteVegefoods };
