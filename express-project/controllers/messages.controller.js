import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getMessages = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
    // res.send('<ul><li>The Rookie</li><li>10/10</li></ul>');
};

function postMessages(req, res) {
    console.log("Updating messages...");
}

export default {
    getMessages,
    postMessages,
};
