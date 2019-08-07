import AppError from '../errors/AppError';
import mysql from "mysql";

const logger = require('../utils/logger')('homeController');

const indexAction = async (req, res, next) => {
  logger.log('info', `healthCheck: ${JSON.stringify(req.params)}`);
  try {
    res.send("<h1> Welcome to the landing page! </h1>");
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

export default indexAction;
