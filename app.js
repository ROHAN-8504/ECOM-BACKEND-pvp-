let express=require('express');
let cors=require('cors')
let products=require('./products')
const app=express();
const port=3000

app.use(cors())

app.get('/',(req,res)=>{
 res.send('server is active')
})



//api  when client sends get request server should a response
//which is the product data
app.get('/products',(req,res)=>{
res.json(products)
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
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})