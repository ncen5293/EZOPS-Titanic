const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

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

const PassengerModel = mongoose.model('passenger', PassengerSchema);

// PassengerModel.find({},
//   (err, passengers) => {
//     if (err) {
//       return handleError(err);
//     }
//     passengers.forEach((passenger) => {
//       console.log(passenger.Survived);
//     })
//
//   })

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";

router.get("/", (req, res, next) => {
    res.send(databaseConnection);
});

router.get("/getAllPassengers", (req, res, next) => {
  PassengerModel.find({},
    (err, passengers) => {
      if (err) {
        return handleError(err);
      }
      // passengers.forEach((passenger) => {
      //   console.log(passenger.Survived);
      // })
      res.send(passengers);
  })
});

router.post("/createNewPassenger", (req, res) => {
  console.log(req.body);
  let newPassenger = req.body;
  let personExists = false;
  PassengerModel.findOne({'Name': newPassenger.Name},
    (err, passenger) => {
      if (err) {
        return handleError(err);
      }
      if (!passenger) {
        newPassenger._id = mongoose.Types.ObjectId();;
        let newPassengerModel = new PassengerModel(newPassenger);
        newPassengerModel.save((err) => {
          if (err) {
            return handleError(err);
          }
        })
        res.status(201).json({ error: null, personExists });
      } else {
        personExists = true;
        res.status(201).json({ error: null, personExists });
      }
  });
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
