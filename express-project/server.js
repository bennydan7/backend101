import express from 'express';
import messagesController from './controllers/messages.controller.js';  // Importing the default export
import friendsController from './controllers/friends.controller.js';

const { getMessages, postMessages } = messagesController;
const { postFriends, getFriends, getFriend } = friendsController;

const app = express();
const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends',friendsController.postFriends)
app.get('/friends',friendsController.getFriends);
app.get('/friends/:friendId',friendsController.getFriend
);

app.get('/messages', getMessages); 
app.post('/messages', postMessages);  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
