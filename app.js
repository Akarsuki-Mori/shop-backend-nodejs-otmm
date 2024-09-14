const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentsRoute = require('./routes/student')
const productsRoute = require('./routes/product')

const app = express();
const port = 8282;

app.use(bodyParser.json());
app.use(cors());

app.use('/students', studentsRoute);
app.use('/products', productsRoute);

app.listen(port, () => {
    console.log("Server listening on " + port);
})