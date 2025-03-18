const express=require('express');
const path=require('path');
const app=express();
const port=3001;

user=[{id:101,name:"aditya"}]
app.use(express.json())
app.get("/users",(req,res)=>{
    res.status(200).json(user);
})
app.post('/create',(req,res)=>{
//  const id=req.body.id;
//  const name=req.body.name;
 const {id,name}=req.body;
 const newUser={
    id,name
 }
 user.push(newUser);
 res.status(201).json({status: "success",message: "user creatd successfully",data: newUser})
})

//const user=[{id:101,name:"aditya"}]

//app.set("view engine","ejs")

// app.use(function (req,res,next){
//     console.log("middelware is working")
//     next();

// const m1=(req,res,next)=>{
//     const age=req.query.age;
//     if(!age){
//         res.send("enter age in query")  
//     }
//     if(age<18){
        
//         res.send("age restricted")
//     }
//     next();
// }

// const m2=(req,res,next)=>{
//     const age=req.query.age;
//     if(!age){
//         res.send("enter the age")
//     }
//     if(age<=18)
//     {
//         res.send("age restricted")
//     }
//     next();

// }

// const m2=(req,res,next)=>{
//     const age=res.query.age;
//     if(age<=18){
//         res.send("enter the age in url");
//     }
//     next();
// }


// })
// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/about",(req,res)=>{
//     res.send("welcome "+req.query.name)
// })

// app.use(m1);
// app.get("/adi/ass/:name",m2,function(req,res){
//     res.send(`welcome ${req.params.name}`)
// })

// app.get("/about",(req,res)=>{
//     res.send("this is about page");
// })
// app.get("/course",m2,(req,res)=>{
//     res.send("welcome to ")
// })

// app.get("/course",(req,res)=>{
//     res.send("this is about page");
// // })
// const user=path.join(__dirname,'public')
// app.use(express.static(user))


app.listen(port,()=>{
    console.log(`app is run at http://localhost :${port}`)
}) 