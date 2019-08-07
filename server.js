import express from 'express';
import bodyParser from 'body-parser';
import './utils/dotenv';
import healthCheck from './routes/healthCheck';
import homeRoute from './routes/homeRoute';
import categoryRoute from './routes/categoryRoute';
import commentRoute from './routes/commentRoute';
import manufacturerRoute from './routes/manufacturerRoute';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import defaultErrorHandler from './middlewares/defaultErrorHandler';
import mysql from 'mysql';
const connection = mysql.createConnection(
{
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
try{
  connection.connect();
} catch (err){
  // eslint-disable-next-line no-console
  console.log(err);
}

const logger = require('./utils/logger')(process.env.APP_NAME);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api/v${process.env.API_VERSION}`, healthCheck);
app.use('/', homeRoute);
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/', manufacturerRoute);
app.use('/', productRoute);
app.use('/', commentRoute);

app.use(defaultErrorHandler);

app.listen(process.env.APP_PORT, 'localhost', () => {
  logger.log(
    'info',
    `App is running at http://localhost:${process.env.APP_PORT} in ${app.get('env')} mode.`,
  );
});

module.exports = app;
