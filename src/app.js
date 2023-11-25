//1. import express
const express = require("express");
const geneticDiseases = require('./genetic-diseases/genetic-diseases.route')

//2.Constants app where I have all functionalities of express
const app = express();


const calculatedRequestTime = (req, res, next) => {
  const requestTime = new Date().toISOString()

  req.requestTime = requestTime;
  next()
}



app.use(express.json());//allow being able to obtain the body in json format.
app.use(express.urlencoded({ extended: true })); //allow being able to obtain the body in url-encoded
app.use(calculatedRequestTime)


app.use('/api/v1', geneticDiseases)








module.exports = app;