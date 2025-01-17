import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/data', async (req, res) => {
    const { region, uid } = req.query;

    if (!region || !uid) {
        return res.status(400).json({ error: 'Region and UID are required!' });
    }

    try {
        const apiUrl = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=83848373993037`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Invalid UID!' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);