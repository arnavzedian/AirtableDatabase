var express = require("express");
var router = express.Router();
// const read = require("../controllers/read");
const write = require("../controllers/write");

// router.get("/data", read);
router.post("/data", write);

module.exports = router;
