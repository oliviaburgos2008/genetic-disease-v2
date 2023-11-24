//1. import express
const express = require("express");

//2.Constants app where I have all functionalities of express
const app = express();

app.use(express.json());//allow being able to obtain the body in json format.
app.use(express.urlencoded({ extended: true })); //allow being able to obtain the body in url-encoded


//definition of functions

const findAll = (req, res) => {

  return res.status(200).json({
    message: 'method get- findAll'
  })
}


const create = (req, res) => {
  
  const disease = req.body;
  
 return res.status(201).json({
  message: 'method post - create',
  data: disease
 })
}


const findOne =  (req, res) => {

  console.log(req.params)

  return res.status(200).json({
    message: 'method get - findOne',
    id: req.params.id
  })
}


const update = (req, res) => {

  const { id } = req.params;

  return res.status(200).json({
    message: 'method patch - update',
    id,
  })
}

const deleteDisease = (req, res) => {

  const { id } = req.params;

  return res.status(200).json({
    message: 'method delete - delete',
    id,
  })
}




//3. Define the endpoint

//endpoint to find all genetic-diseases
app.get("/api/v1/genetic-diseases", findAll);


//endpoint to create a genetic-diseases
app.post("/api/v1/genetic-diseases", create);


//endpoint to find a genetic-disease
app.get('/api/v1/genetic-diseases/:id', findOne)


//endpoint to update a genetic-disease
app.patch('/api/v1/genetic-diseases/:id', update)


//endpoint to delete a genetic-disease

app.delete('/api/v1/genetic-diseases/:id', deleteDisease)



//4. Set the server to listen on a port
app.listen(3000, () => {
  console.log("Server running on port: " + 3000);
});
