const User = require("../modals/usermodal");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { jwtsecretkey } = require("../cred");
const Login = (req, res) => {
  let chk;
  async function exist() {
    chk = await User.findOne({ email: req.body.email });
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      chk.password
    );

    if (isPasswordValid) {
      const jwttoken = jwt.sign({ email: req.body.email }, jwtsecretkey, { expiresIn: '1h' });
      res.status(200).send({ msg: "success" ,token : jwttoken});
    } else {
      res.status(404).send({ msg: "check credentials" });
    }
  }
  exist();
};

module.exports = { Login };
