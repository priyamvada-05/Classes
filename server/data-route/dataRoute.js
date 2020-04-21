const express=require('express');
const routes=express.Router();
const classesUserModel = require('../data-model/dataModelUpdated')
const classesVideoModel= require('../data-model/messageModel');



routes.post('/data/registerUserByDefault', (req, res)=>{
  const { username, email, password, phoneNo, suscribe}= req.body;
  console.log(req.body)
  classesUserModel.find({username, email, phoneNo}).then((existingUser)=>{
        if(existingUser.length>0){
              res.status(400).send({status: 'user already registered'})
        }

        else{
          //let suscribe= Boolean(suscribe)
          let classesUserModelObj= new classesUserModel({username, email, password, phoneNo, suscribe});
          classesUserModelObj.save().then((data)=>{
            console.log('user saved to db');
            res.send({status: 'saved to db ok'})
          }).catch((err)=>{
            res.status(400).send({status: 'error occured while saving', error: err})
          })
        }

  })

})

routes.post('/data/viewUser', (req, res)=>{
    const { email, password}= req.body;
    classesUserModel.find({email, password}).then((data)=>{
      res.status(200).send(data)
}).catch((err)=>{
  console.log(err)
})
  })



routes.post('/data/viewVideo', (req, res)=>{
      const { email, username}= req.body;
      classesUserModel.find({username, email}).then((data)=>{
            if(data[0]['suscribe']){
              classesVideoModel.find({}).then((dataVideo)=>{
                res.send(dataVideo)
              })
            }
            else{
              res.send({message: 'user is not subscribed'})
            }
})
})

routes.post('/data/getAllUserDetail', (req, res)=>{
  classesUserModel.find().then((data)=>{
    res.send(data)
  })
})

routes.post('/data/suscribe', (req, res)=>{

  const { userID}= req.body;
  console.log('suscribe')
  classesUserModel.findOneAndUpdate(
      { _id: userID},
      { suscribe: true}).then((data)=>{
        console.log(data)
        res.send(data)
      })

})

routes.post('/data/uploadVideoLink', (req, res)=>{

  const { videoLink, description}= req.body;
  if(videoLink){
  let classesVideoModelObj = new classesVideoModel({ videoLink, description})
  classesVideoModelObj.save().then((data)=>{
    res.send(data)
  })
}
})

module.exports=routes;