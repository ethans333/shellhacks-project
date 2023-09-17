import { useState } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="center-page">
          <div className="font-semibold mt-10 text-9xl money-text">ƒinboʈ</div>
          <div className="text-center text-gray-400 font-weight-light mt-10 w-3/4 lg:w-full">
            Your Own Personal Finance Assistant, ⚡ by AI.
          </div>
          <div className="grid mt-32 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10">
            <div className="font-semibold mt-5 text-4xl lg:text-5xl w-3/4">
              Powered by GPT 4 💪
            </div>
            <div className="mt-5 pb-16 lg:pb-24">
              Mollit do sunt reprehenderit cillum dolore adipisicing amet dolor
              mollit sunt nisi officia nostrud labore. Sunt anim culpa esse duis
              mollit officia eu labore laborum id deserunt consequat dolor.
            </div>
          </div>
          <div className="grid pt-16 lg:pt-24 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10 border-t">
            <div>
              Mollit do sunt reprehenderit cillum dolore adipisicing amet dolor
              mollit sunt nisi officia nostrud labore. Sunt anim culpa esse duis
              mollit officia eu labore laborum id deserunt consequat dolor.
            </div>
            <div className="font-semibold mt-5 text-4xl lg:ml-32 lg:text-5xl mb-10">
              Created for Everyone 🌎
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
