const express = require('express');
const path=require('path');

const app = express();
const port = 2685;


const firstMiddleware =(req,res,next)=>{
console.log("this is firstMiddleware");
next();
}

const secondMiddleware =(req,res,next)=>{
    console.log("this is secondMiddleware");
    next();
    }
app.get('/home',firstMiddleware,secondMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'./htmlFile/home.html'));
    })



    app.listen(port, () => {
        console.log('server started at:','',+port);
      })