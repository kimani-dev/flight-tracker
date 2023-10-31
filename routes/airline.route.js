const { Router } = require("express");
const router = Router();
const {
  getAirlines,
  createAirline,
} = require("../controllers/airline.controller");

router.post("", createAirline);
router.get("", getAirlines);

module.exports = router;
