import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import cors from 'cors'

//app config
const port = 9000
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Origin","*")
    next()
})
app.use(cors())


//db config
const connection_url = 'mongodb+srv://williamnyein:thestudent@cluster0.7ejokyj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_url).then(()=>console.log('db is working')).
catch(err=>console.log(err))


//api
app.get('/',(req,res)=> res.status(200).send('hello'))

app.get('/v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})



app.post('/v2/posts',(req,res)=>{
    const dbVideo = req.body;
    Videos.create(dbVideo,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

})



//server
app.listen(port,()=>console.log(`listening on port ${port}` ))