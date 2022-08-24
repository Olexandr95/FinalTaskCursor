const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const appPort = 4004;
const mongoURL = "mongodb+srv://admin:12345@cluster0.ko93ht4.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
}

// Model 
const UsersSchema = new mongoose.Schema(
    {
        id: String,
        inputName: String,
        inputNickName: String,
        inputPhoto: String,
        date: String
    }
)
const NewsSchema = new mongoose.Schema({
    date: String,
    id: String,
    title: String,
    text: String,
    imageUrl: String,
});

mongoose.model("Users", UsersSchema);
mongoose.model("News", NewsSchema);

const Users = mongoose.model("Users");
const News = mongoose.model("News");


//Contoller

const getAllUsers = (req, res) =>{
    Users.find()
    .exec()
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err))
}

const createUser = (req, res) => {
    Users.create(req.body)
        .then(createUsers => res.json(createUsers))
        .catch((err) => res.status(500).json(err));
}

const updateUsers = (req, res) => {
    Users.updateOne({ _id: req.params.id }, { $set: req.body })
        .exec()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
};

const remoweUsers = (req, res) => {
    Users.deletoOne({ _id: req.params.id })
        .exec()
        .then(() => res.json({success : true}))
        .catch((err) => res.status(500).json(err));
};

// Routes

app.get('/users', cors(corsOptions), getAllUsers);
app.post('/users', cors(corsOptions), createUser);
app.put('/users/:id', cors(corsOptions), updateUsers);
app.delete('/users/:id', cors(corsOptions), remoweUsers);

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(
        appPort,
        () => console.log(`Listening on port ${ appPort } ...`)
    ))
    .catch(err => console.error(`Error connecting to mongo: ${ mongoURL }`, err))