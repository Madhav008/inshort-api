const express = require("express");
const { text } = require("body-parser");
const scrapper = require("./scrapper");
require("dotenv").config();

const app = express();

const url = "https://inshorts.com/en/read/";
app.get("/", async function (req, res) {

   result =await scrapper.main(url);

    await res.send(result);
});
app.get("/:title", async function (req, res) {

  results =await scrapper.main(url+req.params.title);

   await res.send(results);
});




app.listen(process.env.PORT || 4000, function () {
  console.log("Server Started .....");
});
