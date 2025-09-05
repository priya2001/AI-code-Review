const express = require('express');
const { getReview } = require("../controllers/ai.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/get-review", authMiddleware, getReview);

module.exports = router;
