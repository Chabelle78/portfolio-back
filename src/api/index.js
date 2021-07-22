const express = require("express");

const emojis = require("./emojis");
const companies = require("./companies/routes");
const formations = require("./formations/routes");
const jobs = require("./jobs/routes");
const pictures = require("./pictures/routes");
const projects = require("./projects/routes");
const stacks = require("./stacks/routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/companies", companies);
router.use("/formations", formations);
router.use("/jobs", jobs);
router.use("/pictures", pictures);
router.use("/projects", projects);
router.use("/stacks", stacks);

module.exports = router;
