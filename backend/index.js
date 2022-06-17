require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors");
const app = express()
const port = 3001
const Unix = require('./models/UnixCommandsSchema')
mongoose.connect(process.env.MONGO_DB,
    { useNewUrlParser: true }
)

app.use(express.json());
app.use(cors());
app.get('/', async(req,res)=>{
    res.send("Hello")
})


// adds data to /insert
app.post('/insert', async (req, res) => {
    const cmd = req.body.command;
    const desc = req.body.description;
    const cat = req.body.category;
    const command = new Unix({
        command: cmd,
        description: desc,
        category:cat

    });
    
    try{
        await command.save()
    } catch(err){
        console.log(err)
    }
    res.send("Inserted")
})
//displays db on /unix-commands path
app.get('/unix-commands', async (req,res)=>{
    Unix.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})