const express=require('express')
const app=express()
const data=require('./data')
app.use(express.json)
const details=[{

}]

app.get('/articles',(req,res)=>{
    res.status(201).json(data)
})

app.post('/createuser',(req,res)=>{
    
    details.push({name:req.body.name,password:req.body.password})
    res.send()
})




app.listen(5000)