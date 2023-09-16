import NavBar from "./Components/Navbar";
import ChatInput from "./Components/ChatInput";
import ChatResponse from "./Components/ChatResponse";
import paperclip from "../src/assets/paperclip-solid.svg";
import arrow from "../src/assets/arrow-right-solid.svg";
import React, { useRef, useState } from "react";
import chat from "../src/Backend/chat";

export default function Chat() {
  const fileInputRef = useRef(null);

  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([
    <ChatResponse
      text={
        "Hello I'm FinBot! 👋 I'm your own personal fiannce assistant. How can I help you?"
      }
    />,
  ]);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the selected file here (e.g., upload it).
  };

  return (
    <div className="">
      <NavBar />
      <div className="center-page">
        <div className="lg:card-no-padding pb-14 pt-5 px-6 mt-5 w-[98vw] lg:w-[50vw] h-[87vh] lg:h-[80vh]">
          <div className="h-full overflow-y-scroll">{conversation}</div>

          <div className="flex">
            <input
              className="w-full"
              placeholder="Type Here"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={async (e) => {
                if (e.key === "Enter") {
                  setUserInput("");

                  setConversation((prev) => [
                    ...prev,
                    <ChatInput text={userInput} />,
                    <ChatResponse text={"⏳"} />,
                  ]);

                  const res = await chat(userInput);

                  setConversation((prev) => {
                    const updatedConversation = [...prev];
                    updatedConversation.pop(); // Remove the loading indicator
                    updatedConversation.push(
                      <ChatResponse text={res.response} />
                    );
                    return updatedConversation;
                  });
                }
              }}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
            />
            <img
              className="w-4 cursor-pointer mx-2"
              src={paperclip}
              onClick={() => fileInputRef.current.click()}
            />
            <img className="w-4 cursor-pointer" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}
