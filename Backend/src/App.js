require('dotenv').config()
const express = require('express');
const noteModel = require('./models/note.model.js')

const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors());
//api

//Post

app.post()
app.post('/api/notes',async function(req,res){
    
const {title,description} = req.body

const note = await noteModel.create({
    title,
    description
})
res.status(201).json({
    message:"data added successfully",
    note
})
})
//Get
app.get('/api/notes',async function(req,res){
    const notesArray = await noteModel.find();

    res.status(200).json({
        message:"notes fetched sucessfully",
        notesArray
    })
})
//Delete
app.delete('/api/notes/:id',async function(req,res){
   const id = req.params.id
    await noteModel.findByIdAndDelete(id);

   res.status(200).json({
    message:"note deleted"
   })
})
//Patch
app.patch('/api/notes/:id',async function(req,res){
  const id = req.params.id;
  const {description} = req.body;
const  notes = await noteModel.findByIdAndUpdate(id,{
    description
  })
  res.status(200).json({
    message:"note updated successfully",
    notes
  })
})
module.exports = app;
