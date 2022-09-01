const { ObjectId } = require("mongodb");
const favourite_model = require("../model/favourite_model");

exports.getOne = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const favourite = await favourite_model.findOne({ _id });

  res.json(favourite);
};

exports.addOne = async (req, res) => {
  const _id = ObjectId(req.params.id);1280
  try {
    const favourite = await favourite_model.findOne({ _id });
    if (favourite) {
      favourite.productIds.push(req.body.productId);
      favourite.save();
    } else {
      await favourite_model.create({
        productIds: req.body.productId,
        _id: _id,
      });
    }
    res.status(201).send(`${req.body}\n product is added`);
  } catch (error) {
    res.status(400).send(error.errors);
    error;
  }
};
