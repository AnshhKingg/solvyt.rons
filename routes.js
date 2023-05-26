import express from "express"; 
import path from "path"; 
const router = express.Router();
const app = express();
const __filename = import.meta.url.substring(7);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'home.html');
    console.log("The File Path", filePath);
    res.sendFile(filePath);
});

export default router;