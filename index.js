const express=require('express');
const path=require('path');
const app=express();
const port=3000;

//const user=[{id:101,name:"aditya"}]

//app.set("view engine","ejs")

// app.use(function (req,res,next){
//     console.log("middelware is working")
//     next();

const m1=(req,res,next)=>{
    const age=req.query.age;
    if(!age){
        res.send("enter age in query")  
    }
    if(age<18){
        
        res.send("age restricted")
    }
    next();
}

// })
// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/about",(req,res)=>{
//     res.send("welcome "+req.query.name)
// })

// app.use(m1);
app.get("/adi/ass/:name",m1,function(req,res){
    res.send(`welcome ${req.params.name}`)
})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.get("/course",m1,(req,res)=>{
    res.send("welcome to ")
})

// app.get("/course",(req,res)=>{
//     res.send("this is about page");
// // })
// const user=path.join(__dirname,'public')
// app.use(express.static(user))


app.listen(port,()=>{
    console.log(`app is run at http://localhost :${port}`)
}) 