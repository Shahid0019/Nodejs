const mongooese = require("mongoose");

const urlSchema = new mongooese.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: [{ timestamp: { type: Number } }],
}, { timestamps: true });

const URL = mongooese.model("URL", urlSchema);
module.exports = URL;