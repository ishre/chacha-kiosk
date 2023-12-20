"use client"

import { useChat, Message } from "ai/react"
import { useRef, useState, useEffect } from "react";

import { CardTitle, CardHeader, CardContent, Card } from "@components/ui/card"
import { Button } from "@components/ui/button"


export default function Home() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
  const [showFAQ, setShowFAQ] = useState(true);
  const toggleSection = () => {
    setShowFAQ(!showFAQ);
  };

  const voiceRef = useRef();
  const textRef = useRef();
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [voices, setVoices] = useState([]);

  // handler functions
  const handleGenerateTTS = async (text) => {
    const selectedVoice = voiceRef.current?.value;
    setLoading(true);

    try {
      if (!text || text.trim() === "") {
        alert("Enter some text");
        return;
      }

      const response = await fetch("/api/elevenlabs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          voice: selectedVoice,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const { file } = await response.json();

      setAudio(file);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getVoices() {
      try {
        const response = await fetch("https://api.elevenlabs.io/v1/voices");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        setVoices(data.voices);
      } catch (error) {
        console.log(error.message);
      }
    }

    getVoices();
  }, []);


 const handleCardClick = (title) => {
    // Call your ChatGPT function with the title as input
    // YourChatGPTFunction(title);
    console.log(`Clicked on card with title: ${title}`);
  }
  
  

  return (
    <div className="min-h-screen w-full p-8">
      <main><section className="my-6">
        {showFAQ ? (
          <>
            <section className="my-8">
              <h2 className="text-4xl text-center font-bold mb-4 orange_gradient">FAQs & Helpdesk</h2>
              <h3 className="text-lg text-center mb-10">Know more about the life of chachaji and the project namami gange</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="w-full" >
                  <CardHeader>
                    <CardTitle>What is the Ganga River's significance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about the Ganga's cultural importance and role as India's lifeline, sustaining ecosystems and communities.</p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>What is the Namami Gange Mission?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Explore this government initiative's goals, focused on rejuvenating and conserving the Ganga River.</p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>How does it promote sustainability?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Explore initiatives such as afforestation, biodiversity conservation, and eco-friendly practices.</p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>How does Namami Gange address pollution?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover measures like wastewater treatment, solid waste management, and industrial effluent control.</p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>How does Namami Gange address pollution?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover measures like wastewater treatment, solid waste management, and industrial effluent control.</p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>How does Namami Gange address pollution?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover measures like wastewater treatment, solid waste management, and industrial effluent control.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

          </>
        ) : (
          <section className="my-8">
            <h2 className="text-4xl text-center font-bold mb-12 orange_gradient">Chatting with Chacha Ji</h2>
            <div className=" p-6 rounded-lg border border-gray-300">
              <div className="space-y-4">



                {messages.map((message) => {
                  return (
                    <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}>
                      <div className={`${message.type === 'user' ? 'bg-yellow-50 rounded-bl-none rounded-lg p-2 text-gray-700' : 'bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700'
                        }`}>
                        {message.role === 'assistant' ? (
                          <div>
                            <p className="font-bold">Chacha Ji</p>
                            {message.content.split("\n").map((currentTextBlock, index) => {
                              if (currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;</p>
                              } else {
                                return <p key={message.id + index}>{currentTextBlock}</p>
                              }
                            })}
                            {audio && <audio autoPlay controls src={`audio/${audio}`} />}
                            {console.log(message.content)}
                            <button
                              className="mt-2 bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-blue-600 transition-colors duration-300"
                              onClick={() => handleGenerateTTS(message.content)}>
                              Play
                            </button>
                          </div>
                        ) : (
                          <div>
                            <p className="font-bold">You</p>
                            {message.content.split("\n").map((currentTextBlock, index) => {
                              if (currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;</p>
                              } else {
                                return <p key={message.id + index}>{currentTextBlock}</p>
                              }
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}



              </div>
              
            </div>
          </section>
        )}</section><section className="my-6 flex flex-col justify-stretch">
          <div className="bg-gray-300/20 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <form onSubmit={handleSubmit} ><input
              aria-label="Chat input"
              className=" w-auto m-2 border-2 border-gray-200 rounded-lg p-2"
              placeholder="Type your message"
              type="text"
              value={input}
              onChange={handleInputChange}
            />
              <Button type="submit" disabled={loading} onClick={toggleSection} className="ml-4 border-2 ">{loading ? "..." : "Send"}</Button> </form>
          </div>
        </section>
        <button className="flex-start p-3 max-w-[160px] my-6 border shadow-sm" onClick={toggleSection}>Switch Section</button>
      </main>
      <footer className="py-4">
        <p className="text-center text-gray-600">
          Built by Team Sarvagya @ SIH 2023</p>
      </footer>
    </div>
  )
}