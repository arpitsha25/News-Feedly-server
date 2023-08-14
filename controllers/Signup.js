const User = require("../modals/usermodal");
const mongoose = require("mongoose");

const Signup = (req, res) => {
  let exist;
  async function check() {
    exist = await User.findOne({ email: req.body.email });
    if (exist) {
      res.status(409).send({ msg: "user already exists" });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId().toHexString(),
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
      });
      try {
        user.save();
        res.status(200).send({ msg: "success", data: user });
      } catch (error) {
        response.status(500).send(error);
      }
    }
  }
  check();
};
module.exports = { Signup };
