const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route to fetch data from the API
app.get('/api/script', async (req, res) => {
    const { region, uid } = req.query;
    const apiUrl = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=sounava777`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
