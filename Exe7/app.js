const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 3000
const carList = require("./data/cars.json")

app.use(express.static(path.join(__dirname, "./public")));

app.get("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/contactUs.html"));
});

app.get("/aboutUs", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/aboutUs.html"));
});

app.post("/car:id", (req, res) => {
  let id = req.params.id;

  const car = carList.find((car) => car.id === id);
  if (car) return res.send(car);
  res.status(404).send();
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
