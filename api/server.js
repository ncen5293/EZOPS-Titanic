const express = require("express");

const app = express();
const passengerListRouter = require("./routes/createDatabase");

// Constants
const PORT = process.env.PORT || 8080;

// App

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/passengerList", passengerListRouter);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


module.exports = app;
