const Product = require('../models/product.model');


module.exports.getAllProducts = (request, response) => {
  Product.find()
    .then((product) => response.json(product))
    .catch((err) => response.json({ message: 'Something went wrong', error: err }));
}

module.exports.getSingleProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then(product => response.json(product))
    .catch((err) => response.json({ message: 'Something went wrong', error: err }));
}

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then(product => response.json(product))
    .catch(err => response.json(err));
}