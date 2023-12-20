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
              <p>How does the Namami Gange Mission contribute to the conservation of biodiversity in the Ganga River?</p>
            </div>

            <div>
              {" "}
              <div className="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                <p className="font-bold">Chacha Ji</p>
                <p>
                The Namami Gange Mission plays a crucial role in biodiversity conservation along the Ganga River. It involves afforestation and reforestation programs to create green buffers along the riverbanks, providing habitat for diverse flora and fauna. Additionally, the mission focuses on the protection of aquatic life, including endangered species, by implementing measures to maintain water quality and prevent pollution. Through these initiatives, Namami Gange seeks to preserve the rich biodiversity of the Ganga basin, ensuring the ecological balance and sustainability of the river ecosystem.
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
