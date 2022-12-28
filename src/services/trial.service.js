const { ObjectId } = require("mongoose").Types;
require("express-async-errors");
const trialModel = require("./../models/trial.model");

const createTrial = async ({ trial }) => {
  const createdTrial = await trialModel.create({
    trial,
  });

  return createdTrial;
};

const getAllTrial = async () => {
  const getAllTrial = await trialModel.find();

  return getAllTrial;
};

const getTrial = async ({ id }) => {
  const getAllTrial = await trialModel.findById(id);

  return getAllTrial;
};

const updateTrial = async ({ id, body }) => {
  const updatedTrial = await trialModel.findByIdAndUpdate(id, body, {
    new: true,
  });

  return updatedTrial;
};

const deleteTrial = async ({ id, body }) => {
  await trialModel.findByIdAndDelete(id);
};

module.exports = {
  createTrial,
  getAllTrial,
  getTrial,
  updateTrial,
  deleteTrial,
};
