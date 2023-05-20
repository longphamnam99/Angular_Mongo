const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router =  require('./routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', router)

app.use('/static', express.static(path.join(__dirname, 'public')))

const port = 3000;

app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});
