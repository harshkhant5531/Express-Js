const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const students =[
    {
      id:1140,
      name:'harsh',
      email:'harsh@darshan.ac.in',
      age:19
    },
    {
        id:1540,
        name:'pc',
        email:'pc@darshan.ac.in',
        age:16
      }
];

//getallx


app.get('/students',(req,res)=>{
    res.send(students);
});

//getXById

app.get('/students/:id',(req,res)=>{
const idToEdit=students.find((stu)=>{
if(stu.id==req.params.id){
    return true;
}
})
});


//adding

app.post('/students/:id',(req,res)=>{
    students.push(req.body);
    res.send("Element has been added");
});


//edit data

app.patch('/students/:id',(req,res)=>{
const idToEdit=students.findIndex((stu)=>{
    if(stu.id==req.params.id){
        return true;
    }
});
students[idToEdit]=req.body;
res.send("Data Updated");
});



// delete

app.delete('/students/:id',(req,res)=>{
    const idToEdit=students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students.splice(idToEdit,1);
    res.send("Data Deleted");
});



app.listen(2345,()=>{
    console.log("Server Started at 2345");
});