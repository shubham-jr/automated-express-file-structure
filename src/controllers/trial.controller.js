const httpStatus = require("http-status");
const validateSchema = require("../middlewares/validate.js");
const ApiError = require("./../utils/ApiError");
require("express-async-errors");

const trialValidation = require("../validations/trial.validation");

const trialService = require("../services/trial.service");

const createTrial = async (req, res, next) => {
  validateSchema(req, trialValidation.createTrial);

  const { trial } = req.body;

  const createdTrial = await trialService.createTrial({
    trial,
  });
  res.status(httpStatus.CREATED).send({ createdTrial });
};

const getAllTrial = async (req, res, next) => {
  const getAllTrial = await trialService.getAllTrial();

  res
    .status(httpStatus.CREATED)
    .send({ totalTrial: getAllTrial.length, getAllTrial });
};

const getTrial = async (req, res, next) => {
  const id = req.params.id;

  const getTrial = await trialService.getTrial({ id });

  res.status(httpStatus.CREATED).send({ getTrial });
};

const updateTrial = async (req, res, next) => {
  // validateSchema(req, trialValidation.updateTrial);

  const id = req.params.id;

  const updatedTrial = await trialService.updateTrial({ id, body: req.body });

  res.status(httpStatus.CREATED).send({ updatedTrial });
};

const deleteTrial = async (req, res, next) => {
  const id = req.params.id;

  await trialService.deleteTrial({ id });

  res.status(httpStatus.CREATED).send({});
};

module.exports = {
  createTrial,
  getAllTrial,
  updateTrial,
  getTrial,
  deleteTrial,
};
