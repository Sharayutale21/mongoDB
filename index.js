const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=>{
	console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	
});

const User = mongoose.model("User",userSchema);

//const user2 = new User({
//	name : "Eve",
//	email : "Eve@Yahoo.in",
//	age : 27
//})
//user2.save().then((res)=>{
//	console.log(res)
//}).catch((err)=>{
//	console.log(err)
//});

//User.insertMany([
//	{name : "John",email : "John@gmail.com",age : 25},
//	{name : "Bob" , email : "Bob@gmail.com", age : 30},
//	{name : "Alice" , email : "Alice@gmail.com", age : 44},
//]).then((res)=>{
//	console.log(res)
//})

//User.find({age : {$gt :25 }}).then((res)=>{
//	console.log(res)
//}).catch((err)=>{
//	console.log(err);
//})

//User.findById({_id : "6800bcb753203feb594ccae2"}).then((res)=>{
//	console.log(res)
//}).catch((err)=>{
//	console.log(err);
//})

//User.updateOne({name : "John Doe"} , {age : 26})
//.then((res)=>{
//	console.log(res)
//}).catch((err)=>{
//	console.log(err);
//})

//User.updateMany({age : {$gt : 30}} , {age : 50})
//.then((res)=>{
//	console.log(res)
//}).catch((err)=>{
//	console.log(err);
//})

//User.findOneAndUpdate({name :"John Doe"} , {age : 42} , {new : true})
//.then((res)=>{
//	console.log(res)
//}).catch((err)=>{
//	console.log(err);
//})

User.findOneAndDelete({name :"Alice"})
.then((res)=>{
	console.log(res)
}).catch((err)=>{
	console.log(err);
})