const Author = require('../models/authors.model');


module.exports.getAllAuthors = (request, response) => {
  Author.find()
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json({ message: 'Something went wrong with getAll', error: err }));
}

module.exports.getSingleAuthor = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then(author => response.json(author))
    .catch((err) => response.status(400).json({ message: 'Something went wrong with getSingle', error: err }));
}

module.exports.createAuthor = (request, response) => {
  Author.create(request.body)
    .then(author => response.json(author))
    .catch(err => response.status(400).json({ message: 'Something went wrong with create', error: err }));
}

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate(
    { _id: request.params.id },
    request.body,
    { new: true, runValidators: true }
  )
    .then(updatedAuthor => {
      response.json({ author: updatedAuthor })
    })
    .catch((err) => {
      response.status(400).json({ message: 'Something went wrong with update', error: err })
    });
}

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then(result => {
      response.json({ result: result })
    })
    .catch((err) => {
      response.status(400).json({ message: 'Something went wrong with delete', error: err })
    });
}