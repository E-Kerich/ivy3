const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    organization: {
      type: String,
      trim: true,
      default: "",
    },
    service: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Strategic Communications",
        "Advocacy",
        "Reputation Management",
        "Crisis Communications",
        "Media Relations",
        "Storytelling",
      ],
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "in_progress", "completed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);