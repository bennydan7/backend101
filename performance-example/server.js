import express from "express";
import cluster from "cluster";
import os from "os";

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
    delay(9000);
    res.send(`Ding ding ding ${process.pid}`);
})

console.log('Running server.js')


if(cluster.isMaster){
    console.log('Master has been started')
    const NUM_WORKERS = os.cpus().length;
    for(let i=0; i<NUM_WORKERS; i++){
        cluster.fork();
    }
}
    else{
        console.log('Woker process started')
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
            });
    }


