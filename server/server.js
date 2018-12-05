const express = require('express');
const app = express();
const fetch = require('node-fetch')
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const path = require('path');
const parser = require('body-parser');
var cors = require('cors')

app.use(express.static('public'));
app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) =>{
    const db = client.db('coffee_shops');
    const shopsCollection = db.collection('shops');
    const shopsRouter = createRouter(shopsCollection);
    app.use('/api/coffee-shops', shopsRouter);
  })
  .catch(console.err);

const PORT = 3001;

app.listen(PORT, function () {

  console.log('API server running on port', this.address().port)
})
