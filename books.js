const mongoose = require('mongoose');

main().then((res)=>{
	console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true,
	} , 
	author : {
		type : String,
	} ,
	price : {
		type : Number,
		min : [1,"Price is too low for amazon selling"],
	}  ,
	discount:{
		type : Number,
		default : 0,
	},
	category :{
		type : String ,
		enum : ["Fiction","non-fiction","comics","biography"],
	},
	genere : {
		type : [String],
	}
})

const book = mongoose.model("book", bookSchema);

book.findByIdAndUpdate("68024f43702e21982b5fecbc" , {price : -500},{runValidators : true}).then((res)=>{
	console.log(res)
}).catch((err)=>{
	console.log(err.errors.price.properties.message)
})

//let book1 =new book({
//	title :"Harry potter",
//	category : "comics",
//	price : 250,
//	genere : ["fantasy","adventure"],
//})


//book1.updateOne({ _id:'68024dd2ba86f05d41804727'} , {$set : {price : {min : 500}}});

//book1.save().then((res)=>{
//	console.log(res)
//}).catch((err)=> console.log(err));