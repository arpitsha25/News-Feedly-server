const mongoose = require("mongoose");
const Newsschema = require("../modals/newsmodal");
const axios = require("axios");
const Dumpnews = async () => {
  //   const url =
  // "https://newsapi.org/v2/everything?q=covid&apiKey=9b2f39ba0b29458e86de13b7301bac16";
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=world&apiKey=9b2f39ba0b29458e86de13b7301bac16"
    );
    const apiData = response.data;
    Object.keys(apiData.articles).map(async (item) => {
      // console.log(apiData.articles[item].author)
      const newData = new Newsschema({
        _id: new mongoose.Types.ObjectId().toHexString(),
        source: {
          name: apiData.articles[item].source.name,
        },
        author: apiData.articles[item].author,
        title: apiData.articles[item].title,
        description: apiData.articles[item].description,
        url: apiData.articles[item].url,
        urlToImage: apiData.articles[item].urlToImage,
        publishedAt: apiData.articles[item].publishedAt,
        content: apiData.articles[item].content,
      });
      await newData.save();
      //   console.log(apiData.articles[item]);
    });
  } catch (error) {
    console.error("Error fetching news from news api:", error);
    // res.status(500).send({ error: "An error occurred while fetching news." });
  }
};
module.exports = { Dumpnews };
