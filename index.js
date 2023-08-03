import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke";

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    category: "",
    set_up: "Awaiting Response",
    delivery: "Awaiting respons",
  });
});

app.get("/dark", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Dark?type=twopart");
    res.render("index.ejs", {
      category: JSON.stringify(result.data.category),
      set_up: JSON.stringify(result.data.setup),
      delivery: JSON.stringify(result.data.delivery),
    });
  } catch (error) {
    console.error("ERROR 404");
  }
});

app.get("/Programming", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Programming?type=twopart");
    res.render("index.ejs", {
      category: JSON.stringify(result.data.category),
      set_up: JSON.stringify(result.data.setup),
      delivery: JSON.stringify(result.data.delivery),
    });
  } catch (error) {
    console.error("ERROR 404");
  }
});

app.get("/Pun", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Pun?type=twopart");
    res.render("index.ejs", {
      category: JSON.stringify(result.data.category),
      set_up: JSON.stringify(result.data.setup),
      delivery: JSON.stringify(result.data.delivery),
    });
  } catch (error) {
    console.error("ERROR 404");
  }
});

app.get("/Spooky", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Spooky?type=twopart");
    res.render("index.ejs", {
      category: JSON.stringify(result.data.category),
      set_up: JSON.stringify(result.data.setup),
      delivery: JSON.stringify(result.data.delivery),
    });
  } catch (error) {
    console.error("ERROR 404");
  }
});

app.get("/Miscellaneous", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Miscellaneous?type=twopart");
    res.render("index.ejs", {
      category: JSON.stringify(result.data.category),
      set_up: JSON.stringify(result.data.setup),
      delivery: JSON.stringify(result.data.delivery),
    });
  } catch (error) {
    console.error("ERROR 404");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
