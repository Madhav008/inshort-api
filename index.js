const express = require("express");
const { text } = require("body-parser");
const scrapper = require("./scrapper");
require("dotenv").config();

const app = express();

const url = "https://inshorts.com/en/read/";
app.get("/Q4WXV7CoRNDkcVse52FT", async function (req, res) {

   result =await scrapper.main(url);

    await res.send(result);
});
app.get("/Q4WXV7CoRNDkcVse52FT/:title", async function (req, res) {

  result =await scrapper.main(url+req.params.title);

   await res.send(result);
});




app.listen(process.env.PORT || 4000, function () {
  console.log("Server Started .....");
});
