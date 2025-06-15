require("dotenv").config();
const connectDB =require("./db/connection")
const Product =require("./models/product")
const data=require("./product.json")
const add=async()=>{
    await connectDB(process.env.MONGODB_URL);
    await Product.create(data)
    console.log("success")
}
add();