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
    res.send(`Performance example: ${process.pid}`);
    })

app.get('/timer',(req,res)=>{
    delay(4000);
    res.send(`Beep beep beep ${process.pid}`);
})

console.log('Running server.js')



        console.log('Woker process started')
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
            });
    


