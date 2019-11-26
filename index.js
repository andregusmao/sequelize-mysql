const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const { AuthController } = require('./src/controllers/authController');
const { UserController } = require('./src/controllers/userController');
const { GraphQLController } = require('./src/controllers/graphqlController');

const { verify } = require('./src/services/authService');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(AuthController);
app.use(UserController);
app.use(
    '/graphql',
    verify,
    GraphQLController
);

app.listen(3000);