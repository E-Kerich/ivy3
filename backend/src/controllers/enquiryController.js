const Enquiry = require("../models/Enquiry");
const { sendEnquiryEmail } = require("../services/resendService");

const createEnquiry = async (req, res) => {
  try {
    const { fullName, email, organization, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Full name, email, and message are required.",
      });
    }

    const enquiry = await Enquiry.create({
      fullName,
      email,
      organization,
      message,
    });

    await sendEnquiryEmail({
      fullName,
      email,
      organization,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create enquiry error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while submitting enquiry.",
    });
  }
};

module.exports = { createEnquiry };