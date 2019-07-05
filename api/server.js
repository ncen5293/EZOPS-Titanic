const express = require("express");
const helmet = require("helmet");
const app = express();
const testDBRouter = require("./routes/testDB");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/testDB", testDBRouter);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;
