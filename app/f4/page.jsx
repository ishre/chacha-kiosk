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
              <p>How does Namami Gange address pollution?</p>
            </div>

            <div>
              <div className="bg-orange-50 rounded-br-none rounded-lg p-2 text-gray-700">
                <p className="font-bold">Chacha Ji</p>
                <p>
                  Discover measures like wastewater treatment, solid waste management, and industrial effluent control.

                  Namami Gange addresses pollution in the Ganga River through a multi-faceted approach that includes several key measures:

                  1. Wastewater Treatment: The mission focuses on setting up sewage treatment plants (STPs) and improving existing ones to treat municipal and industrial wastewater before it is released into the Ganga. This helps in reducing the level of pollutants and contaminants in the river.

                  2. Solid Waste Management: Efforts are made to manage and reduce solid waste along the riverbanks. This involves implementing proper waste disposal practices, promoting recycling, and organizing cleanliness drives to prevent the accumulation of waste in and around the river.

                  3. Industrial Effluent Control: The mission emphasizes controlling and regulating industrial discharges into the Ganga. Stringent measures are implemented to monitor and reduce the release of harmful effluents from industries, ensuring that they comply with environmental standards.

                  4. Biodiversity Conservation: Protecting and restoring biodiversity in the Ganga basin contributes to maintaining a healthy ecosystem. Preserving aquatic life and the overall biodiversity helps in natural pollution control.

                  5. Afforestation and Reforestation: Planting trees along the riverbanks helps prevent soil erosion, filters pollutants, and promotes a healthier ecosystem. Trees play a crucial role in stabilizing riverbanks and maintaining water quality.

                  By implementing these measures, Namami Gange aims to significantly reduce pollution levels in the Ganga River, ensuring the sustainability of this vital water resource for both the environment and the communities depending on it.

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
