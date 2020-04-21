const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const config=require('./config');
const router = require('./data-route/dataRoute');
const chatUserModel = require('./data-model/dataModelUpdated')
const messageModel = require('./data-model/messageModel');


mongoose.connect(config.connection_string , {useNewUrlParser: true, useUnifiedTopology: true}).then((client)=>{


    })


const app = express();
app.use(express.json({ limit: '10MB' }));


app.use('/api/v1/application',router);



app.listen(process.env.PORT || 3001, () => console.log(`Server has started.`));