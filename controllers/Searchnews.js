// const mongoose = require("mongoose");

const Searchnews = (req, res) => {
  const item = req.body.searchitem;
  let searched;
  async function search() {
    searched = await User.findOne({ email: req.body.email });
    if (searched) {
      res.status(200).send({ msg: "success" });
    } else {
      res.status(404).send({ msg: "No news found" });
    }
  }
  search();
};
module.exports = { Searchnews };
