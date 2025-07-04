const fs = require('fs')
const https = require('https')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const passport  = require('passport')
const { Strategy } = require('passport-google-oauth20')

require('dotenv').config()

const PORT = 3000
const config = {
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SECRET : process.env.CLIENT_SECRET
}


//security related middleware
// right at the top 
/*  some middle to check security

app.use((req
, res, next) => {
    const isLoggdIn = true  // TODO
    IF (!isLoggedIn) {
        return res.status(401)
        next()})
        
        */
       
    

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
};

function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log('Google profile', profile);
    done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express()

app.use(helmet())
app.use(passport.initialize())

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

app.get('/auth/google',
    passport.authenticate('google',{
        scope: ['email']
    })
)

app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
        session: false
    })
)

app.get('/auth/logout', (req,res) =>{})

app.get('failure', (req,res)=>{
    return res.send('Failed to log in')
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

https.createServer({
    key:  fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
},app).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})

