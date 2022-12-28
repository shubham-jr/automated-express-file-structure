const mongoose = require('mongoose');

const toJSON = require('../utils/toJSON');

const { ObjectId } = mongoose.Types;

const trialSchema = mongoose.Schema(
  {

    trial: {
      type: String,
      required: true
    },

  },
  {
    timestamps: true
  }
);

toJSON(trialSchema);

const Trial = mongoose.model('Trial', trialSchema);

module.exports = Trial;
