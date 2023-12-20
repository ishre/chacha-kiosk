"use client"

import { useChat, Message } from "ai/react";
import Link from 'next/link';
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { CardTitle, CardHeader, CardContent, Card } from "/components/ui/card"


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
    const inputField = document.querySelector('form input[type="text"]');
    inputField.value = title;

    // Optionally focus the input field for immediate editing:
    inputField.focus();
  };




  return (
    <div className="min-h-screen w-full p-8">
      <Image
        src="/assets/images/nmcgGif.gif" // For local GIFs
        alt="Alternative text for the GIF"
        width={0} // Optional: Set width
        height={0} // Optional: Set height
        quality={100} // Optional: Adjust quality (0-100)
        style={{ width: '150px', height: 'auto', display: 'flex', margin: 'auto' }}
        unoptimized={true}
      />

      <main><section className="my-6">
        {showFAQ ? (
          <section className="my-8">
            <h2 className="text-4xl text-center font-bold mb-4  text-orange-400">FAQs & Helpdesk</h2>
            <h3 className="text-lg text-center mb-10">Know more about the life of chachaji and the project namami gange</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/f1">
                <Card className="w-full cursor-pointer" href="/f-1">
                  <CardHeader>
                    <CardTitle>What is the Ganga River's significance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about the Ganga's cultural importance and role as India's lifeline, sustaining ecosystems and communities.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/f2">
              <Card className="w-full cursor-pointer"  >
                <CardHeader>
                  <CardTitle>How does it promote sustainability?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Explore initiatives such as afforestation, biodiversity conservation, and eco-friendly practices.</p>
                </CardContent>
              </Card></Link>
              <Link href="/f3">
              <Card className="w-full cursor-pointer" >
                <CardHeader>
                  <CardTitle>What is the Namami Gange Mission?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Explore this government initiative's goals, focused on rejuvenating and conserving the Ganga River.</p>
                </CardContent>
              </Card></Link>
              <Link href="/f4">
              <Card className="w-full cursor-pointer" >
                <CardHeader>
                  <CardTitle>How does Namami Gange address pollution?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discover measures like wastewater treatment, solid waste management, and industrial effluent control.</p>
                </CardContent>
              </Card></Link>
              <Link href="/f5">
              <Card className="w-full cursor-pointer" >
                <CardHeader>
                  <CardTitle>How does the Namami Gange Mission address the issue of solid waste management along the Ganga River?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Explore the specific measures undertaken by the Namami Gange Mission to manage and reduce solid waste pollution along the Ganga River.</p>
                </CardContent>
              </Card></Link>
              <Link href="/f6">
              <Card className="w-full cursor-pointer" >
                <CardHeader>
                  <CardTitle>How does the Namami Gange Mission contribute to the conservation of biodiversity in the Ganga River?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Explore the initiatives and strategies implemented by the Namami Gange Mission to safeguard and enhance the biodiversity of the Ganga River ecosystem.</p>
                </CardContent>
              </Card></Link>
            </div>
          </section>
        ) : (
          <section className="my-8 ">
            <h2 className="text-4xl text-center font-bold mb-12 orange_gradient">Chatting with Chacha Ji</h2>
            <div className=" p-6  ">
              <div className="space-y-4">



                {messages.map((message) => {
                  return (
                    <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}>
                      <div className={`${message.type === 'user' ? 'bg-blue-50  p-8 text-gray-700' : 'bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700'
                        }`}>
                        {message.role === 'assistant' ? (
                          <div className="test">
                            <p className="font-bold ">Chacha Ji</p>
                            {message.content.split("\n").map((currentTextBlock, index) => {
                              if (currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;hello</p>
                              } else {
                                return <p key={message.id + index}>{currentTextBlock}hello</p>
                              }
                            })}
                            {audio && <audio autoPlay controls src={`audio/${audio}`} />}
                            {console.log(message.content)}
                            <button
                              className="mt-2 flex-start bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-blue-600 transition-colors duration-300"
                              onClick={() => handleGenerateTTS(message.content)}>
                              Play
                            </button>
                          </div>
                        ) : (
                          <div>
                            <p className="font-bold">You</p>
                            {message.content.split("\n").map((currentTextBlock, index) => {
                              if (currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;hello</p>
                              } else {
                                return <p key={message.id + index}>{currentTextBlock}hello</p>
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
        )}</section><section className="my-4  ">
          <div className="form shadow-lg bg-blue-500/10 p-4 rounded-3xl rounded-bl-none">
            <form onSubmit={handleSubmit} className="width: 100% flex flex-auto" ><input
              aria-label="Chat input"
              className="flex-auto  border-2 border-gray-200 rounded-3xl rounded-bl-none rounded-r-none p-4"
              placeholder="Type your message"
              type="text"
              value={input}
              onChange={handleInputChange}
            />
              <button type="submit" disabled={loading} onClick={toggleSection} className="mx-3 px-8 border-2 shadow-lg bg-blue-600 rounded-3xl rounded-l-none text-white font-bold hover:bg-orange-00">{loading ? "..." : "Send"}</button> </form>
          </div>
        </section>
        <button className="p-3 rounded-2xl rounded-t-none max-w-[160px] mb-6 -mt-8 border shadow-sm" onClick={toggleSection}>Switch Section</button>
      </main>
      <footer className="py-4">
        <p className="text-center text-gray-600">
          Built by Team Sarvagya @ SIH 2023</p>
      </footer>
    </div>
  )
}