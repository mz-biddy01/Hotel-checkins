const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
   if(err){
       console.log(err);
   }


    const db = client.db('hotel_checkins');
    const checkinsCollection = db.collection('checkins');
    const checkinsRouter = createRouter(checkinsCollection)
    app.use('/api/checkins', checkinsRouter);
    

    app.listen(5000, function () {
      console.log(`app listening on port ${this.address().port }`);
    })
})