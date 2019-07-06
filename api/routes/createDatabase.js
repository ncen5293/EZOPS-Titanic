const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";

router.get("/", function(req, res, next) {
    res.send(databaseConnection);
});

// Connecting to MongoDB
mongoose.connect("mongodb://mongodb:27017/titanic");

const passengerDb = mongoose.connection;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PassengerSchema = new Schema({
  _id: ObjectId,
  PassengerId: Number,
  Survived: Number,
  Pclass: Number,
  Name: String,
  Sex: String,
  Age: Number,
  SibSp: Number,
  Parch: Number,
  Ticket: String,
  Fare: Number,
  Cabin: String,
  Embarked: String
});

const PassengerModel = mongoose.model('passengers', PassengerSchema);

PassengerModel.findOne({'Survived': 1}, 'Name',
  (err, passenger) => {
    if (err) {
      return handleError(err);
    } else if (passenger) {
      console.log(passenger.Name);
    }
  })

// If there is a connection error send an error message
passengerDb.on("error", error => {
    console.log("Database connection error:", error);
    databaseConnection = "Error connecting to Database";
});

// If connected to MongoDB send a success message
passengerDb.once("open", () => {
    console.log("Connected to Database!");
    databaseConnection = "Connected to Database";
});

module.exports = router;
