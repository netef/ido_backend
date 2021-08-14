const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
