const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { region, uid } = req.query;
  const apiKey = process.env.API_KEY;
  const url = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
