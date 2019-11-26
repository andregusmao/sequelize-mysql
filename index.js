const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { AuthController } = require('./app/controllers/authController');
const { UserController } = require('./app/controllers/userController');

const AuthService = require('./app/services/authService');

const ExpressGraphQL = require('./app/graphql/ExpressGraphQL');

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