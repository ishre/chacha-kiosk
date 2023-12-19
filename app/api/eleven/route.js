const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
 
app.post('/eleven', async (req, res) => {
  try {
    const { inputText } = req.body;
    
    // Set the ID of the voice to be used.
    const VOICE_ID = 'j3NYIAe1rWlPcCnD6jpA';
  
    // Set options for the API request.
    const options = {
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      headers: {
        accept: 'audio/mpeg',
        'content-type': 'application/json',
        'xi-api-key': process.env.ELEVEN_LABS_API_KEY,
      },
      data: {
        text: inputText,
      },
      responseType: 'arraybuffer',
    };
  
    // Send the API request using Axios and wait for the response.
    const speechDetails = await axios.request(options);
  
    // Return the binary audio data received from the API response.
    res.set('Content-Type', 'audio/mpeg');
    res.send(speechDetails.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
