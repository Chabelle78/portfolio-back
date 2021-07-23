const express = require("express");

const router = express.Router();

const getAll = require("./controllers/getAll");
const getOne = require("./controllers/getOne");
const getPictures = require("./controllers/getPictures");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/pictures", getPictures);

module.exports = router;
