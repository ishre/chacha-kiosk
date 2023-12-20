"use client";
import { useChat, Message } from "ai/react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { CardTitle, CardHeader, CardContent, Card } from "/components/ui/card";
export default function Home() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();
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
        style={{
          width: "150px",
          height: "auto",
          display: "flex",
          margin: "auto",
        }}
        unoptimized={true}
      />
      <main>
        <section className="my-6">
          <section className="my-8 ">
            <h2 className="text-4xl text-center font-bold mb-12 orange_gradient">
              Chatting with Chacha Ji
            </h2>
            <div className=" p-6  ">
              <div className="space-y-4">
                <div class="flex justify-end">
                  <div class="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                    <div>
                      <p class="font-bold">You</p>
                      <p>How does Namami Gange address pollution?</p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                    <div class="test">
                      <p class="font-bold ">Chacha Ji</p>
                      <p>
                        Namami Gange addresses pollution in the Ganga River through a multi-faceted approach that includes several key measures:

                        1. Wastewater Treatment: The mission focuses on setting up sewage treatment plants (STPs) and improving existing ones to treat municipal and industrial wastewater before it is released into the Ganga. This helps in reducing the level of pollutants and contaminants in the river.

                        2. Solid Waste Management: Efforts are made to manage and reduce solid waste along the riverbanks. This involves implementing proper waste disposal practices, promoting recycling, and organizing cleanliness drives to prevent the accumulation of waste in and around the river.

                        3. Industrial Effluent Control: The mission emphasizes controlling and regulating industrial discharges into the Ganga. Stringent measures are implemented to monitor and reduce the release of harmful effluents from industries, ensuring that they comply with environmental standards.

                        4. Biodiversity Conservation: Protecting and restoring biodiversity in the Ganga basin contributes to maintaining a healthy ecosystem. Preserving aquatic life and the overall biodiversity helps in natural pollution control.

                        5. Afforestation and Reforestation: Planting trees along the riverbanks helps prevent soil erosion, filters pollutants, and promotes a healthier ecosystem. Trees play a crucial role in stabilizing riverbanks and maintaining water quality.

                        By implementing these measures, Namami Gange aims to significantly reduce pollution levels in the Ganga River, ensuring the sustainability of this vital water resource for both the environment and the communities depending on it.

                      </p>
                      <audio
                        autoplay=""
                        controls=""
                        src="audio/mj57bw.mp3"
                      ></audio>
                      <button class="mt-2 flex-start bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-blue-600 transition-colors duration-300">
                        Play
                      </button>
                    </div>
                  </div>
                </div>
                {messages.map((message) => {
                  return (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                        }`}
                    >
                      <div
                        className={`${message.type === "user"
                            ? "bg-blue-50  p-8 text-gray-700"
                            : "bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700"
                          }`}
                      >
                        {message.role === "assistant" ? (
                          <div className="test">
                            <p className="font-bold ">Chacha Ji</p>
                            {message.content
                              .split("\n")
                              .map((currentTextBlock, index) => {
                                if (currentTextBlock === "") {
                                  return (
                                    <p key={message.id + index}>&nbsp;</p>
                                  );
                                } else {
                                  return (
                                    <p key={message.id + index}>
                                      {currentTextBlock}
                                    </p>
                                  );
                                }
                              })}
                            {audio && (
                              <audio autoPlay controls src={`audio/${audio}`} />
                            )}
                            {console.log(message.content)}
                            <button
                              className="mt-2 flex-start bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-blue-600 transition-colors duration-300"
                              onClick={() => handleGenerateTTS(message.content)}
                            >
                              Play
                            </button>
                          </div>
                        ) : (
                          <div>
                            <p className="font-bold">You</p>
                            {message.content
                              .split("\n")
                              .map((currentTextBlock, index) => {
                                if (currentTextBlock === "") {
                                  return <p key={message.id + index}>&nbsp;</p>;
                                } else {
                                  return (
                                    <p key={message.id + index}>
                                      {currentTextBlock}
                                    </p>
                                  );
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
        </section>
        <section className="my-4  ">
          <div className="form shadow-lg bg-blue-500/10 p-4 rounded-3xl rounded-bl-none">
            <form
              onSubmit={handleSubmit}
              className="width: 100% flex flex-auto"
            >
              <input
                aria-label="Chat input"
                className="flex-auto  border-2 border-gray-200 rounded-3xl rounded-bl-none rounded-r-none p-4"
                placeholder="Type your message"
                type="text"
                value={input}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                disabled={loading}
                className="mx-3 px-8 border-2 shadow-lg bg-blue-600 rounded-3xl rounded-l-none text-white font-bold hover:bg-orange-00"
              >
                {loading ? "..." : "Send"}
              </button>{" "}
            </form>
          </div>
        </section>
        <a href="/"><button
          className="p-3 rounded-2xl rounded-t-none max-w-[160px] mb-6 -mt-8 border shadow-sm"
        >
          Switch Section
        </button></a>
      </main>
      <footer className="py-4">
        <p className="text-center text-gray-600">
          <a href="/">Built by Team Sarvagya @ SIH 2023</a>
        </p>
      </footer>
    </div>
  );
}
