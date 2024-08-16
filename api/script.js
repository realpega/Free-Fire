const axios = require('axios');

module.exports = async (req, res) => {
    const { region, uid } = req.query;
    const apiUrl = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=sounava777`;

    try {
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
