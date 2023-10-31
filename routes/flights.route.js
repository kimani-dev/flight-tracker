const { Router } = require("express");
const {
  getFlights,
  createFlight,
} = require("../controllers/flight.controller");
const router = Router();

router.get("", getFlights);
router.post("", createFlight);

module.exports = router;
