const express=require('express')
const app=express()
const  article =require('./data')
app.get('/articles',(req,res)=>
{
res.status(200).json(article);
})
app.post('/login',(req,res)=>
{
    
})


app.listen(3000)