const User = require("../modals/usermodal");
const mongoose = require("mongoose");
const Login = (req, res) => {
  let chk;
  async function exist() {
    chk = await User.findOne({ email: req.body.email });
    if (chk && chk.password == req.body.password) {
      res.status(200).send({ msg: "success" });
    } else {
      res.status(404).send({ msg: "check credentials" });
    }
  }
  exist();
};
 
module.exports = { Login };
