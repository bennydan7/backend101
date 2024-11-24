import express from 'express';

const app = express();
const PORT = 3000

const friends = [
    {
    id : 0,
    name: 'John Nolan',
},
{
    id : 1,
    name: 'Lucy Chen'
}]

app.use((req,res,next)=>{
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
    // console.log(`Request: ${req.method} ${req.url}`)
    
})

app.get('/friends', (req,res)=>{res.json(friends)})

app.get('/friends/:friendId',(req,res)=>{
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId]
    if(friend){
        res.json(friend)
    }else{
        res.status(404).json({error: 'Friend not found'})
    }
})

app.get('/messages',(req,res)=>{
    res.send('<ul><li>Message 1</li><li>Message 2</li></ul>')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
