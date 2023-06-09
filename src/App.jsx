import React from "react";
import { Navbar, Hero, About, Work, Projects, Coursework, Education, Databar, Footer } from "./components";

function App() {
  return (
    <React.Fragment>
      <div className="flex flex-col sm:flex-row h-screen bg-rich-black font-poppins w-full p-2 gap-2 text-base">
        {/**https://coolors.co/011627-e86a92-ffffff-f79d65-ffba08 */}
        <div className="w-full sm:w-[82%] overflow-y-scroll scrollbar-hide px-2 sm:px-10 text-gray-300">
          <Navbar />
          <div className="flex flex-col gap-4">
            <Hero />
            <About />
            <Work />
            <Projects />
            <Coursework />
            <Education />
            <Footer />
          </div>
        </div>
        <Databar customClass={'hidden sm:flex'} />
      </div>

    </React.Fragment>
  )
}

export default App
