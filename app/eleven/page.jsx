import { textToSpeech } from "@components/TextToSpeech";
import { AudioPlayer } from "@components/AudioPlayer";

import React from 'react'

const page = () => {
  return (
    <>
    <button onClick={textToSpeech("Hello this is the literal test for the voice clonning")}>Click here</button>

    <div>{AudioPlayer(textToSpeech)}</div></>
  )
}

export default page