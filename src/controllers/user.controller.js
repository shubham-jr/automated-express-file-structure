const httpStatus = require('http-status');
const validateSchema = require("../middlewares/validate.js");
const ApiError = require('./../utils/ApiError');
require('express-async-errors');

const userValidation = require('../validations/user.validation');

const userService = require('../services/user.service');

const createUser = async (req, res, next) => {

  validateSchema(req, userValidation.createUser);

  const {} = req.body;

  const createdUser = await userService.createUser({
   
  });
  res.status(httpStatus.CREATED).send({ createdUser });
};

const getAllUser = async (req, res, next) => {

  const getAllUser = await userService.getAllUser();

  res.status(httpStatus.CREATED).send({ totalUser: getAllUser.length, getAllUser });
};

const getUser = async (req, res, next) => {

  const id = req.params.id;

  const getUser = await userService.getUser({ id });

  res.status(httpStatus.CREATED).send({ getUser });
};

const updateUser = async (req, res, next) => {

  // validateSchema(req, userValidation.updateUser);

  const id = req.params.id;

  const updatedUser = await userService.updateUser({ id, body:req.body });

  res.status(httpStatus.CREATED).send({ updatedUser });
};

const deleteUser = async (req, res, next) => {

  const id = req.params.id;

  await userService.deleteUser({ id });

  res.status(httpStatus.CREATED).send({ });
};



module.exports = { createUser, getAllUser, updateUser, getUser,deleteUser };