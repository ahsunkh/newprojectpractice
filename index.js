const express = require ('express')
const students = require ('./students')
// const mongoose = require ('mongoose')
const app =express()


// mongoose.connect('mongodb+srv://dilawarali:<password>@cluster0.59ihx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/node',
// {
//    name:'node',
//  user:'dilawarali',
//  pass:'dilawarali78#',
//  useNewUrlParser:  true,
//  useUnifiedTopology: true 
// })
app.use(express.json())

app.listen(3000,() =>{
    console.log("listening on port 3000");
})

app.get('/',(req,res) => {
    res.json({message : "api is working"})
})

    app.get('/api/students',(req,res) => {
        res.json(students)
})

app.post('/api/students',(req,res) => {
   
 const user={
        id : students.length +1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
}
    students.push(user)
    res.json(user)
})

app.put('/api/students/:id',(req,res) => {
   
  
         let id = req.params.id
         let first_name = req.body.first_name
         let  last_name = req.body.last_name
         let email = req.body.email

         let index = students.findIndex((student) =>{
             return(student.id == Number.parseInt(id))

         })

         if (index >= 0){
             let std = students[index]
             std.first_name = first_name
             std.last_name = last_name
             std.email = email
             res.json(std)

         }
         else{
             res.status(404)
         }


  
   })


   
app.delete('/api/students/:id',(req,res) => {
    let id = req.params.id;
    let index = students.findIndex((student) =>{
        return(student.id == Number.parseInt(id))
    })
        if (index >= 0){
            let std = students[index]
            students.splice(index,1)
            res.json(std)

        }
        else{
            res.status(404)
        }
    })