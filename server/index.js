const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const appPort = 4004;
const mongoURL =
  "mongodb+srv://admin:12345@cluster0.ko93ht4.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// Model
const UsersSchema = new mongoose.Schema({
  id: String,
  inputName: String,
  inputNickName: String,
  inputPhoto: String,
  date: String,
});
const NewsSchema = new mongoose.Schema({
  id: String,
  autName: String,
  title: String,
  content: String,
  image: String,
  date: String,
});

mongoose.model("Users", UsersSchema);
mongoose.model("News", NewsSchema);

const Users = mongoose.model("Users");
const News = mongoose.model("News");

//Contoller

//Users
const getAllUsers = (req, res) => {
  Users.find()
    .exec()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
  Users.create(req.body)
    .then((createUsers) => res.json(createUsers))
    .catch((err) => res.status(500).json(err));
};

const updateUsers = (req, res) => {
  Users.updateOne({ _id: req.params.id }, { $set: req.body })
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const remoweUsers = (req, res) => {
  Users.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(505).json(err));
};

//News
const getAllNews = (req, res) => {
  News.find()
    .exec()
    .then((News) => res.json(News))
    .catch((err) => res.status(500).json(err));
};

const createNew = (req, res) => {
  News.create(req.body)
    .then((createNews) => res.json(createNews))
    .catch((err) => res.status(500).json(err));
};

const updateNews = (req, res) => {
  News.updateOne({ _id: req.params.id }, { $set: req.body })
    .exec()
    .then((news) => res.json(news))
    .catch((err) => res.status(500).json(err));
};

const remoweNews = (req, res) => {
  News.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

// Routes

//Users
app.get("/users", cors(corsOptions), getAllUsers);
app.post("/users", cors(corsOptions), createUser);
app.put("/users/:id", cors(corsOptions), updateUsers);
app.delete("/users/:id", cors(corsOptions), remoweUsers);

//News
app.get("/news", cors(corsOptions), getAllNews);
app.post("/news", cors(corsOptions), createNew);
app.put("/news/:id", cors(corsOptions), updateNews);
app.delete("/news/:id", cors(corsOptions), remoweNews);

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(appPort, () => console.log(`Listening on port ${appPort} ...`))
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoURL}`, err));
