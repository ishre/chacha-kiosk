// pages/index.js
"use client"
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [audioData, setAudioData] = useState(null);

  const handleTextToSpeech = async () => {
    try {
      const response = await axios.post('/api/eleven', { inputText });
      setAudioData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleTextToSpeech}>Convert to Speech</button>
      {audioData && (
        <audio controls>
          <source src={`data:audio/mpeg;base64,${Buffer.from(audioData).toString('base64')}`} />
        </audio>
      )}
    </div>
  );
};

export default Home;
