import express from 'express';

const app = express();
const PORT = 3000

app.get('/',(req,res)=>{
    res.send({
        id: 1,
        name : 'John Doe'
    })
})

app.get('/messages',(req,res)=>{
    res.send('<ul><li>Message 1</li><li>Message 2</li></ul>')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
