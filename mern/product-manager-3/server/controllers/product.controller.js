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

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate(
    { _id: request.params.id },
    request.body,
    { new: true, runValidators: true }
  )
    .then(updatedProduct => {
      response.json({ product: updatedProduct })
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then(result => {
      response.json({ result: result })
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err })
    });
}