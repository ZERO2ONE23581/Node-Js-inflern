const mongoose = require(`mongoose`);
const bcrypt = require("bcrypt");
const saltRounds = 10; //10번 해싱

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //space 없애주는 역할
    // unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  //관리자 역할
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //토큰을 사용할수 있는 기간을 주는것
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
