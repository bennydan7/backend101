import express from 'express';
import messagesController from './controllers/messages.controller.js';  // Importing the default export
import friendsController from './controllers/friends.controller.js';
import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

const { getMessages, postMessages } = messagesController;
const { postFriends, getFriends, getFriend } = friendsController;

const app = express();
const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/friends',friendsRouter)
app.use('/messages',messagesRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
