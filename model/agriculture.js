let db = require("../database/connection");

let Agriculture = function (agriculture) {
  this.id = agriculture.id;
  this.name = agriculture.name;
  this.soil_moisture = agriculture.soil_moisture;
  this.lighting_level = agriculture.lighting_level;
  this.location = agriculture.location;
};

Agriculture.createAgriculture = (newAgriculture, result) => {
  db.query("INSERT INTO agriculture SET ?", newAgriculture, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Agriculture.getAgricultureById = (agricultureId, result) => {
  db.query("SELECT * FROM agriculture WHERE id = ? ", agricultureId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Agriculture.getAllAgriculture = (result) => {
  db.query("SELECT * FROM agriculture", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Agriculture.remove = (agricultureId, result) => {
  db.query("DELETE FROM agriculture WHERE id = ?", agricultureId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Agriculture;
