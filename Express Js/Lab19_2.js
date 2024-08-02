const express = require('express');

const app = express();
const port = 2077;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/home',(req,res)=>{
res.send("Homepage");
})

app.get('/about',(req,res)=>{
    res.send("aboutpage");
})

app.get('/contact',(req,res)=>{
    res.send("contactpage");
    })

app.get('/feedback',(req,res)=>{
    res.send("feedbackpage");
    })

app.listen(port, () => {
  console.log('server started at:','',+port);
})