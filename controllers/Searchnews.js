// const mongoose = require("mongoose");
const Newsschema = require("../modals/newsmodal");
const Searchnews = (req, res) => {
  // const token = req.header('Authorization');
  // console.log(token)
  const item = req.body.searchitem;
  let searched;
  async function search() {
    searched = await Newsschema.find({
      title: { $regex: item, $options: "i" }, // Case-insensitive search
    });
    if (searched) {
      res.status(200).send({ msg: "success", data: searched });
    } else {
      res.status(404).send({ msg: "No news found" });
    }
  }
  search();
};
module.exports = { Searchnews };
