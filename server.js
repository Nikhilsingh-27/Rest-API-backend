require("dotenv").config();
const express=require("express")
const app=express();
const PORT=process.env.PORT||5000;
const product_routes=require("./routes/product")
const connectDB =require("./db/connection");

app.get("/",(req,res)=>{
    res.status(200).json({msg:"home page"})
    console.log("hello")
})
app.use("/api/products",product_routes)
app.listen(PORT,async()=>{
    await connectDB(process.env.MONGODB_URL);
    console.log("server is listenig")
})