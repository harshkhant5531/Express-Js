const express = require('express');
const path=require('path');

const app = express();
const port = 1665;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/navbar',(req,res)=>{
  res.sendFile(path.join(__dirname,'./htmlFile/navbar.html'));
  })

app.get('/home',(req,res)=>{
res.sendFile(path.join(__dirname,'./htmlFile/home.html'));
})

app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname,'./htmlFile/about.html'));
})

app.get('/contact',(req,res)=>{
  res.sendFile(path.join(__dirname,'./htmlFile/contact.html'));
    })

app.get('/feedback',(req,res)=>{
  res.sendFile(path.join(__dirname,'./htmlFile/feedback.html'));
    })

app.listen(port, () => {
  console.log('server started at:','',+port);
})