const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { text, voice = 'keli_hailuo' } = req.query;

  console.log('Received request URL:', req.url);

  if (!text) {
    console.log('Missing text parameter');
    return res.status(400).send('Missing text parameter. Please provide a "text" query parameter.');
  }

  console.log('Received text:', text);

  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    console.error('API_URL environment variable is not set');
    return res.status(500).send('Server configuration error: API_URL is not set');
  }
  
  const keys = [];
  for (let i = 1; i <= 10; i++) {
    const key = process.env[`KEY_${i}`];
    if (key) {
      keys.push(key);
    }
  }

  if (keys.length === 0) {
    console.error('No API keys found in environment variables');
    return res.status(500).send('Server configuration error: No API keys available');
  }

  const authorization = keys.join(',');

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authorization}`,
        'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "hailuo",
        input: text,
        voice: voice
      })
    });

    if (!response.ok) {
      console.log('API response not OK:', response.status, response.statusText);
      return res.status(response.status).send(`Error fetching audio: ${response.status} ${response.statusText}`);
    }

    const audioData = await response.buffer();
    const fileName = `audio_${Date.now()}.mp3`;  // Generate a unique filename
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.send(audioData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send(`Internal server error: ${error.message}`);
  }
};
