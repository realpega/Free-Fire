const express = require('express');
const path = require('path');

// Dynamic import for `node-fetch` in CommonJS
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to fetch data
app.get('/api/data', async (req, res) => {
    const { region, uid } = req.query;

    if (!region || !uid) {
        return res.status(400).json({ error: 'Region and UID are required!' });
    }

    try {
        const apiUrl = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=83848373993037`;
        const response = await fetch(apiUrl); // Use dynamic fetch
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Invalid UID!' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));