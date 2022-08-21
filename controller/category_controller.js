const { ObjectId } = require("mongodb");
const categories_model = require("../model/categarie_model");

exports.getAllCategories = async (req, res) => {
  const categories = await categories_model.find();
  res.json(categories);
};

exports.getOneCategory = async (req , res ) => {
    const _id = ObjectId(req.params.id);
    const category = await categories_model.findOne({ _id });
    res.json(category);
}
