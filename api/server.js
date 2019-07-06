const express = require("express");
const cors = require("cors");
const app = express();
const titanicRouter = require("./routes/titanic");

// Constants
const PORT = process.env.PORT || 8080;

// App
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/titanicapi", titanicRouter);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


module.exports = app;
