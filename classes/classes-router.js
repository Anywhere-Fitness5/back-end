const express = require("express");
const instructor = require("./classes-model");
const restrict = require("../auth/authenticate-middleware");
const router = express.Router();

router.get("/", (req, res) => {
  instructor
    .getClasses()
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes });
      } else {
        res.status(404).json({ message: "Can't get the list of classes." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting the classes." });
    });
});

router.get("/:id", (req, res) => {
  instructor
    .getClassById(req.params.id)
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes });
      } else {
        res.status(404).json({ message: "Class with this ID doesn't exist." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting the classes by ID." });
    });
});

router.post("/", (req, res) => {
  instructor
    .addClass(req.body)
    .then((classes) => {
      res.status(200).json({ classes });
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't post the class." });
    });
});

router.put("/:id", (req, res) => {
  instructor
    .updateClass(req.params.id, req.body)
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes });
      } else {
        res.status(404).json({ message: "Incorrect information provided." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "There was an error updating the class." });
    });
});

router.delete("/:id", (req, res) => {
  instructor
    .removeClass(req.params.id)
    .then((classes) => {
      if (classes) {
        res.status(200).json({ classes });
      } else {
        res.status(404).json({ message: "Class with this ID doesn't exist." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting the class." });
    });
});

module.exports = router;
