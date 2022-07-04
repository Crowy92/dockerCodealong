const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get('/', (req, res) => res.json({"greeting": "Hello there"}))

module.exports = app;