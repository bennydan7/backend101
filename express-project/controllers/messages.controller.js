import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getMessages = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
    
};

function postMessages(req, res) {
    console.log("Updating messages...");
}

export default {
    getMessages,
    postMessages,
};
