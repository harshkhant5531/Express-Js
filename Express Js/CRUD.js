const express=require('express');

const app=express();

const port=3456;

const students=['harsh','khant','rajkot','wt'];

//print all elements in array
app.get('/students',(req,res)=>{
    res.send(students);
    res.send("Data Printed");
})

//getById
app.get('/students/:index',(req,res)=>{
    res.send(students[req.params.index]);
    res.send("Data Printed by their index");
})


//adding elements in array
app.post('/students/:index',(req,res)=>{
students.push(req.params.index);
res.send("Data added");
});

//edit data from entered data
app.patch('/students/:oldData/:newData',(req,res)=>{
const {oldData,newData}=req.params;
students[oldData]=newData;
res.send("Data edited");
});


//delete data from entered data
app.delete('/students/:index',(req,res)=>{
    students.splice(req.params.index);
    res.send("Data Deleted");
})


app.listen(port,()=>{
console.log("Server Started at::"+port);
});