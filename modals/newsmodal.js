const momgoose = require("mongoose");

const { default: mongoose } = require("mongoose");

const newsschema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    source: {
      // id: { type: String, required: true },
      name: { type: String, required: true },
    },
    author: {
      type: String
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    urlToImage: {
      type: String,
    },
    publishedAt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { collection: "news", database: "NewsFeedly" }
);
module.exports = mongoose.model("Newsschema", newsschema);
