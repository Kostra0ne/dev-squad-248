var express = require('express');
var router = express.Router();
var DroneModel = require("../models/Drone");


//READ
router.get('/', (req, res, next) => {
  DroneModel.find()
    .then(drones => {
      res.render("allDrones", { drones })
    })
    .catch(err => console.log(err))
});

//CREATE
router.get('/create', (req, res, next) => {
  res.render("formDrones")
})

router.post('/create-new', async (req, res, next) => {
  try {
    const newDrone = await DroneModel.create(req.body)
    console.log(req.body)
    res.redirect("/drones")
  }
  catch (error) {
    console.log(error)
  }
})

//DELETE
router.get('/:id/delete', async (req, res, next) => {
  try {
    const deleteDrone = await DroneModel.findByIdAndRemove(req.params.id)
    res.redirect("/drones")
  }
  catch (error) {
    console.log(error)
  }
})

//UPDATE
router.get("/:id/update", (req, res, next) => {
    DroneModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("formUpdateDrones", { drone: dbRes});
    })
    .catch(next);
});

router.post('/:id/update', async (req, res, next) => {
  try {
    const newDrone = await DroneModel.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/drones")
  }
  catch (error) {
    console.log(error)
  }
})

module.exports = router;