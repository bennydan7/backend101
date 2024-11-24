const getMessages = (req, res) => {
    res.send('<ul><li>The Rookie</li><li>10/10</li></ul>');
}

function postMessages(req, res) {
    console.log("Updating messages....")
}

export default {
    getMessages,
    postMessages
};
