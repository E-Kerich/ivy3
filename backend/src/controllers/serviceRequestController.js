const ServiceRequest = require("../models/ServiceRequest");
const {
  sendServiceRequestAdminEmail,
  sendServiceRequestUserEmail,
} = require("../services/resendService");

const createServiceRequest = async (req, res) => {
  try {
    const { fullName, email, organization, service, message } = req.body;

    if (!fullName || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Full name, email, service, and message are required.",
      });
    }

    const serviceRequest = await ServiceRequest.create({
      fullName,
      email,
      organization,
      service,
      message,
    });

    await Promise.all([
      sendServiceRequestAdminEmail({
        fullName,
        email,
        organization,
        service,
        message,
      }),
      sendServiceRequestUserEmail({
        fullName,
        email,
        service,
      }),
    ]);

    res.status(201).json({
      success: true,
      message: "Service request submitted successfully.",
      data: serviceRequest,
    });
  } catch (error) {
    console.error("Create service request error:", error.message);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while submitting service request.",
    });
  }
};

module.exports = { createServiceRequest };