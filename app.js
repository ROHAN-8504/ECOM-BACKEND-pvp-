let express=require('express');
//s1-import the package
let mongoose=require('mongoose');
let cors=require('cors')
let products=require('./products');
const { type } = require('node:os');
const app=express();
const port=3000

app.use(cors())
app.use(express.json())

//s2-make a connection

let connection=async ()=>{
  await  mongoose.connect('mongodb://localhost:27017/pvpecommerce')
}
//s3-create a schema
let productschema=new mongoose.Schema({
title:{type:String,required:true},
price:{type:Number,required:true},
image:{type:String,required:true}
})

//s4-create a model
let productsmodel=mongoose.model('products',productschema)




app.get('/',(req,res)=>{
 res.send('server is active')
})



//api  when client sends get request server should a response
//which is the product data
app.get('/products',async (req,res)=>{
  let max=req.query.limit
  let allproducts=await productsmodel.find().limit(max)
res.json(allproducts)
})


//route parametrs
app.get('/product/:id',async (req,res)=>{
   let productid= req.params.id
  let product=await productsmodel.findById(productid)
res.json(product)
})


app.post('/products',async (req,res)=>{
const {title,price,image}=req.body
let newproduct={title,price,image}
await productsmodel.create(newproduct)
res.json({msg:"product are saved"})
})
//t4-bulk insert
app.post('/bulkproducts',async(req,res)=>{
 
 await productsmodel.insertMany(req.body)
 res.json({msg:"all product are saved"})
})






app.get('/users',(req,res)=>{
    res.json({
  id: 1,
  username: "johndoe",
  password: "John@123",
  email: "johndoe@example.com",
  role: "user"
})
})
app.listen(port,async ()=>{
    console.log(`server is running on ${port}`)
    connection();
    console.log("db connected")
 await productsmodel.findByIdAndUpdate('6a2bd582883b7a7a92376b09',{title:"boat headphones"})
 
})