"use client"
import { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import TypingAnimation from "/components/TypingAnimation";
import { CardTitle, CardHeader, CardContent, Card } from "@components/ui/card"
import { Button } from "@components/ui/button"
export default function Home() {
  const [showFAQ, setShowFAQ] = useState(true);
  const [typedMessage, setTypedMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const toggleSection = () => {
    setShowFAQ(!showFAQ);
  };
  const handleSendMessage = (message) => {
    const newChatMessages = [...chatMessages, { type: 'user', message: typedMessage }];
    setChatMessages(newChatMessages);
    // Handle sending the message logic here
    console.log(`Message sent: ${message}`);
    // You can also toggle the section after sending the message if needed
    toggleSection();
  };
  const handleSendMessageFaq = () => {
    const newChatMessages = [...chatMessages, { type: 'user', message: typedMessage }];
    setChatMessages(newChatMessages);
    // Handle sending the message logic here
    console.log(`Message sent: ${typedMessage}`);
    // Optionally, you can clear the typed message input after sending
    setTypedMessage('');
  };
  const handleChangeMessage = (e) => {
    setTypedMessage(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // If the Enter key is pressed, send the message
      handleSendMessage();
    }
  };
  const handleKeyPressFaq = (e) => {
    if (e.key === 'Enter') {
      // If the Enter key is pressed, send the message
      handleSendMessageFaq();
    }
  };
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
    sendMessage(inputValue);
    setInputValue('');
  }
  const sendMessage = (message) => {
    const url = '/api/chat';
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": message }]
    };
    setIsLoading(true);
    axios.post(url, data).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  }
  return (
    <div className="min-h-screen w-full p-8">
      <main>
        {showFAQ ? (
          <section className="my-6">
            <section className="my-8">
              <h2 className="text-4xl text-center font-bold mb-4 orange_gradient">FAQs & Helpdesk</h2>
              <h3 className="text-lg text-center mb-10">Know more about the life of chachaji and the project namami gange</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="w-full">
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
            <section className="my-6">
              <h2 className="text-center text-2xl font-bold mb-4 orange_gradient">Chat with Chacha Ji</h2>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <input
                  aria-label="Chat input"
                  className="flex-grow border-2 border-gray-200 rounded-lg p-2"
                  placeholder="Type your message"
                  type="text"
                  value={typedMessage}
                  onKeyPress={handleKeyPress}
                  onChange={handleChangeMessage}
                />
                <Button className="ml-4 border " onClick={handleSendMessage}>Send</Button>
              </div>
            </section>
            <button className="flex-start p-3 max-w-[160px] my-6 border shadow-sm" onClick={toggleSection}>Switch to Chat</button>
          </section>
        ) : (
          <section className="my-8">
            <h2 className="text-4xl text-center font-bold mb-12 orange_gradient">Chatting with Chacha Ji</h2>
            <div className=" p-6 rounded-lg border border-gray-300">
              <div className="space-y-4">
                { /*<div className="flex items-end">
                  <div className="bg-yellow-50 rounded-bl-none rounded-lg p-2 text-gray-700">
                    <p className="font-bold">Chacha Chaudhary</p>
                    <p>Ha bete kya janna chahte ho.</p>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <div className="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                    <p className="font-bold">You</p>
                    <div className="chat-messages">{chatMessages.map((msg, index) => (
                      <div key={index} className={msg.type === 'user' ? 'user-message' : 'chacha-message'}>
                        {msg.message}
                      </div>
                    ))}</div>
                  </div>
                </div>*/}
                {
                  chatLog.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}>
                      

                      <div className={`${message.type === 'user' ? 'bg-yellow-50 rounded-bl-none rounded-lg p-2 text-gray-700' : 'bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700'
                        }`}>{message.type === 'user' ? (<p className="font-bold">User</p>) : (<p className="font-bold">Chacha Chaudhary</p>)}
                        {message.message}
                      </div>
                    </div>
                  ))
                }
                {
                  isLoading &&
                  <div key={chatLog.length} className="flex justify-start">
                    <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                      <TypingAnimation />
                    </div>
                  </div>
                }
              </div>
              <div className="flex items-center space-x-4 m-auto mt-4 ">
                <form onSubmit={handleSubmit} className="w-full">
                    <input type="text" className="flex-grow border-2 border-gray-200 rounded-lg p-2" placeholder="Type your message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type="submit" className="ml-4 bg-orange-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-orange-600 transition-colors duration-300">Send</button>
                  
                </form>
                {/*<input
                  aria-label="Chat input"
                  className="flex-grow border-2 border-gray-200 rounded-lg p-2"
                  placeholder="Type your message"
                  onKeyPress={handleKeyPressFaq}
                  type="text"
                  onChange={handleChangeMessage}
                />
                <Button className="ml-4" onClick={handleKeyPressFaq}>Send</Button> */}
              </div>
            </div>
            <button className="flex-start bg-orange-500 hover:bg-orange-600 p-3 max-w-[160px] my-6 text-gray-50 border-black shadow-sm" onClick={toggleSection}>Switch to FAQ</button>
          </section>
        )}
      </main>
      <footer className="py-4">
        <p className="text-center text-gray-600">
          Built by Team Sarvagya @ SIH 2023</p>
      </footer>
    </div>
  )
}