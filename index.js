const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { AuthController } = require('./app/controllers/authController');
const { UserController } = require('./app/controllers/userController');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(AuthController);
app.use(UserController);

app.listen(3000);