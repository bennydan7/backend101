import express from "express";

const app = express();

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration);
}

app.get('/', (req, res) => {
    // JSON.stringify({})
    // JSON.parse('{}')
    // [5,4,5343,3].sort()
    // crypto functions in node  like hashing passwords
    res.send('Performance Example');
    })

app.get('/timer',(req,res)=>{
    delay(9000);
    res.send('Ding ding ding')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });