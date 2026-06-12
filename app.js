let express=require('express');
const app=express();
const port=3000
app.get('/',(req,res)=>{
 res.send('server is active')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})