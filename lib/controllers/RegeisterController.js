const mongoose = require("mongoose");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();

class RegisterController {
  async registerUser(req, res) {
    mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    let passwordText = req.body.password;
    let username = req.body.username;

    if (passwordText.lenght < 6) {
      res.send("Password needs to be atleast six charecters");
    } else {
      const password = await bcrypt.hash(passwordText, 15);

      try {
        const response = await User.create({
          username,
          password,
        });
        res.send(response);
      } catch (err) {
        console.log(err);
        return res.json({ status: "error" });
      }
    }
  }
}

module.exports = new RegisterController();
