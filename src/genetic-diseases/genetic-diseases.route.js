//configuring a route file
const express = require("express");

//controllers
const geneticController = require("./genetic-diseases.controller");

const router = express.Router();

//3. Define the endpoint

//endpoint to find all genetic-diseases

router.get("/genetic-diseases", geneticController.findAll);

//endpoint to create a genetic-diseases
router.post("/genetic-diseases", geneticController.create);

//endpoint to find a genetic-disease
router.get("/genetic-diseases/:id", geneticController.findOne);

//endpoint to update a genetic-disease
router.patch("/genetic-diseases/:id", geneticController.update);

//endpoint to delete a genetic-disease

router.delete("/genetic-diseases/:id", geneticController.deleteGeneticDiseases);

module.exports = router;
