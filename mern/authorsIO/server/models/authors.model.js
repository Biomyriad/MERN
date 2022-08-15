const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide an authors name!"],
    minLength: [3, "Name must be at least 3 letters long!"],
    
    validate: {
      isAsync: true,
      validator: async function (v) {
        return await validateName(v);
      },
      message: "Name already used."
    }

  },
}, { timestamps: true });

var  validateName = async function (name) {
  var valid = true;
  await AuthorModel.exists({ name: name })
  .then(authorId => authorId ? valid = false : valid = true)
  .catch(valid = false);
  return valid;
};

const AuthorModel = mongoose.model('Authors', AuthorSchema);

module.exports = AuthorModel;
