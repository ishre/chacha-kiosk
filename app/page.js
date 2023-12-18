"use client"

import { CardTitle, CardHeader, CardContent, Card } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { useState } from 'react';


export default function Home() {
  const [showFAQ, setShowFAQ] = useState(true);

  const toggleSection = () => {
    setShowFAQ(!showFAQ);
  };

  const handleSendMessage = (message) => {
    // Handle sending the message logic here
    console.log(`Message sent: ${message}`);
    // You can also toggle the section after sending the message if needed
    toggleSection();
  };
  return (
    <div className="min-h-screen p-8">
      <main>
        
        {showFAQ ? (
          <section className="my-8">
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


        <section className="my-8">
          <h2 className="text-xl font-semibold mb-4">Chat with Chacha Ji</h2>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <input
              aria-label="Chat input"
              className="flex-grow border-2 border-gray-200 rounded-lg p-2"
              placeholder="Type your message"
              type="text"
            />
            <Button className="ml-4">Send</Button>
          </div>
        </section>
            <button className="flex-start p-3 max-w-[160px] my-6 border shadow-sm" onClick={toggleSection}>Switch to Chat</button>
          </section>
        ) : (
              

          <section className="my-8">
           
           <h2 className="text-4xl text-center font-bold mb-4 orange_gradient">FAQs & Helpdesk</h2>
           

          <div className=" p-6 rounded-lg border border-gray-300">
            <div className="space-y-4">
              <div className="flex items-end">
                <div className="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                  <p className="font-bold">You</p>
                  <p>Hello, I need to know more about Ganga Ji.</p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="bg-yellow-50 rounded-bl-none rounded-lg p-2 text-gray-700">
                  <p className="font-bold">Chacha Chaudhary</p>
                  <p>Ha bete kya janna chahte ho.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <input
                aria-label="Chat input"
                className="flex-grow border-2 border-gray-200 rounded-lg p-2"
                placeholder="Type your message"
                type="text"
              />
              <Button className="ml-4">Send</Button>
            </div>
          </div>
          <button className="flex-start p-3 max-w-[160px] my-6 border shadow-sm" onClick={toggleSection}>Switch to FAQ</button>

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