const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiryRoutes");
const serviceRequestRoutes = require("./routes/serviceRequestRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Ivy 3 backend is running" });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/service-requests", serviceRequestRoutes);

module.exports = app;