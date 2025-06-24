const fs = require('fs')
const https = require('https')
const path = require('path')
const express = require('express')
const helmet = require('helmet')

const PORT = 3000


const app = express()
//security related middleware
// right at the top 
/*  some middle to check security

app.use((req, res, next) => {
    const isLoggdIn = true  // TODO
    IF (!isLoggedIn) {
    return res.status(401)
    next()})

*/
app.use(helmet())

function checkLoggedIn(req,res, next) {
    const isLoggedIn = true
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must Log in!'
        })
    }
    next()
}

app.get('/secret',checkLoggedIn, (req,res)=> {
    return res.send('Your personal secret value is 42!')
})

app.get('/auth/google', (req,res) =>{})

app.get('/auth/google/callback', (req,res) =>{})

app.get('/auth/logout', (req,res) =>{})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

https.createServer({
    key:  fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
},app).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})

