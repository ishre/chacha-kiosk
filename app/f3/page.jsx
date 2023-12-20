import React from "react";
import Image from "next/image";

const page = () => {
    function redirectToHome() {
        window.location.href = "/";
      }
      
  return (
    <section className="my-8 ">
      <h2 className="text-4xl text-center font-bold mb-12 orange_gradient">
        Chatting with Chacha Ji
      </h2>
      <div className=" p-6  "></div>
      <div className="space-y-4">
        <div className="flex justify-end">
          <div className="bg-blue-50  p-8 text-gray-700">
            <div className="test flex mb-5 font-bold">
              <p>What is the Namami Gange Mission?</p>
            </div>

            <div>
              {" "}
              <div className="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                <p className="font-bold">Chacha Ji</p>
                <p>
                The Namami Gange Mission is a government initiative in India that aims to rejuvenate and conserve the Ganga River. Launched in 2014, the mission focuses on various goals to address the environmental and ecological challenges facing the Ganga. Some key objectives include:
1. Wastewater Management: Implementing projects for the treatment of municipal and industrial wastewater to reduce pollution in the Ganga.

2. Riverfront Development: Undertaking projects to develop the riverfront in a sustainable and environmentally friendly manner.

3. Biodiversity Conservation: Initiating efforts to protect and enhance the biodiversity of the Ganga basin, including the conservation of aquatic life.

4. Afforestation and Reforestation:*Promoting afforestation and reforestation along the riverbanks to prevent soil erosion, enhance groundwater recharge, and improve overall ecological balance.

5. Public Awareness and Participation: Creating awareness among the public about the importance of the Ganga and involving communities in the conservation efforts.

6. Industrial Pollution Control: Implementing measures to control and reduce pollution from industries located along the Ganga River.

The Namami Gange Mission reflects a comprehensive and integrated approach to ensure the sustainable management of the Ganga River and its basin, emphasizing the involvement of various stakeholders in the conservation process.
                </p>
              </div>
            </div>
            <section className="my-4  ">
              <div className="form shadow-lg bg-blue-500/10 p-4 rounded-3xl rounded-bl-none">
                <form className="width: 100% flex flex-auto">
                  <input
                    aria-label="Chat input"
                    className="flex-auto  border-2 border-gray-200 rounded-3xl rounded-bl-none rounded-r-none p-4"
                    placeholder="Type your message"
                    type="text"
                    value="Type here..."
                  />
                  <button
                    type="submit"
                    className="mx-3 px-8 border-2 shadow-lg bg-blue-600 rounded-3xl rounded-l-none text-white font-bold hover:bg-orange-00"
                  >
                    Send
                  </button>{" "}
                </form>
              </div>
            </section>
            <button href="/" className="p-3 rounded-2xl rounded-t-none max-w-[160px] mb-6 -mt-8 border shadow-sm">
              Switch Section
            </button>

            <footer className="py-4">
              <p className="text-center text-gray-600">
                <a href="/">Built by Team Sarvagya @ SIH 2023</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
