const express = require("express");

const router = express.Router();

const getAll = require("./controllers/getAll");
const getOne = require("./controllers/getOne");
const getStacks = require("./controllers/getStacks");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/stacks", getStacks);

module.exports = router;
