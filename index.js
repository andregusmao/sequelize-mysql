const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { AuthController } = require('./src/controllers/authController');
const { UserController } = require('./src/controllers/userController');

const AuthService = require('./src/services/authService');

const ExpressGraphQL = require('./src/graphql/ExpressGraphQL');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(AuthController);
app.use(UserController);
app.use(
    '/graphql',
    AuthService.verify,
    ExpressGraphQL
);

app.listen(3000);