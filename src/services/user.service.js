const { ObjectId } = require('mongoose').Types;
require('express-async-errors');
const userModel = require('./../models/user.model');

const createUser = async ({ }) => {
  const createdUser = await userModel.create({
   
  });

  return createdUser;
};

const getAllUser = async () => {
  const getAllUser = await userModel.find();

  return getAllUser;
};

const getUser = async ({ id }) => {
  const getAllUser = await userModel.findById(id);

  return getAllUser;
};

const updateUser = async ({ id,body}) => {
  const updatedUser = await userModel.findByIdAndUpdate(
    id,
    body,
    { new: true }
  );

  return updatedUser;
};

const deleteUser = async ({ id,body}) => {
  await userModel.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser
};
