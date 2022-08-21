const { ObjectId } = require("mongodb");
const products_model = require("../model/products_model");
const categories_model = require("../model/categarie_model");

exports.getAllProducts = async (req, res) => {
  const product = await products_model.find();
  res.json(product);
};

exports.createOneProduct = async (req, res) => {
  try {
    const response = await products_model.create(req.body);
    const category = await categories_model.findOne({
      categary: req.body.categary,
    });
    if (category) {
      category.productid.push(response._id);
      category.save();
    } else {
      await categories_model.create({
        productid: response.id,
        categary: response.categary,
      });
    }
    res.status(201).send(`${req.body}\n product is created`);
  } catch (error) {
    res.status(400).send(error.errors);
    error;
  }
};

exports.getOneProduct = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const product = await products_model.findOne({ _id });
  res.json(product);
};
exports.patchOneProduct = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await products_model.updateOne({ _id }, { $set: req.body });
  res.send(`product updated`);
};
exports.deleteOneProduct = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await products_model.deleteOne({ _id });
  res.status(204).send(`product deleted`);
};
