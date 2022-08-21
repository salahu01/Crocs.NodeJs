const { ObjectId } = require("mongodb");
const cart_model = require("../model/cart_model");

exports.getOneCategory = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const cart = await cart_model.findOne({ _id });

  res.json(cart);
};

exports.addOne = async (req, res) => {
  const _id = ObjectId(req.params.id);
  try {
    const cart = await cart_model.findOne({ _id });
    const data = {
      productId: req.body.productId,
      productQuantity: req.body.productQuantity,
      _id: req.body.productId,
    };
    if (cart) {
      cart.products.push(data);
      cart.save();
    } else {
      console.log(req.body.productId);
      await cart_model.create({
        products: data,
        _id: _id,
      });
      console.log(_id);
    }
    res.status(201).send(`${req.body}\n product is added`);
  } catch (error) {
    res.status(400).send(error.errors);
    error;
  }
};