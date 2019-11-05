let express = require("express");
let router = express.Router();
let Agriculture = require("../model/agriculture");

/* POST agriculture */
router.post("/", function (req, res) {
  let newAgriculture = new Agriculture(req.body);
  if (!newAgriculture.name || !newAgriculture.soil_moisture || !newAgriculture.lighting_level) {
    res.status(400).json({
      error: true,
      message: "Please, provide name, soil_moisture, lighting_level fields."
    });
  }
  Agriculture.createAgriculture(newAgriculture, (err, agricultureId) => {
    if (err) res.json(err);
    res.json(agricultureId);
  });
});

/* GET list of agricultures */
router.get("/", (req, res) => {
  Agriculture.getAllAgriculture((err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
});

/* GET agriculture by id */
router.get("/:agricultureId", (req, res) => {
  Agriculture.getAgricultureById(req.params.agricultureId, (err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
});

/* DELETE agriculture by id */
router.delete("/:agricultureId", (req, res) => {
  Agriculture.remove(req.params.agricultureId, (err, agriculture) => {
    if (err) res.json(err);
    res.json({ message: "Agriculture successfully deleted" });
  });
});

module.exports = router;
