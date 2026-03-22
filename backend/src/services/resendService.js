const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * ENQUIRY EMAIL → ADMIN
 */
const sendEnquiryEmail = async ({
  fullName,
  email,
  organization,
  message,
}) => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Enquiry — Ivy 3 Communications`,
      replyTo: email,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br />
        <p style="color: gray;">Submitted via Ivy 3 website</p>
      `,
    });

    return response;
  } catch (error) {
    console.error("Resend enquiry email error:", error);
    throw error;
  }
};

/**
 * SERVICE REQUEST → ADMIN
 */
const sendServiceRequestAdminEmail = async ({
  fullName,
  email,
  organization,
  service,
  message,
}) => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Service Request — ${service}`,
      replyTo: email,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Requested Service:</strong> ${service}</p>
        <p><strong>Details:</strong></p>
        <p>${message}</p>
        <br />
        <p style="color: gray;">Submitted via Ivy 3 website</p>
      `,
    });

    return response;
  } catch (error) {
    console.error("Resend admin service request email error:", error);
    throw error;
  }
};

/**
 * SERVICE REQUEST → USER CONFIRMATION
 */
const sendServiceRequestUserEmail = async ({
  fullName,
  email,
  service,
}) => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `We received your request — Ivy 3 Communications`,
      html: `
        <h2>Hello ${fullName},</h2>
        <p>Thank you for reaching out to Ivy 3 Communications.</p>
        <p>Your request for <strong>${service}</strong> has been received.</p>
        <p>We will review your request and get back to you shortly.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>Ivy 3 Communications</strong></p>
      `,
    });

    return response;
  } catch (error) {
    console.error("Resend user service request email error:", error);
    throw error;
  }
};

module.exports = {
  sendEnquiryEmail,
  sendServiceRequestAdminEmail,
  sendServiceRequestUserEmail,
};