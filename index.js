const app = require('express');
const Port = 8080;

app.listen
(
Port,
()=>console.log('Server connected on htpps:localhost ${PORT}')
)
s
//GET REQUESTS// 

app.get('/post-inner-post',(req,res))
{
res.status(200).send(
    {
     //send data typed by user within form// 
     //Request will look like the following//
     
    }
)


app.get('/updateAssociatedUsers',(req,res))
//update associated users within database and in web page// 


//POST REQUESTS//
app.post("/login",(req,res)=>
{
    res.json("login")
})

app.post("/registerEmail",(req,res)=>
{
    const {email} = req.body
    res.json("email")
})


app.post("/register",(req,res)=>
{
const {username,password} = req.body
res.json("register")
})


}
