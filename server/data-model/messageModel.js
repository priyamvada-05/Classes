const mongoose=require('mongoose');

const MessageSchema= new mongoose.Schema({
	videoLink:{type: String,  require: true},
	description:{type: String,  require: true, default:''},
	createdAt:{ type: Date, default:Date.now},
})

module.exports=mongoose.model('ClassesVideoModel', MessageSchema);