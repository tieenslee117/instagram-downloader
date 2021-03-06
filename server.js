//@ts-nocheck

const express = require("express");

const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/controllers"));

const { downloadImage } = require("./controllers/download.js");

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.sendFile("index1.html");
});

app.post("/img", async (req, res) => {
  downloadImage(req, res);
});
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
