const mongoose=require('mongoose');

const DataSchema= new mongoose.Schema({
	username:{type: String,  require: true, lowercase: true},
	createdAt:{ type: Date, default:Date.now},
	email:{type: String,  require: true, lowercase: true},
	password: {type: String , require: true},
	isAdmin: {type: Boolean, default: false},
	phoneNo: {type: Number, require: true},
	suscribe: {type: Boolean, default: false}
})

module.exports=mongoose.model('CLassesUserrModel', DataSchema);