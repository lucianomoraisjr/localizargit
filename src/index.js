const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')


const app =  express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<lj>:<7455>@cluster0.si7of.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.use(express.json());

app.use(routes)

app.listen(3333, () =>{
console.log("esta rodando na porta 3333")
})