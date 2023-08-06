const express=require('express')
const app=express()

app.use(express.json())
const persons=[]
const bcrypt=require('bcrypt')
app.get('/users',(req,res)=>
{
res.json(persons);
})
app.post('/users', async(req,res)=>
{
    try {
    const passLogin= await bcrypt.hash(req.body.password,10)
    console.log(passLogin)
    const user={username:req.body.username,password:passLogin}
     persons.push(user)
    res.status(201).send([])
        
    } catch (error) {
        console.log("error")
        
    }
  
    

})
app.post('/users/login',async(req,res)=>
{

const user=persons.find(user=>user.name===req.body.name)
if(user===null){
    res.send("user not found")
}
try{
   if(await bcrypt.compare(req.body.passLogin,passLogin)) 
   {
    res.send('successful login')
   }
   else{
    res.send('')
   }



}
catch(error){

}

})


app.listen(5000)