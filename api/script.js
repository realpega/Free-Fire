const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/freefire', async (req, res) => {
    const { region, uid } = req.query;
    const apiUrl = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=sounava777`;

    try {
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
