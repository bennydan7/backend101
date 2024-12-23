import express from 'express';
import path from 'path';
import messagesController from './controllers/messages.controller.js';  // Importing the default export
import friendsController from './controllers/friends.controller.js';
import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';


import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { getMessages, postMessages } = messagesController;
const { postFriends, getFriends, getFriend } = friendsController;

const app = express();

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('index', {
        title : "My Friends are Very Clever",
        caption: "Skidiving Yee🤣🤣"
    })
})
app.use('/friends',friendsRouter)
app.use('/messages',messagesRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
