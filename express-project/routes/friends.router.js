import express from "express";

import friendsController from "../controllers/friends.controller.js";

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip address:' , req.ip);
    next();
}
);

friendsRouter.post('/',friendsController.postFriends)
friendsRouter.get('/',friendsController.getFriends);
friendsRouter.get('/:friendId',friendsController.getFriend
);

export default friendsRouter;